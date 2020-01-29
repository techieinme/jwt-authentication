const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const collection = "users";


const userSchema   = new Schema({
    username: String,
    password: String,
    isAdmin : Boolean,
})




