var express = require ("express");
var router = express.Router();
var path = require("path");


router.get("/",function(request, response){
    response.sendFile(path.join(__dirname, "../public/home.html"));
})

router.get("/survey",function(request, response){
    response.sendFile(path.join(__dirname, "../public/survey.html"));
})


router.get("/result",function(request, response){
    response.sendFile(path.join(__dirname, "../public/result.html"));
})


module.exports=router;