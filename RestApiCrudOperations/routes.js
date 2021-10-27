const  Express =require("express");
const router=Express.Router()

router.get('/',(req,res)=>{
    try{
    res.send("YO GET request");
    console.log("YO");
    }catch(err){
        res.send("An Error occur ::: "+err);
    }
})

module.exports=router;

