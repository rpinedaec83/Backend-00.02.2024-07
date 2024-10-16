const express = require("express");
const path = require("path");
const app = express();
const axios = require('axios');
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
    let objMessage = {
    }
    connection.on("message", async (message) => {
        console.log(message.utf8Data);
        switch (message.utf8Data) {
            case "clima":

                const options = {
                    method: 'GET',
                    url: 'https://weather-api138.p.rapidapi.com/weather',
                    params: { city_name: 'Lima' },
                    headers: {
                        'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
                        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
                    }
                };

                try {
                    await axios.request(options).then((response)=>{
                        console.log(response.data)
                        objMessage.type = "clima"
                        objMessage.content = response.data;
                        console.log(JSON.stringify(objMessage))
                        connection.sendUTF(JSON.stringify(objMessage))
                    });
                    
                } catch (error) {
                    console.error(error);
                }



                break;

            default:
                objMessage.type = "default"
                objMessage.content = message.utf8Data;
                connection.sendUTF(JSON.stringify(objMessage));
                break;
        }

    });
});

server.listen(app.get("port"), () => {
    console.log("Servidor iniciado en el puerto: " + app.get("port"));
});