const express = require("express");
const router = require('./router');

const cors = require('cors');
const app = express();

const port = 8081;

app.use(cors());
app.use(router)
  .listen(port, () => console.log('Example app listening on port ' + port));