const Location=require('../modal/location')

exports.getAllLocation=(req,res)=>{
 Location.find()
 .then(
    result=>
    res.status(200).json({
        message:"location fetched Successfully",
        data:result
     
    })
   )
   .catch(error=> res.status(500).json({
    message:'error occureed in db'
   }))
}