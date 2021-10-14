const  Express =require("express");
const value=require("./dbconnection.js");
const router=Express.Router()




router.get('/',(req,res)=>{
    res.send("YO This is route 2 page");
   const data=value.findOne( {'Name':'KGF'} );
    console.log(data.Name);
    //res.send("This is data"+collection.find());
   // console.log("YO This is route 2 page"+data);
})

module.exports=router;

