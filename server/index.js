'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

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

app.listen(3000, () => console.log('Hotel UI is running on port 3000...'));
