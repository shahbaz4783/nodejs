const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
    const method = req.method;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write(
			`<h2>Hello, welcome in the year ${new Date().getFullYear()} </h2>`
		);
        res.write(`
        <form action="/create-user" method="POST">
        <input type="text" name="username" placeholder="Enter Username"/>
        <br />
        <br />
        <button>Add User<//button>
        </form>
        `)
		return res.end();
	} else if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write(
			`<h2>List of Users</h2>
            <ul>
            <li>Alex</>
            <li>Henry</>
            <li>Miller</>
            <li>Jospeh</>
            <li>Kevin</>
            </ul>
            `
		);
		return res.end();
	} else if (url === '/create-user' && method === 'POST') {
        const data = [];
				req.on('data', (chunk) => {
					data.push(chunk);
				});
				return req.on('end', () => {
					const parsedBody = Buffer.concat(data).toString();
					const username = parsedBody.split('=')[1];
					fs.writeFileSync('users.txt', username);
					res.statusCode = 302;
					res.setHeader('Location', '/');
					return res.end();
				});
    }
});

const port = 3000;
server.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
