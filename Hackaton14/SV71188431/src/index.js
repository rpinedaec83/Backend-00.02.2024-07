require('dotenv').config();

const express = require('express')
const http = require('http')
const cors = require('cors')
const { server } =require('socket.io')
const userRoutes = require('./routes/user')


const app = express();
const server = http.createServer(app)

app.use(cors());
app.use(express.json());

//*creacion de rutas

app.use('/api/users/', userRoutes)


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('the server is running on PORT: $(PORT)')
})