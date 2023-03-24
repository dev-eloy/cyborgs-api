const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs');
const routerApi = require('./routes');
const connection = require('./db');

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      return;
    }
    res.json(results);
  });
});

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hola mi server en Express");
  });

app.listen(port, () =>{
    console.log("My port: " + port);
  });

routerApi(app);
  