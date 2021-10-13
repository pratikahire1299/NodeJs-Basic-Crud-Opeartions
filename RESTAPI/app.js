const  Express =require("express");
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
 
const app=Express() 

console.log(5+5);

const uri = "mongodb+srv://pratik:RyuMongo$99@cluster0.5fmel.mongodb.net/RESTAPI_NODEJS?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("RestApiSample").collection("movies");
  // perform actions on the collection object
 // collection.insertOne({ "id" : 100, "Name" : "KGF", "Year" : 2019,"Rating":5 });
  //

});

client.on("open",()=>{
    console.log("Connected....");
})
client.close();

const router=require("./routes.js");
app.use('/routes',router);

app.listen(1000,()=>{
    console.log("<h1>Serever Stareted<\h1>");   
})

