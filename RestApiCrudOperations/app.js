const  Express =require("express");
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
const mongoose=require('mongoose');

const Port= process.env.Port || 1000;

uri="mongodb://localhost:27017/cricketdb";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("Connection Successful")).catch((err)=>console.log("Failed"));

const playersScehema=new mongoose.Schema({
    firstname: String,
    lastname: String,
    position: String,
    age:Number,
    team:String
});
const teamsScehema=new mongoose.Schema({
    name: String,
    city: String,
    Available: Boolean
});

const Playerlist=new mongoose.model("Playerlist",playersScehema);
const Teamlist=new mongoose.model("Teamlist",teamsScehema);

const insertdocument=async()=>{
    try{
        const teamvalue=new Teamlist({
            name: "DD",
            city: "Delhi",
            Available: true
        })
        const teamvalue2=new Teamlist({
            name: "RCB",
            city: "Bangolore",
            Available: true
        })
        const teamvalue3=new Teamlist({
            name: "SRH",
            city: "Hydrabad",
            Available: true
        })
     //   const result = await Teamlist.insertMany([teamvalue,teamvalue2,teamvalue3]);
    //    console.log(result);
    }catch(err){
        console.log(err);
    }
}


const readdocument=async()=>{
    try{
        const result=await Teamlist.find();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

const deletedocument=async()=>{
    try{
        const result=await Teamlist.deleteOne({name:"SRH"});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
const updatedocument=async()=>{
    try{
        const result=await Teamlist.updateOne(
            { name: "RCB" },
            {
              $set: { city:"Bangloreee"}
            }
         )
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

insertdocument();
deletedocument();
updatedocument();
readdocument();

const app=Express();

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

  
module.exports = app;