var express = require("express");
var path = require("path");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var bodyParser = require("body-parser");
var session = require("express-session");
const passport = require("passport");
const cookieSession = require("cookie-session");
import { SECRET, PORT } from "./config";

app.use(
    cookieSession({
        name: "google-auth-session",
        keys: ["key1", "key2"],
    })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: SECRET }));

server.listen(PORT, function () {
    console.log(`listening on *:${PORT}`);
});
