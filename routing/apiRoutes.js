var express = require ("express");
var router = express.Router();
var friends = require ("../app/friends");

    router.get("/app/friends" ,function(request, response){
        response.send(friends);
    })
    
    router.post("/app/friends", function(request, response) {    
        friends.push(request.body);  
        response.json(true);
    });
      
      
module.exports = router;

