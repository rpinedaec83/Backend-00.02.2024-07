const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.get("/", (req, res)=>{
    res.send("Mi API")
})


const UsersRouter = require('./users/routes.config');
UsersRouter.routesConfig(app);

app.listen(PORT, function () {
    console.log('app listening at port %s', PORT);
});

