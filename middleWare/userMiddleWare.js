

exports.checkinput=(req,res,next)=>{
const body = req.body
    if(!body.firstName||!body.lastName||!body.email||!body.password||!body.confirmPassword){
        res.json({
            staus:'Signup failed!',
            message:'User data Incomplete'
        })
    }
    else{
        next()
    }
}