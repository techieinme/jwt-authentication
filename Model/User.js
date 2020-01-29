const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const collection = "users";

const userSchema   = new Schema({
    username: String,
    password: String,
    isAdmin : Boolean,
});

userSchema.methods  = {
    findAll : function ( {},cb) {
        this.model(collection)
            .find()
            .select({password:0})
            .exec(cb)
    },
    findOne : function ( credentials,cb) {
        this.model(collection)
            .findOne({ username: credentials.username })
            .exec(cb)
    }
}

// export 
module.exports = mongoose.model(collection,userSchema);




