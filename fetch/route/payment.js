const express =require('express')
const paymentController=require('../controller/payment')

const router=express.Router()
router.post('',paymentController.createOrder)


module.exports=router;
