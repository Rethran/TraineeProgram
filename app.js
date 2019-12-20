const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    // server code
    console.log(`${req.method} ${req.url}`);
    res.end('hello world!');
    false.readdir()
}).listen(9000);

console.log('Server listening on port 9000');