$(document).ready(function (){

  results();
    

    function results() {

        console.log("Im in results");

        // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
        $.ajax({ url: "/app/friends", method: "GET" })
          .then(function(friendsData) {
    
            // Here we then log the tableData to console, where it will show up as an object.
            console.log(friendsData);
   
            for (var i = 0; i < friendsData.length; i++) {
    
              var yourResults = $("#yourResults");
              var bestMatch = $("#bestMatch");              
              // console.log(myObj);
    
              var listItem = $("<li class='list-group-item mt-4'>");
    
              listItem.append
              (
                $("<h2>").text("Friend #" + (i + 1)),
                $("<hr>"),
                $("<h3>").text("Name: " + friendsData[i].name),
                $("<img width='150px'>").attr("src",  friendsData[i].photo),
                $("<h3>").text("score: " + friendsData[i].scores),
                $("<h3>").text("Toral score: " + friendsData[i].totalScore),
              );

              yourResults.append(listItem);

              // bestFriend = computeBestMatch(friendsData);       

            };
    

            // function computeBestMatch (friends) 
            // {
              var lastIndex = friendsData.length - 1;
              var myObj = friendsData[lastIndex];
              var difference = 0;
              var returnedFriend = null;
              var returnedFriendDifference;                 

              for (var i = 0; i < friendsData.length -1; i++) 
              { 
                myFriend = friendsData[i];
                difference = 0;
                for (var j = 0; j < 12; j++) 
                {
                  difference = difference + Math.abs(myObj.scores[j] - myFriend.scores[j]);
                }
                
                 if (returnedFriend  === null|| returnedFriendDifference > difference )
                 {
                  returnedFriend = myFriend;
                  returnedFriendDifference = difference;
                 };

              };

              bestFriend = returnedFriend;

              bestMatch.append(bestFriend);            
        

            // };

          });
    
  }

});

