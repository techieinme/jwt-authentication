const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const collection = "users";



// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
}));
/* const userSchema   = new Schema({
    username: String,
    password: String,
    isAdmin : Boolean,
});


// export 
module.exports = mongoose.model(collection,userSchema);




 */