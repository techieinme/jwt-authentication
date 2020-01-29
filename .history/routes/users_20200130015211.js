const express   = require('express');
const router    = express.Router();
const jwt       = require("jsonwebtoken");
const userModel = require('../Model/User');
const config    = require('../config')




router.use( (req,res,next)=>{
    console.log("user route middleware")
    let accessToken = req.body.token || req.query.token || req.headers['x-access-token'];
    if (accessToken) {
        // verify token 

    }
    next()
})



router.post('/login',(req,res)=>{
    let credentials = req.body;

    console.log(credentials)

    try {
         userModel().findOne({ username: credentials.username }, (err, user) => {
           if (err) throw err;
          
           console.log(user)
           if (user) {
             // create a new token for the user
             let token = jwt.sign({
                                        exp : Math.floor(Date.now() / 1000) + 60 * 60,
                                        data: user
                                    },
                                    config.secret
                                );

             res.json({
               success: true,
               message: "you have got the token",
               token  : token
             });
           } else {
             res.json({
               success: false,
               message: "Authentication failed. Wrong password."
             });
           }
         });

    } catch (error) {
        
    }
   


})

module.exports = router;