require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

const { PORT: port, MONGO_URI: mongoURI } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(routes);
const main = async () => {
  await mongoose.connect(mongoURI, { dbName: 'jetpack' });
  console.log('connect to mongodb');
  app.listen(port, () => {
    console.log(`Jetpack Integration running at port ${port}`);
  });
};
main();
module.exports = app;
