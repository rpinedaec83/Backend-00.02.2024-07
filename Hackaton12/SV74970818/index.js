require('dotenv').config();
const http = require('http');
const url = require('url');
const { MongoClient } = require('mongodb');

// Load env variables
const mongodbUri = process.env.MONGODB_URI;
const mongodbName = process.env.MONGODB_NAME;
const collectionName = process.env.COLLECTION_NAME;

// Connection URL
// const urlMongo = mongodbUri;
// const client = new MongoClient(urlMongo);
const client = new MongoClient(mongodbUri);

// Coneccion a MongoDB
let db, collection;
client.connect()
    .then(() => {
        console.log('Connected successfully to MongoDB');
        db = client.db(mongodbName);
        collection = db.collection(collectionName);
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Crear una nueva lista de compra
async function listarCompra(compra) {
    await collection.insertOne(compra);
    console.log('Compra listada: ', compra);
};

// Leer la lista de compras pendientes
async function filtrarPendientes() {
    return await collection.find({ esCompletado: false }).toArray();
};
// Leer la lista de compras completadas
async function filtrarCompletadas() {
    return await collection.find({ esCompletado: true }).toArray();
};

// Crear servidor HTTP
const servidor = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url);
    const method = req.method;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (reqUrl.pathname === '/listas' && method === 'POST') {
        let lista = '';

        req.on('data', chunk => {
            lista += chunk.toString();
        });

        req.on('end', async () => {
            const datos = JSON.parse(lista);

            const nuevaLista = {
                nombre: datos.nombre,
                descripcion: datos.descripcion,
                fecha: datos.fecha,
                esCompletado: datos.esCompletado,
            };
            
            // Guardar la nueva compra en mondogb
            await listarCompra(nuevaLista);

            res.writeHead(201);
            res.end(JSON.stringify(nuevaLista));
        });
    }
    else if (reqUrl.pathname === '/listas/pendientes' && method === 'GET') {
        filtrarPendientes()
            .then(pendientes => {
                res.writeHead(200);
                res.end(JSON.stringify(pendientes));
            })
            .catch(error => {
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'Error al entregar pendientes' }));
            });
    }
    else if (reqUrl.pathname === '/listas/completadas' && method === 'GET') {
        filtrarCompletadas()
            .then(completadas => {
                res.writeHead(200);
                res.end(JSON.stringify(completadas));
            })
            .catch(error => {
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'Error al entregar completadas' }));
            });
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found xd' }));
    }
});

const PORT = 3000;
servidor.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
});