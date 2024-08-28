console.log("Hola desde node js");
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola que tal desde nodejs!');
}).listen(8080);