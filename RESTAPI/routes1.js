const  Express =require("express");
const connectdb=require("./dbconnection.js");

const router=Express.Router()

var mongoose = require('mongoose');
const uri = "mongodb+srv://pratik:RyuMongo$99@cluster0.5fmel.mongodb.net/RESTAPI_NODEJS?retryWrites=true&w=majority";

const db = (uri);
mongoose.Promise = global.Promise;
  
mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
  

router.get('/',(req,res)=>{
    res.send("YO This is route 2 page");
  //  movies.insertOne({ "id" : 200, "Name" : "KGF2", "Year" : 2018,"Rating":4 });
  // const data=value.find( { } );
  //  console.log(data);
     res.send("This is data");

   // console.log("YO This is route 2 page"+data);
})
router.get('/save', function(req, res) {
    var newmovie = new connectdb({_id:5066, 
        Name:"Sam", Year:1, Rating:2008});

        newmovie.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.get('/viewdata',(req,res)=>{
    connectdb.find({},function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

module.exports = router;


