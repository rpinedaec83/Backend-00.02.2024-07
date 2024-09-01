var http  = require('http');
var url = require('url');
const axios = require('axios');

http.createServer(async function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.url);
    let strUrl = req.url;

    // Consultar los datos de GitHub de un usuario especifico.
    if (strUrl.includes("github")) {
        var q = url.parse(req.url, true).query;
        console.log(q.usuario);
        
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.github.com/users/' + q.usuario,
            headers: { }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Consultar el Clima de una ciudad o ubicacion especifica
    else if (strUrl.includes("clima")) {
        var q = url.parse(req.url, true).query;
        console.log(q.ciudad);

        const options = {
            method: 'GET',
            url: 'https://the-weather-api.p.rapidapi.com/api/weather/' + q.ciudad,
            headers: {
              'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
              'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
            }
        };
          
        try {
            const response = await axios.request(options);
            res.write(JSON.stringify(response.data));
            res.end();
        }
        catch (error) {
            console.error(error);
        }
    }

    // Consultar el tipo de cambio del dolar en Peru
    else if (strUrl.includes("cambio")) {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.apis.net.pe/v2/sunat/tipo-cambio?date=2024-08-31',
            headers: { 
              'Authorization': 'Bearer apis-token-10259.i6FkVmRupt4PZP1ZlYLnSnUiO6dgqEDP'
            }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });  
    }

    // Consultar la lista de Pokemones actual
    else if (strUrl.includes("pokemon")) {
        // Consultar los poderes de un pokemon especifico
    }

    // Consultar los principales personajes de Rick and Morty
    else if (strUrl.includes("personaje")) {
        // Consultar el detalle de cada personaje de Rick and Morty
    }

    // Consultar el top 10 de bebidas y cocteles
    else if (strUrl.includes("bebida")) {
        //
    }

    // Consultar un listado de productos de una tienda
    else if (strUrl.includes("producto")) {
        //
    }

    // Consultar y traer Fotografias con un determinado tema y tamaño
    else if (strUrl.includes("foto")) {
        //
    }

    // Consultar citas famosas
    else if (strUrl.includes("cita")) {
        //
    }

    // Consultar datos ficticios de un usuario
    else if (strUrl.includes("info")) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://randomuser.me/api/',
            headers: { }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Consultar el top de peliculas de estreno
    else if (strUrl.includes("pelicula")) {
        // Consultar el detalle de una pelicula especifica
    }

    else if (strUrl.includes("marte")) {
        //
    }

    // Consultar datos especificos de Marte
    else {
        res.write(JSON.stringify({mensaje: "Hackaton07"}));
        res.end();
    }
}).listen(8900);