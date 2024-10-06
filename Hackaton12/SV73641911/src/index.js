require('dotenv').config();
const http = require('http');
const url = require('url');
const { MongoClient } = require('mongodb');

// Load env variables
const mongodbUri = process.env.MONGODB_URI;
const mongodbName = process.env.MONGODB_NAME;
const collectionName = process.env.COLLECTION_NAME;

// Connection URL
const urlMongo = mongodbUri;
const client = new MongoClient(urlMongo);

// Database Name
const dbName = mongodbName;

// Use connect method to connect to the server
client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection(collectionName);

// Crear una nueva compra
async function insertarCompra(compra) {
    await collection.insertOne(compra);
    console.log('Inserted documents =>', compra);
};

// Leer las compras pendientes en la base de datos
async function filtrarPendientes() {
    const comprasPendientes = await collection.find({esCompletado: false}).toArray();
    console.log(comprasPendientes);
    return comprasPendientes;
};
// Leer las compras completadas en la base de datos
async function filtrarCompletadas() {
    const comprasCompletadas = await collection.find({esCompletado: true}).toArray();
    console.log(comprasCompletadas);
    return comprasCompletadas;
};


const servidor = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url);
    const method = req.method;

    res.setHeader('Access-Control-Allow-Origin', '*');

    if (reqUrl.pathname === '/compras' && method === 'POST') {
        let cuerpo = '';

        req.on('data', chunk => {
            cuerpo += chunk.toString();
        });

        req.on('end', () => {
            const datos = JSON.parse(cuerpo);

            const nuevaCompra = {
                nombre: datos.nombre,
                descripcion: datos.descripcion,
                fecha: datos.fecha,
                esCompletado: false,
            };
            
            // Guardar la nueva compra en mondogb
            insertarCompra(nuevaCompra);

            res.writeHead(201);
            res.end(JSON.stringify(nuevaCompra));
        });
    }
    else if (reqUrl.pathname === '/compras/pendientes' && method === 'GET') {
        res.writeHead(200);
        filtrarPendientes().then(pendientes => {res.end(JSON.stringify(pendientes));});
    }
    else if (reqUrl.pathname === '/compras/completadas' && method === 'GET') {
        filtrarCompletadas().then(completadas => {res.end(JSON.stringify(completadas));});
        res.writeHead(200);
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const PORT = 3000;
servidor.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
});