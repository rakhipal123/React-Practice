const mealtype=require('../modal/meatype')

exports.getAllMealtype=(req,res)=>{
    mealtype.find()
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

