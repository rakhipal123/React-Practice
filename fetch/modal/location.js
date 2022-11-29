const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const LocationSchema = new Schema({
    _id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    city_id : {
        type : String,
        required : true
    },
    
    country_id : {
        type : String,
        required : true
    },
    country_name : {
        type : String,
        required : true
    }
    
});
module.exports = mongoose.model('location',LocationSchema, "Location");
