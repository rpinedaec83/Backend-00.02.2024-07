console.log("Hola desde node js");
var http = require('http');
var url = require('url');
var moment = require('moment'); // require
var miFecha = require('./fechas');

var fs = require('fs');

console.log(moment().format())
http.createServer(function (req, res) {

    fs.readFile('demo.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write(req.url)
//   var q = url.parse(req.url, true).query;
//   console.log(q.nombre);
//   console.log(q.apellido);

  //res.end(`Hola que tal desde nodejs by ${q.nombre} ${q.apellido}! ${miFecha.myDateTime()}`);
}).listen(8080);