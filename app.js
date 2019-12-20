const http = require('http');
const fs = require('fs');
const pathURL = new URL("file:///C:/Users/Santeri/Desktop/traineeProgram/Mockdata/testdata/status.real");

http.createServer(function(req, res) {
    // server code
    console.log(`${req.method} ${req.url}`);

    fs.readFile(pathURL, "utf8", (err, data) => {
        if (!err) {
            res.end(data);
        } else {
            console.log("errors: " + err)
        }
    })
}).listen(9000);

console.log('Server listening on port 9000');