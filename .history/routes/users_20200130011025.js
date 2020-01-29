const express   = require('express');
const router    = express.Router();
const jwt       = require("jsonwebtoken");
const userModel = require('../Model/User');
const config  = require('../config')
router.use( (req,res)=>{
    console.log("user route middleware")
    let accessToken = req.body.token || req.query.token || req.headers['x-access-token'];
    if (accessToken) {
        // verify token 

    }
    next()
})



router.post('/login',(req,res)=>{
    let credentials = req.body;


    try {
         userModel.find(credentials, (err, user) => {
 
            if (err) throw err;
           if (user.password === credentials.password) {

            // create a new token for the user 
            let token = jwt.sign(user,config.get(''))

           }else {
               res.json({
                 success: false,
                 message: "Authentication failed. Wrong password."
               });
           }
         });

    } catch (error) {
        
    }
   


})
