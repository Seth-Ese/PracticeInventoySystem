const Users = require('../Model/userModel')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

exports.emailExist = async(email)=>{
    const foundUser = await Users.findOne({email});
    if(foundUser){
        return true;
    }
    else return false;
}

exports.checkPassword = (password,confirmPassword)=>{
 return password===confirmPassword?true:false;
}

exports.encryptPassword = async function(password){
    // const salt = await bcrypt.genSalt(12)
    return hashedPassword = await bcrypt.hash(password,12)
}

exports.verifyPassword =async (password,hashedPassword)=>{
   
    return await bcrypt.compare(password,hashedPassword)
}

exports.getToken = async (userid)=>{
    return await JWT.sign({userid},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES})
}