const express = require('express');
const router = express.Router();


router.use( (req,res)=>{
    console.log("user route middleware")
    let accessToken  = req.body.token || req.query.token || req.headers['x-access-token'];
    if (accessToken) {
        // verify token 

    }
    next()
})



router.post('/login',(req,res)=>{
    let credentials  = req.body;


    

})
