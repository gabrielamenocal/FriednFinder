 
      var score = 0;


 $(document).ready(function(){

    var answers = [];
    var value; 
    var scores =[];
    var totalScore=0;

    $("#Score").hide();
    $("#addFriend").hide();
    $("#newFriend").hide();
    $("#results").hide();

    
     
    $("select").on("change", function(){
        var question = this.value;
        console.log("Number question: " + question);

        if (question === "q1"){
            value = $('option[name=q1]:checked').text();  
            score = value;
        }
        else if(question === "q2"){
            value = $('option[name=q2]:checked').text(); 
            score = value;
        }
        else if(question === "q3"){
            value = $('option[name=q3]:checked').text(); 
            score = value;
        }
        else if(question === "q4"){
            value = $('option[name=q4]:checked').text(); 
            score = value;
        }
        else if(question === "q5"){
            value = $('option[name=q5]:checked').text(); 
            score = value;
        }
        else if(question === "q6"){
            value = $('option[name=q6]:checked').text();
            score = value;
        }
        else if(question === "q7"){
            value = $('option[name=q7]:checked').text(); 
            score = (value);
        }
        else if(question === "q8"){
            value = $('option[name=q8]:checked').text();
            score = value;
        }
        else if(question === "q9"){
            value = $('option[name=q9]:checked').text();
            score = value;
        }
        else if(question === "q10"){
            value = $('option[name=q10]:checked').text();
            score = value;
        }
        else if(question === "q11"){
            value = $('option[name=q11]:checked').text();
            score = value;
        }
        else if(question === "q12"){
            value = $('option[name=q12]:checked').text(); 
            score = value;
        }
        else {
            console.log("error");
        }

        console.log("value: " + value);
        console.log("score: " + score);


        var answer = {
            qnumber: question,
            value: value,
        }

        if (answer.value === "1 (Strongly Disagree)"){
            answer.value = "1";
        }
        else if (value === "5 (Strongly Agree)"){
            answer.value  = "5";
        }  

        if (score === "1 (Strongly Disagree)"){
            score = "1";
        }
        else if (score === "5 (Strongly Agree)"){
            score  = "5";
        } 

        score = parseInt(score);
        totalScore = score + totalScore;
        console.log("TotalScore: " + totalScore);

        scores.push(score);
        console.log("Scores Array: " + scores);

        answers.push(answer);
        console.log("Answer Array: " + answers);  
        
        
    });  

    $("#submit").on("click", function(){
        event.preventDefault();

        var name = $("#friendName").val();
        console.log("name: " + name);

        var photo = $("#friendPhoto").val();
        console.log("photo url: " + photo);

        var newFriend = {
            name: name,
            photo: photo,
            scores:scores
        }
        console.log(newFriend);       

        $("#score").html(totalScore);
        $("#Score").show(totalScore);
        $("#addFriend").show();
        $("#newFriend").show();

        
        $(".submit").on("click", function(event) {
            event.preventDefault();
            $.post("/app/friends", newFriend)
            .then(function(data) {
                console.log("survey.html", data);
                alert("Adding Friend...");
                $("#results").html('<h2> Friend added Sucessfully. Please view your results in thi link:  <a href="/result"> Results </a>  </h2> ');
                $("#results").show();

            });

        });        
    });     
    
 });
        

            



   

                    

                    



               

                         

