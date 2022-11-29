const express= require('express')
const router=require('./router')

const PORT=9093

 var app=express()

 // configuration
 app.use('/',router )

 //Listen to the port

 app.listen(PORT, ()=>{
    console.log('Server is listening to the Port',PORT)
 })