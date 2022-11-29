const Menu=require('../modal/model')

exports.getAllMenu=(req,res)=>{
    // let filter={restaurantName:req.params.rName}
    //  Menu.find(filter)
    Menu.find()
    .then(
             result=> 
             res.status(200).json({
             message:'Mealtype Fetched successfully',
             data:result

        })
    )
    .catch(error=>
        res.status(500).json({
            message:"error ocurred in DB",
            error:'error'
        }))
 }
