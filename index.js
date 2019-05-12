const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const dbConfig = require("./config/database.json");
const app = express();

mongoose.connect(dbConfig.url, dbConfig.flag);
app.use(express.json());

app.listen(3100, () => {
  console.log("Servidor Iniciado");
});
