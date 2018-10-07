var express = require ("express");
var router = express.Router();
var friends = require ("../app/friends");

router.get("/api/friends" ,function(request, response){
    response.send(friends);
})

router.post("/api/friends", function(request, response) {    
    var newFriend = request.body;  
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();  
    console.log(newcFriend);  
    characters.push(newFriend);  
    response.json(newFriend);
  });



module.exports = router;
