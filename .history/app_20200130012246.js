const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser  = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');




const config  = require('./config');
const app  = express()



app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((req, res,next) => {
  next();
});
// load the router 
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))



// connect moongodb

mongoose.connect(config.MONGO_DB_URL);
mongoose.connection.on("error", console.log);
mongoose.connection.on("open", function() {
    console.log(" >> Connected to MongoDB Server Successfully >> ");
});
app.listen(config.PORT,(err)=>{
    console.log(`running at ${config.PORT}`);
});