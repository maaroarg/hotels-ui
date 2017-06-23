'use strict';

const express = require('express');
const bodyParser = requiere('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

/*
Le pega a la API de backend..?? Usar desde Angular
*/

app.get('*', (req,res,next) => {
  if(req.accepts('html')){
    res.sendFile(path.join(__dirname,'public','index.html'));
  } else {
    next();
  }
});

app.listen(3000, () => console.log('Hotel UI is running on port 3000'));
