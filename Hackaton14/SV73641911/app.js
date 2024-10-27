require('dotenv').config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "*",
    }
});
const port = process.env.PORT;

app.use(express.static("public"));
app.use(cors);
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const OpenAI = require('openai');
const chatbot = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

const db = require("./src/db/models/");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

require("./src/db/routes/users.routes")(app);

// const users = require("./src/db/controllers/users.controller.js");
const User = db.users;
const Historial = db.history;


io.on('connection', (socket) => {
    console.log("New user connected");
    const conversationHistory = [];
    conversationHistory.push({ role: "system", content: `Eres un chatbot de una empresa que vende helados
        Estos son los productos que vendemos
        Helados de Crema de sabores
        Galletas
        debes asistirle al user para que compre un producto al menos` });
    socket.on("sendMessage", async (message, callback) => {
        try {
            console.log(message);
            conversationHistory.push({ role: "user", content: message });
            const completion = await chatbot.chat.completions.create({
                model: process.env.MODEL || "gpt-3.5-turbo",
                messages: conversationHistory,
            });
            console.log(completion);
            const response = completion.choices[0].message?.content;
            conversationHistory.push({ role: "assistant", content: response });
            socket.emit("message", response);
            // Utilizar usuario de la db (crearlo si no existe)
            const [user, created] = await User.findOrCreate({
                where: { name: 'TestUser' },
              });
              console.log(user.username); // 'sdepold'
              console.log(created); // The boolean indicating whether this instance was just created
              if (created) {
                console.log(user.username + "created with id = " + user.id);
              }
            // Añadir historial de chat
            const historialUsuario = await Historial.create({ rol: 'user', mensaje: message, userId: user.id, });
            console.log("user history id: ", historialUsuario.id);

            const historialBot = await Historial.create({ rol: 'assistant', mensaje: response, userId: user.id, });
            console.log("user history id: ", historialBot.id);
            callback();
        }
        catch (error) {
            console.error(error);
            callback("Error: Unable to connect to the chatbot");
        }
    });
    socket.on("disconnect", () => {console.log("User disconnected");});
});
 
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})