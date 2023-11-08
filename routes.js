const fs = require('fs');

const serverHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write('<h1>Submit The form</h1>');
		res.write(
			'<form action="/message" method="POST"><input type="text" name="message" /><button>Send</button></form>'
		);
		return res.end();
	} else if (url === '/message' && method === 'POST') {
		const data = [];
		req.on('data', (chunk) => {
			data.push(chunk);
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(data).toString();
			const message = parsedBody.split('=')[1];
			fs.writeFileSync('message.txt', message);
			res.statusCode = 302;
			res.setHeader('Location', '/');
			return res.end();
		});
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>Node JS Server</title><head>');
	res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
	res.write('</html>');
	res.end();
};

module.exports = serverHandler;
