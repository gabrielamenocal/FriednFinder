var express = require ("express");
var router = express.Router();
var friends = require ("../app/friends");

router.get("/api/friends" ,function(request, response){
    response.send(friends);

})

module.exports = router;
