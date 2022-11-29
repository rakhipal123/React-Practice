const express=require('express')
const bodyParser = require('body-parser')
const Mongoose=require('mongoose')
const  mongoose  = require('mongoose');
const cors=require('cors')
const menuRoutes=require('../fetch/route/menu')
const restaurantRoute=require('../fetch/route/restaurant')
const locationRoute=require('../fetch/route/location')
const  mealtypeRoute=require('../fetch/route/mealtype')
const paymentRoute =require('../fetch/route/payment')
// const FbLoginRoute=require('../fetch/route/fblogin')
// const paymentRoutes=require('./router/payment')


const port = 6504;
const DBSTRING="mongodb://localhost/Zomato"

mongoose.connect(DBSTRING,() =>{
    console.log("mongoDB connected")
},
e=>console.log('error ocuured while connecting to DB:',e)
)

const app = express();

// middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/menu', menuRoutes)
app.use('/restaurant', restaurantRoute)
app.use('/location', locationRoute)
app.use('/mealtype',mealtypeRoute)
app.use('/payment' ,paymentRoute)
// app.use('/fblogin', FbLoginRoute)


app.listen(port, ()=>{
    console.log(`the server is running on port: ${port}`)
})