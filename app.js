const express = require("express")
const dbConnect = require('./config/db')
const userRouter = require('./Route/userRoute')


const app = express()

dbConnect()

app.use('/users',userRouter)

//using ngrok
const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect(7000);
  console.log(url)
})();

app.listen(7000, ()=>{
  console.log(`Server running at port... `)   
})