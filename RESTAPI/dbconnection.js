var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
const mongoose=require('mongoose');

const uri = "mongodb+srv://pratik:RyuMongo$99@cluster0.5fmel.mongodb.net/RESTAPI_NODEJS?retryWrites=true&w=majority";


/*const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("RestApiSample").collection("movies");
  perform actions on the collection object\
   data=collection.find();
  collection.insertOne({ "id" : 100, "Name" : "KGF", "Year" : 2019,"Rating":5 });
});*/

const connectdb=async()=>{
    await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
}
var str =new mongoose.Schema({
    Name:String,
    Year:Number,
    Rating:Number,
});

var value=mongoose.model('movies',str);
module.exports = value;