const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser  = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');




const config  = require('./config');
const app  = express()

// load the router 
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))

app.use( (req,res)=>{

    next()
});

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.listen(config.PORT);