var express = require ("express");
var router = express.Router();
var path = require("path");


router.get("/",function(request, response){
    response.sendFile(path.join(__dirname, "../public/home.html"));
})

router.get("/survey",function(request, response){
    response.sendFile(path.join(__dirname, "../public/survey.html"));
})


module.exports=router;