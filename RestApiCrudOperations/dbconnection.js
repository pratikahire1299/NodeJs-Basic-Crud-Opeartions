var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
const mongoose=require('mongoose');

const uri = "mongodb+srv://pratik:RyuMongo$99@cluster0.5fmel.mongodb.net/RESTAPI_NODEJS?retryWrites=true&w=majority";


var movieschema =new mongoose.Schema({
    _id:String, 
    Name:String,
    Year:Number,
    Rating:Number,
});
 

module.exports = mongoose.model('RestApiSample',movieschema,'Collection_Name');
