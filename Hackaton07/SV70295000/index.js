var http = require('http');

http.createServer(async function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.url)

    let strUrl = req.url;
    if(strUrl.includes("pokemon")){ //consulta sobre datos de un pokemon especifico
        
        const axios = require('axios');

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://pokeapi.co/api/v2/pokemon/torterra',
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          resp.write(JSON.stringify(response.data));
          resp.end();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else // lista de pokemones
    if(strUrl.includes("lista")){

      const axios = require('axios');

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        resp.write(JSON.stringify(response.data));
        resp.end();
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else // ruta para consultar los articulos de una fake store
    if(strUrl.includes("store")){
      const axios = require('axios');

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://fakestoreapi.com/products',
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        resp.write(JSON.stringify(response.data));
        resp.end();
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else 
    if(strUrl.includes("clima")){
      let config = {
        
      }
    }
}).listen(8900);