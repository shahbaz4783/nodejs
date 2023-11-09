const http = require('http');
const fs = require('fs');

const post = [
	{ id: 1, title: 'Post One', body: 'This is post one' },
	{ id: 2, title: 'Post Two', body: 'This is post two' },
	{ id: 3, title: 'Post Three', body: 'This is post three' },
];

const server = http.createServer((req, res) => {
	const url = req.url;

	if (url === '/') {
		fs.readFile('index.html', (error, content) => {
			if (error) {
				res.writeHead(500, { 'content-type': 'text/html' });
				res.end('<h1>Internal Server Error Occured<h1>');
			} else {
				res.writeHead(200, { 'content-type': 'text/html' });
				res.end(content);
			}
		});
	} else if (url === '/about') {
		fs.readFile('about.html', (error, content) => {
			if (error) {
				res.writeHead(500, { 'content-type': 'text/html' });
				res.end('<h1>Internal Server Error Occured<h1>');
			} else {
				res.writeHead(200, { 'content-type': 'text/html' });
				res.end(content);
			}
		});
	} else if (url === '/contact') {
		fs.readFile('contact.html', (error, content) => {
			if (error) {
				res.writeHead(500, { 'content-type': 'text/html' });
				res.end('<h1>Internal Server Error Occured<h1>');
			} else {
				res.writeHead(200, { 'content-type': 'text/html' });
				res.end(content);
			}
		});
	} else if (url === '/api/post') {
		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(JSON.stringify({ success: true, data: post }));
	} else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.end('<h1>Page Not Found<h1>');
	}
});

server.listen(8000, () => {
	console.log(`Server is Running at port 8000`);
});
