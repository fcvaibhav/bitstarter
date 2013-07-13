var fs = require('fs')

var express = require('express');

var app = express.createServer(express.logger());

var buffernew = new Buffer(40);

var buffernew;
// First I want to read the file
fs.readFile('index.html', function read(err, data) {
    if (err) {
        throw err;
    }
    buffernew = data;
    var content = buffernew.toString("utf-8", 0, buffernew.length)
app.get('/', function(request, response) {
  response.send(content);
});

    });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
