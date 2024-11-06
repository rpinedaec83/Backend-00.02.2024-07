var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
const passport = require("passport");
const cookieSession = require("cookie-session");
import { SECRET, PORT } from "./config.js";
require("./passport");
var con = require("./database/db");
var username;
let email = "";


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

app.get("/", function (req, res) {
    authenticate(req, res);
});

function authenticate(req, res) {
    // Si no ha iniciado sesion
    if (!req.session.user) {
        res.sendFile(__dirname + "/public/login.html");
    } else {
        // Si ha iniciado sesion
        username = req.session.user;
        res.sendFile(__dirname + "/public/sistema.html");
    }
}

app.get(
    "/google",
    passport.authenticate("google", {
        scope: ["email"],
    })
);

app.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/failed",
    }),
    function (req, res) {
        console.log(req.user.email);
        email = req.user.email;
        res.redirect("/success");
    }
);

app.get("/success", (req, res) => {
    // Guardar usuario
    var sql =
        "REPLACE INTO login (username , password) VALUES ('" +
        email +
        "' , 'oauth')";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
    req.session.user = email;
    username = email;
    res.redirect("/sistema_pagos");
});

app.get("/sistema_pagos", function (req, res) {
    authenticate(req, res);
});

app.get("/login", function (req, res) {
    authenticate(req, res);
});

app.post("/login", function (req, res) {
    login(req, res);
});

function login(req, res) {
    var post = req.body;
    username = post.user;
    var password = post.password;
    var sql = "SELECT * FROM login WHERE username='" + username + "'";
    con.query(sql, function (err, result, fields) {
        if (result.length === 1) {
            var jsonString = JSON.stringify(result);
            var jsonData = JSON.parse(jsonString);
            if (jsonData[0].password === password) {
                // Usuario identificado
                req.session.user = post.user;
                username = post.user;
                res.redirect("/sistema_pagos");
            } else {
                // Usuario no identificado
                res.redirect("/login");
            }
        } else {
            res.redirect("/login");
        }
    });
}

app.get("/logout", function (req, res) {
    delete req.session.user;
    req.session = null;
    // cierre de sesion
    res.redirect("/login");
});


app.listen(PORT, function () {
    console.log(`listening on *:${PORT}`);
});
