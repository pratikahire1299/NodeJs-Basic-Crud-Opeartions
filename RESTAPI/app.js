const  Express =require("express");
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
 
const app=Express() 
const Port= process.env.Port || 1000;
//console.log(5+5);

const uri = "mongodb+srv://pratik:RyuMongo$99@cluster0.5fmel.mongodb.net/RESTAPI_NODEJS?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("RestApiSample").collection("movies");
 // collection.insertOne({ "id" : 100, "Name" : "KGF", "Year" : 2019,"Rating":5 });
  //
  client.close();
});



var router=require("./routes.js");
app.use('/routes',router);

router=require("./routes1.js");
app.use('/routes1',router);

app.listen(Port,()=>{
    console.log("<h1>Serever Started");   
})

