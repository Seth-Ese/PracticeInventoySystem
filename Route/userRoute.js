const express = require("express")
const auth = require('../controller/authController')
const authMiddleware = require('../middleWare/userMiddleWare')


const Router = express.Router()

Router.use(express.urlencoded({extended:true}))
Router.use(express.json())
Router.post('/register',authMiddleware.checkinput,auth.signup)


module.exports = Router;