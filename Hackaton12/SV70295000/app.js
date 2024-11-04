const http = require('http');
const url = require('url');
const fs = require('fs');

// Archivo donde se almacenará la lista de compras
const dataFilePath = './shoppingList.json';

// Función para leer el archivo JSON
const readData = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Función para escribir en el archivo JSON
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  if (parsedUrl.pathname === '/crear-lista' && method === 'POST') {
    let body = '';

    // Recibir los datos de la solicitud POST
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const datos = JSON.parse(body);
      const newItem = {
      nombre:datos.nombrem,
      desripcion: datos.desripcion,
      fecha: datos.fecha,
      esCompletado: false,
      }
      const shoppingList = readData();

      shoppingList.push(newItem);

      writeData(shoppingList);
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Item agregado correctamente' }));
    });
  } else if (parsedUrl.pathname === '/pendientes' && method === 'GET') {
    const shoppingList = readData();
    const pendientes = shoppingList.filter(item => !item.esCompletado);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(pendientes));
  } else if (parsedUrl.pathname === '/completados' && method === 'GET') {
    const shoppingList = readData();
    const completados = shoppingList.filter(item => item.esCompletado);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(completados));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
