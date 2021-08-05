const Users = require('../Model/userModel')
const utils = require('../config/utilityFile')
exports.signup = async function(req,res){
    //1. get data from user
    const user = {firstName,lastName,email,password} =req.body;
    const {confirmPassword} = req.body;
    //2. check of email already exist
   if(await utils.emailExist(email)){
        res.json({
            status:'Failed',
            message:'Email already exist'
        })
   }
   else{
         //3. check if password is same with confirm password
       if(!utils.checkPassword(password,confirmPassword)){
            res.json({
                status:'failed',
                message:'Password Mismatch!'
            })
       }
       else{
             //4. Encrypt password
           user.password = await utils.encryptPassword(password)
              //5. Save into the database
           const createdUser = await Users.create({...user})
           res.status(201).json({
               status:'Successful',
               data:createdUser
           })
       }
   }
  
  
 
}

