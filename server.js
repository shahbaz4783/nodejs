const http = require('http');

const routes = require('./routes')

const server = http.createServer(routes);

const port = 8000;
server.listen(port, () => {
    console.log(`Server is running at port ${port}` );
})