const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head>');
		res.write('<title>Node Routing</title>');
		res.write('</head>');
		res.write('<body><h1>This is Home Page</h1></body>');
		res.write(
			'<form action="/contact" method="POST"><input type="text"><button>Contact Page</button></form>'
		);
		res.write('</html>');
		res.end();

	}  else if (url === '/contact') {
		//  This will create a file 'contact.txt' and put 'this is DUMMY Contact' text in it
        fs.writeFileSync('contact.txt', 'this is DUMMY Contact')
        res.statusCode = 302;
		res.setHeader('Location', '/');
		res.end();
	} 

    else if (url === '/service') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head>');
		res.write('<title>Node Routing</title>');
		res.write('</head>');
		res.write('<body><h1>This is a Service Page</h1></body>');
		res.write('</html>');
		res.end();

	} else {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head>');
		res.write('<title>Node Routing</title>');
		res.write('</head>');
		res.write('<body><h1>Page Not Exists!</h1></body>');
		res.write('</html>');
		res.end();
	}
});

const port = 3500;

server.listen(port, () => {
	console.log(`Server is Running at port ${port}`);
});
