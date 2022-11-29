const Restaurant=require('../modal/restaurant')

exports.getAllRestaurant=(req,res)=>{
    Restaurant.find()
    .then(
        result=> 
        res.status(200).json({
        message:'restaurant Fetched successfully',
        data:result

        })
    )
    .catch(error=>
        res.status(500).json({
            message:"error ocurred in DB",
            error:'error'
        }))

    }

    exports.getAllRestrauantByCityId=(req,res)=>{
        let filter={city:req.params.cID}
        Restaurant.find(filter)
        .then(
            result=> 
            res.status(200).json({
            message:'restaurant Fetched successfully',
            data:result
    
            })
        )
        .catch(error=>
            res.status(500).json({
                message:"error ocurred in DB",
                error:'error'
            }))
    
        
        }

        exports.getAllRestrauantByName=(req,res)=>{
            let filter={name:req.params.rName}
            Restaurant.findOne(filter)
        .then(
            result=> 
            res.status(200).json({
            message:'restaurant Fetched successfully',
            data:result
    
            })
        )
        .catch(error=>
            res.status(500).json({
                message:"error ocurred in DB",
                error:'error'
            }))
    
        
        }

        exports.getAllRestrauantByFilter=(req,res)=>{
            let filter={}
                if(req.body.city_id){
                filter.city=req.body.city_id
            }
            if(req.body.cuisine && req.body.cuisine.length>0){
                filter['Cuisine.name']={$in:req.body.cuisine}
            }

           if(req.body.lcost && req.body.hcost){
                if(req.body.lcost==0){
                    filter.cost={$lte:req.body.hcost}
                }
             else{
                filter.cost={
                    $lt:req.body.hcost,
                    $gt:req.body.lcost
                }
            }
        }


        
        let sort=1
        if(req.body.sort){
            sort=req.body.sort
        }


        // achieve pagination using limit and skip

        console.log(filter)

        Restaurant.find(filter).limit(2).skip(2*(req.params.pageNo-1)).sort({cost:sort})
        .then(result=>{
            Restaurant.find(filter).count((err,count)=>{
                if(err)
                console.log(error)
                else
                res.status(200).json({
                    message:'restaurants fetched Successfully',
                    data:result,
                    totalCount:count
                  })
                })
            
             })
        .catch(error=>{
            res.status(500).json({
                message:"error ocurred in DB",
                error:'error'
            }) }
            )
        }