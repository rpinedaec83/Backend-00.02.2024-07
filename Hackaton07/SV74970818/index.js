var http = require("http");
var url = require("url");
const axios = require("axios");

http
  .createServer(async function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    let strURL = req.url;

    if (strURL.includes("github")) {
      var q = url.parse(req.url, true).query;
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: 'https://api.github.com/users/' + q.usuario,
          headers: {},
        };
        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            res.write(JSON.stringify(response.data));
            res.end();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    else if (strURL.includes("info")) {

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://randomuser.me/api/",
        headers: {},
      };
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          res.write(JSON.stringify(response.data));
          res.end();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (strURL.includes("clima")) {
      var q = url.parse(req.url, true).query;
      console.log(q.ciudad);
      const options = {
        method: "GET",
        url: "https://the-weather-api.p.rapidapi.com/api/weather/" + q.ciudad,
        headers: {
          "x-rapidapi-key":
            "465ae1c659msh447385a8c422d71p184958jsncee66bf33f61",
          "x-rapidapi-host": "the-weather-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        res.write(JSON.stringify(response.data));
        res.end();
      } catch (error) {
        console.error(error);
      }
    } else {
      res.write(JSON.stringify({ mensaje: "cualquier cosa" }));
      res.end();
    }
  })
  .listen(8900);
