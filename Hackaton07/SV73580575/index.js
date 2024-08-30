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
    //let objPersona={
      //  nombre:"Deivid",
        //apellido:"Eneque"
    //}

    let strURL = req.url;
    if(strURL.includes("clima")){
        var q = url.parse(req.url, true).query;
        console.log(q.ciudad);

        const options = {
            method: 'GET',
            url: 'https://the-weather-api.p.rapidapi.com/api/weather/' +q.ciudad,
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
    }else{
        res.write(JSON.stringify({mensaje:"No es ciudad"}));
        res.end();
    }




    if(strURL.includes("informacion")){
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://randomuser.me/api/',
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            res.write(JSON.stringify(response.data));
            res.end();
          })
          .catch((error) => {
            console.log(error);
          });         
    }else{
        res.write(JSON.stringify({mensaje:"Cualquier Cosa"}));
        res.end();
    }




    //res.write(JSON.stringify(objPersona));
    //res.write("Hola prueba Hackatonh 07");
    //res.write(JSON.stringify({mensaje:"Cualquier Cosa"}));
       // res.end();


}).listen(8080);