const express = require("express")
const dbConnect = require('./config/db')
require('dotenv').config()
const userRouter = require('./Route/userRoute')


const app = express()

dbConnect()

app.use('/users',userRouter)

//using ngrok
// const ngrok = require('ngrok');
// (async function() {
//   const url = await ngrok.connect(7000);
//   console.log(url)
// })();
const PORT = process.env.PORT||7000
app.listen(PORT, ()=>{
  console.log(`Server running at port ${PORT}`)   
})