const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Server from node</title>')
    res.write('</head>')
    res.write('<body><h1>This is a basic server</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(2000);
