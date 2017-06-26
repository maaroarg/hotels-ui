'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config/config');

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('*', (req,res,next) => {
  if(req.accepts('html')){
    res.sendFile(path.join(__dirname,'public','index.html'));
  } else {
    next();
  }
});

app.listen(config.app.port, () => console.log(`Hotel UI is running on port ${config.app.port}...`));
