const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const path = require('path');
const dbConfig = require('./config/database');
const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(dbConfig.url, dbConfig.flags);

const models = path.resolve('src', 'models');
requireDir(models);

app.use(express.json());
app.use('/api', require('./src/routes'));

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
