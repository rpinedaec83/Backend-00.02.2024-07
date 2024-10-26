"use strict";

var _config = require("./config");
var express = require("express");
var path = require("path");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
var cookieSession = require("cookie-session");
app.use(cookieSession({
  name: "google-auth-session",
  keys: ["key1", "key2"]
}));
app.use(express["static"](path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  secret: _config.SECRET
}));
server.listen(_config.PORT, function () {
  console.log("listening on *:".concat(_config.PORT));
});