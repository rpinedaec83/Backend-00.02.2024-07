const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require("dotenv").config()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  //res.send('<h1>Hello World!</h1>')

  let objPersona={
    nombre: "Roberto",
    apellido: "Pineda"
  }
  res.json(objPersona);
})

app.post('/',(req, res)=>{
    res.status(400).end();
})

app.put('/',(req, res)=>{
    res.status(500).end();
});

app.delete('/',(req,res)=>{
    res.redirect(301, 'http://x-codec.net')
});


app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
  })
  app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })

app.get('/getdata/:id/persona/:idperson',(req,res)=>{
    res.send(req.params)
})


app.get('/getquery',(req,res)=>{
    res.send(req.query)
})


app.get('/getbody',(req,res)=>{
    console.log(req.body.nombre)
    res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})