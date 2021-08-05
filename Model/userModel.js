const mongoose = require("mongoose")
// Create User schema
const userSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password: {type:String,required:true}
});

// Create user model from userSchema

const users = mongoose.model('Users',userSchema);

module.exports = users;