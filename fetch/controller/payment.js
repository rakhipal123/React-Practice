const Razorpay =require('razorpay') 
const shortid=require('shortid')


var instance = new Razorpay({
    key_id:"rzp_test_LB6krq8N2gHhEw",
    key_secret:"U9WSccHJoD0Uegrjjej0dyTD"
})

exports.createOrder= async(req,res)=>{
    let options={
         amount:req.body.amount *100,
        currency: "INR",
        // reciept:"receipt#1",
        notes:{key1:'value 1' , key2:'value2'} }
    

   try{
    const response= await instance.orders.create(options)
    console.log(response)}

    catch(error)
    { console.log(error)}
}

