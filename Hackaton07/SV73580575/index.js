var http = require('http');
var url = require('url');
const axios = require('axios');

//var q = url.parse(req.url, true).query;
//console.log(q.cuidad);
//console.log(q.cuidad);
//res.write(JSON.stringify({mensaje:"Estas en el clima de "+q.cuidad}));

http.createServer(async function (req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.url)
    let objPersona={
        nombre:"Deivid",
        apellido:"Eneque"
    }

    let strURL = req.url;
    if(strURL.includes("clima")){
        var clima = url.parse(req.url, true).query;
        console.log(clima.ciudad);

        const options = {
            method: 'GET',
            url: 'https://the-weather-api.p.rapidapi.com/api/weather/' +clima.ciudad,
            headers: {
              'x-rapidapi-key': 'b8d33cb0b9mshedb0f92908df8dep1130dcjsnd5a8a4703bf9',
              'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              res.write(JSON.stringify(response.data));
              res.end();
          } catch (error) {
              console.error(error);
          }
    }



    res.write(JSON.stringify(objPersona));
    //res.write("Hola prueba Hackatonh 07");
    //res.write(JSON.stringify({mensaje:"Cualquier Cosa"}));
        res.end();


}).listen(8080);