var http = require('http');
var url = require('url');
const axios = require('axios');


http.createServer(async function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.url)
    
    let strURL = req.url;
    if(strURL.includes("info")){


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
          

       
    }
    else if(strURL.includes("clima")){
        var q = url.parse(req.url, true).query;
        console.log(q.cuidad);


        const options = {
            method: 'GET',
            url: 'https://the-weather-api.p.rapidapi.com/api/weather/' + q.cuidad,
            headers: {
              'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
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
    else{
        res.write(JSON.stringify({mensaje:"Cualquier Cosa"}));
        res.end();
    }

    // let objPersona = {
    //     nombre:"Roberto",
    //     apellido:"Pineda"
    // }
    

}).listen(8900);