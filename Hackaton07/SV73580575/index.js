var http = require('http');
var url = require('url');
const axios = require('axios');

const API_BASE_URL = 'https://rickandmortyapi.com/api';
const COCKTAIL_API = 'https://www.thecocktaildb.com/api/json/v1/1';
const FAKE_STORE_API = 'https://fakestoreapi.com/products';
const TMDB_API_KEY = 'YOUR_API_KEY';
const OMDB_API_KEY = 'YOUR_OMDB_API_KEY';

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

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    let strURL = req.url;
    //Consultar los datos de GitHub de un usuario especifico.
    if (strURL.startsWith("/github")) {
        var q = new URL(req.url, `http://${req.headers.host}`).searchParams;
        const username = q.get('username');

        if (!username) {
            res.write(JSON.stringify({ error: "Se requiere el parámetro 'username'" }));
            res.end();
            return;
        }

        const options = {
            method: 'GET',
            url: `https://api.github.com/users/${username}`,
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Node.js HTTP Client'  // GitHub API requiere un User-Agent en el header
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            res.write(JSON.stringify(response.data));
        } catch (error) {
            console.error(error);
            res.write(JSON.stringify({ error: "Error al consultar la API de GitHub" }));
        }
        res.end();
        return;
    }



    //Consultar el Clima de una ciudad o ubicacion especifica 
    
    if(strURL.includes("clima")){
        var clima = url.parse(req.url, true).query;
        console.log(clima.ciudad);

        const options = {
            method: 'GET',
            url: 'https://the-weather-api.p.rapidapi.com/api/weather/' + clima.ciudad,
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
    //else{
      //  res.write(JSON.stringify({mensaje:"No es ciudad"}));
        //res.end();
   // }


   //Consultar el tipo de cambio del dolar en Peru
   //let strURL2 = req.url;
   if (strURL.startsWith("/tipocambio")) {
    const options = {
        method: 'GET',
        url: 'https://api.exchangerate-api.com/v4/latest/USD',
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const response = await axios.request(options);
        const tipoCambio = response.data;

        // Obtener el tipo de cambio del USD a PEN
        const usdToPen = tipoCambio.rates.PEN;

        console.log(`Tipo de cambio del dólar a sol peruano: ${usdToPen}`);
        res.write(JSON.stringify({ tipo_cambio_usd_a_pen: usdToPen }));
    } catch (error) {
        console.error(error);
        res.write(JSON.stringify({ error: "Error al consultar la API de ExchangeRate-API" }));
    }
    res.end();
    return;
}

    //Consultar los principales personajes de Rick and Morty


   //Consultar datos ficticios de un usuario 
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
    }
    //else{
      //  res.write(JSON.stringify({mensaje:"Cualquier Cosa"}));
        //res.end();
    //}



    //Consultar la lista de Pokemones actual  
    if(strURL.includes("pokemones")) {
        try {
        let allPokemon = [];
        let nextUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100';
        
        // Realizar múltiples solicitudes para obtener todos los Pokémon
        while (nextUrl) {
            const response = await axios.get(nextUrl);
            allPokemon = allPokemon.concat(response.data.results);
            nextUrl = response.data.next;  
        }

        
        res.write(JSON.stringify(allPokemon));
    } catch (error) {
        console.error(error);
        res.write(JSON.stringify({ error: "Error al consultar la API de Pokemones" }));
    }
    res.end();
    return;
}

   // Consultar los poderes de un pokemon especifico  
   if (strURL.includes("pokemon")) {
    var q = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const nombre = q.get('nombre');
    console.log(nombre);

    const options = {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/' + nombre
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.write(JSON.stringify(response.data));
    } catch (error) {
        console.error(error);
        res.write(JSON.stringify({ error: "Error al consultar la API del Pokémon" }));
    }
    res.end();
    return;
}



        //Consultar los principales personajes de Rick and Morty
        if (path.startsWith('/personajesR&M')) {
            try {
                let response;
    
                if (path === '/personajesR&M') {
                    response = await axios.get(`${API_BASE_URL}/character`);
                } else {
                    // Obtener un personaje específico
                    const id = path.split('/')[2];
                    response = await axios.get(`${API_BASE_URL}/character/${id}`);
                }
    
                res.write(JSON.stringify(response.data));
            } catch (error) {
                console.error(error);
                res.write(JSON.stringify({ error: "Error al consultar la API de Rick and Morty" }));
            }
        } else {
            res.write(JSON.stringify({ mensaje: "Ruta no reconocida R&M" }));
        }
        

        //Consultar el top 10 de bebidas y cocteles
        if (path === '/top10') {
            try {
                // Obtener los primeros 10 cócteles de la API de CocktailDB
                const response = await axios.get(`${COCKTAIL_API}/filter.php?c=Cocktail`);
                const drinks = response.data.drinks.slice(0, 10); // Seleccionar los primeros 10 cócteles
                
                res.write(JSON.stringify(drinks));
            } catch (error) {
                console.error(error);
                res.write(JSON.stringify({ error: "Error al consultar la API de CocktailDB" }));
            }
        } else {
          res.write(JSON.stringify({ mensaje: "Ruta no reconocida Cocteles" }));
        }


        //Consultar un listado de productos de una tienda
        if (strURL === '/productostienda') {
            try {
                console.log('Consultando la API de Fake Store...');
                const response = await axios.get(FAKE_STORE_API);
                console.log('Datos recibidos:', response.data);
                res.write(JSON.stringify(response.data));
            } catch (error) {
                console.error('Error al consultar la API:', error);
                res.write(JSON.stringify({ error: "Error al consultar la API" }));
            }
        } else {
            console.log('Ruta no reconocida');
            res.write(JSON.stringify({ mensaje: "Ruta no reconocida" }));
        }


        //Consultar el top de peliculas de estreno   

            if (pathname === '/estrenos') {
                try {
                    console.log('Consultando la API de OMDb para las películas de estreno...');
                    const response = await axios.get('http://www.omdbapi.com/', {
                        params: {
                            apiKey: OMDB_API_KEY,
                            s: 'movie', // Consulta general de películas
                            type: 'movie', // Tipo de contenido
                            y: new Date().getFullYear() // Año actual
                        }
                    });
                    console.log('Datos recibidos:', response.data);
                    res.write(JSON.stringify(response.data));
                } catch (error) {
                    console.error('Error al consultar la API:', error.message);
                    res.write(JSON.stringify({ error: "Error al consultar la API" }));
                }
            } else if (pathname === '/detalle') {
                if (!query.id) {
                    res.write(JSON.stringify({ error: "Parámetro 'id' requerido" }));
                    res.end();
                    return;
                }
                try {
                    console.log(`Consultando la API de OMDb para el detalle de la película con ID ${query.id}...`);
                    const response = await axios.get('http://www.omdbapi.com/', {
                        params: {
                            apiKey: OMDB_API_KEY,
                            i: query.id, // ID de la película
                            plot: 'full' // Información completa
                        }
                    });
                    console.log('Datos recibidos:', response.data);
                    res.write(JSON.stringify(response.data));
                } catch (error) {
                    console.error('Error al consultar la API:', error.message);
                    res.write(JSON.stringify({ error: "Error al consultar la API" }));
                }
            } else {
                res.write(JSON.stringify({ mensaje: "Ruta no reconocida" }));
            }
        

    //res.write(JSON.stringify({ mensaje: "Ruta no reconocida" }));
    //res.end();

    //res.write(JSON.stringify(objPersona));
    //res.write("Hola prueba Hackatonh 07");
    //res.write(JSON.stringify({mensaje:"Cualquier Cosa"}));
       // res.end();


}).listen(8080);