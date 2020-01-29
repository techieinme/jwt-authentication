const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const collection = "users";



// set up a mongoose model and pass it using module.exports
/* module.exports = mongoose.model('users', new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
})); */
const userSchema   = new Schema({
    username: String,
    password: String,
    isAdmin : Boolean,
});


/* userSchema.methods  = {

    findOne : function ( credentials,cb) {
                
        this.model(collection)
            .findOne({ username: credentials.username })
            .exec

    }
}
 */
// export 
module.exports = mongoose.model(collection,userSchema);




