const express=require('express')
const restaurantController=require('../controller/restaurant')


const router=express.Router()
router.get('', restaurantController.getAllRestaurant)
router.get('/:cID', restaurantController.getAllRestrauantByCityId)
router.get('/details/:rName',restaurantController.getAllRestrauantByName)
router.post('/filter/:pageNo', restaurantController.getAllRestrauantByFilter)

module.exports=router;