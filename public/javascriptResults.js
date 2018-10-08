$(document).ready(function(){

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
    
              var listItem = $("<li class='list-group-item mt-4'>");
    
              listItem.append
              (
                $("<h2>").text("Friend #" + (i + 1)),
                $("<hr>"),
                $("<h3>").text("Name: " + friendsData[i].name),
                $("<img>").text("Photo: " + friendsData[i].photo),
                $("<h3>").text("score: " + friendsData[i].scores),
                $("<h3>").text("Toral score: " + friendsData[i].totalScore),
              );

              yourResults.append(listItem)

            };
    

        
//             6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

           
        
        });

    }
})


