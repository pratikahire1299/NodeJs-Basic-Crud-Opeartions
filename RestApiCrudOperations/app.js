const  Express =require("express");
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
 
const app=Express() 
const Port= process.env.Port || 1000;


const router=require("./routes.js");
const router1=require("./routes1.js");
const cricket=require("./cricket.js");
const crud=require("./crud.js");


app.use('/routes',router);
app.use('/routes1',router1);
app.use('/cricket',cricket);
app.use('/crud',crud)

app.listen(Port,()=>{
    console.log("<h1>Serever Started");   
})


module.exports = app