
const axios = require('axios')
require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World12323");
});

app.post("/", (req, res) => {
    console.log(req)
    res.send(req.body.challenge);
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });