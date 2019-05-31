const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const path = require("path");
const dbConfig = require("./config/database");
const app = express();

mongoose.connect(dbConfig.url, dbConfig.flag);

const models = path.resolve("src", "models");
requireDir(models);

app.use(express.json());
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor Iniciado");
});
