// Cuando corremos en local, leemos las variables automagicamente del archivo .env
if (!process.env.HEROKU) { require('dotenv').config(); }

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser'
import addSlackFeatures, { slackEventRequest } from './slack';

// Initialize an Express application
const app = express();

// Al SDK de slack no le gusta que parsees el payload, tenemos que tirar una magia
const jsonParser = bodyParser.json();
const encodedParser = bodyParser.urlencoded({ extended: false });
app.use((req, res, next) => {
  if (slackEventRequest(req)) { return next(); }
  return jsonParser(req, res, () => { encodedParser(req, res, next) });
});

addSlackFeatures(app);

// Start the express application
const port = process.env.PORT || 3000;
http.createServer(app).listen(port, () => {
  console.log(`server listening on port ${port}`);
});