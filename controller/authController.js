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

 exports.userLogin = async function (req,res) {
    //1. Get email and password from user
    const {email,password} = req.body
    if(!email || !password){
        res.status(400).json({
            message:'Please Enter Emaill and Password'
        })
    }
    else {
        //2. find user by email,if user exist,verify password,if password is correct
       
       try {
        const userFound = await Users.findOne({email})
        if(userFound){
            const hashedPassword =userFound.password
            if(await utils.verifyPassword(password,userFound.password)){
                //3. then generate token for user
                const token = await utils.getToken(userFound._id)
                res.status(200).json({
                    user:userFound,
                    token
                })
            }
            else{
                res.status(400).json({
                    message:'Password Missmatch'
                })
            }
        }
        else{
            res.status(404).json({
                message: 'User not found'
            })
        }
       } catch (error) {
           console.log(error)
           res.status(500).json({
               message: "Please try later"
           })
       }
    }
    

    
    
}