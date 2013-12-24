var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var k = fs.readFileSync('./site/index.html');

buf = new Buffer(k);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});