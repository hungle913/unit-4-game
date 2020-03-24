$(document).ready(function(){

    // Select random number to start the game. Number should be between 19-120
    var random = Math.floor(Math.random()*101+19);
    console.log("Winning number is: " + random);

    // Append random number to the randomNumber id on html
    $("#randomNumber").text("Winning Number is: " + random);

    // Setup random numbers for each gem. Numbers should be between 1 - 12
    var Blue = Math.floor(Math.random()*11+1);
    var Red = Math.floor(Math.random()*11+1);
    var Yellow = Math.floor(Math.random()*11+1);
    var Green = Math.floor(Math.random()*11+1);
    console.log(Blue, Red, Yellow, Green);

    // Set variable to tally wins, losses, user totals
    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    // Append Wins and Losses to wins and losses in html
    $("numberWins").text(wins);
    $("numberLosses").text(losses);

    // Setup click for jewels
    $('#Blue').on ("click", function(){
      userTotal = userTotal + Blue;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal === random){
            win++;
            $("#numberWins").text(wins);
            alert ("You WON!");
            reset();
          }
          else if ( userTotal > random){
            losses++;
            $("#numberLosses").text(losses);
            alert ("You LOST!");
            reset();
          };   
    });  

    $("#Red").on ("click", function(){
      userTotal = userTotal + Red;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
            //sets win/lose conditions
          if (userTotal === random){
            win++;
            $("#numberWins").text(wins);
            alert ("You WON!");
            reset();
          }
          else if ( userTotal > random){
            losses++;
            $("#numberLosses").text(losses);
            alert ("You LOST!");
            reset();
          };   
    });  

    $("#Yellow").on ("click", function(){
      userTotal = userTotal + Yellow;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
            //sets win/lose conditions
          if (userTotal === random){
            win++;
            $("#numberWins").text(wins);
            alert ("You WON!");
            reset();
          }
          else if ( userTotal > random){
            losses++;
            $("#numberLosses").text(losses);
            alert ("You LOST!");
            reset();
          };    
    });  

    $('#Green').on ("click", function(){
      userTotal = userTotal + Green;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
            //sets win/lose conditions
          if (userTotal === random){
            win++;
            $("#numberWins").text(wins);
            alert ("You WON!");
            reset();
          }
          else if ( userTotal > random){
            losses++;
            $("#numberLosses").text(losses);
            alert ("You LOST!");
            reset();
          };    
    });  

    // Create a reset for the game
    function reset(){
      random = Math.floor(Math.random()*101+19);
      console.log("New winning number is: " + random);
      $("#randomNumber").text("Winning Number is: " + random);
      Blue = Math.floor(Math.random()*11+1);
      Red = Math.floor(Math.random()*11+1);
      Yellow = Math.floor(Math.random()*11+1);
      Green = Math.floor(Math.random()*11+1);
      console.log(Blue, Red, Yellow, Green);
      userTotal = 0;
      $("#finalTotal").text(userTotal);
    };
  
  });