const express =require('express')

const router= express.Router()

router.get('/', (req,res)=>{
    res.send('Hi you have called get Method')
 })
module.exports =router; 