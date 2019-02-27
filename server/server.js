const express = require("express");
const router = require('./router');

const bodyParser = require("body-parser");

const cors = require('cors');
const app = express();

const port = 8081;

app.use(cors());
app.use(express.static('resources'))
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({
    extended: true
  })) // for parsing application/x-www-form-urlencoded
app.use(router)
  .listen(port, () => console.log('Example app listening on port ' + port));