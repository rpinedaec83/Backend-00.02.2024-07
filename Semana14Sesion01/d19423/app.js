const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const WebSocketServer = require("websocket").server;
const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false,
});
app.set("port", 8089);
app.use(express.static(path.join(__dirname, "./public")));
function originIsAllowed(origin) {
    // Para evitar cualquier conexión no permitida, validamos que
    // provenga de el cliente adecuado, en este caso del mismo servidor.
    if (origin === "http://localhost:8089") {
        return true;
    }
    return false;
}


wsServer.on("request", (request) => {
    if (!originIsAllowed(request.origin)) {
        // Sólo se aceptan request de origenes permitidos
        request.reject();
        console.log(
            new Date() + " Conexión del origen " + request.origin + " rechazada."
        );
        return;
    }
    const connection = request.accept(null, request.origin);
    connection.on("message", (message) => {
        console.log(message.utf8Data);
        connection.sendUTF("Recibido: " + message.utf8Data + " cliente");
    });
});

server.listen(app.get("port"), () => {
    console.log("Servidor iniciado en el puerto: " + app.get("port"));
});