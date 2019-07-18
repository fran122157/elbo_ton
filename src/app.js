// Cuando corremos en local, leemos las variables automagicamente del archivo .env
if (!process.env.HEROKU) { require('dotenv').config(); }

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser'
import addSlackFeatures from './slack';

// Initialize an Express application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

addSlackFeatures(app);

// Start the express application
const port = process.env.PORT || 3000;
http.createServer(app).listen(port, () => {
  console.log(`server listening on port ${port}`);
});