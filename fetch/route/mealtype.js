const express=require('express')
const mealtypeController=require('../controller/mealtype')


const router=express.Router()
router.get('', mealtypeController.getAllMealtype)
// router.get('/:Name',mealtypeController.getNameMealtype)


module.exports=router;
