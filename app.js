const http = require('http');
const fs = require('fs');
var lines = [];
var packages = [];

const pathURL = new URL("file:///C:/Users/Santeri/Desktop/traineeProgram/Mockdata/testdata/status.real");
http.createServer(function(req, res) {
    // server code
    console.log(`${req.method} ${req.url}`);

    fs.readFile(pathURL, "utf8", (err, data) => {

        if (!err) {
            lines = data.split('\n');
            console.log(lines.length);
            console.log(lines[1]);
            res.end(data);



        } else {
            console.log("errors: " + err)
        }
    })
}).listen(9000);

console.log('Server listening on port 9000');