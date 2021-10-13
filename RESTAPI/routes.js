const  Express =require("express");
const router=Express.Router()

router.get('/',(req,res)=>{
    res.send("GET request")
    console.log("YO");
})

module.exports=router;

