// Create web server
// Create a web server that listens for requests on port 3000 and responds with the contents of comments.json

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  fs.createReadStream('./comments.json').pipe(res);
});

server.listen(3000, function () {
  console.log('Server is listening on port 3000');
});