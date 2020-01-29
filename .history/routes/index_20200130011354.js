const express = require("express");
const router = express.Router();



router.use((req,res)=>{
    next()
})
router.get('/',(req,res)=>{
    res.json({'message':'default index'})
})


module.exports = router;