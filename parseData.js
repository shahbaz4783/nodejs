const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
    const method = req.method;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<h1>Submit The form</h1>');
		res.write(
			'<form action="/message" method="POST"><input type="text" name="message" /><button>Send</button></form>'
		);
		res.end();

	} else if (url === '/message' && method === 'POST') {
		const data = [];
		req.on('data', (chunk) => {
			data.push(chunk);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(data).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
		});

		res.statusCode = 302;
		res.setHeader('Location', '/');
		res.end();
	}
});


const port = 3000;
server.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
