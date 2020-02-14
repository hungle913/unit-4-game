$(document).ready(function(){

    // Select random number to start the game. Number should be between 19-120
    var random = Math.floor(Math.random()*101+19);
    console.log(random);

    // Append random number to the randomNumber id on html
    $("#randomNumber").text(random)

    // Setup random numbers for each gem. Numbers should be between 1 - 12
    var Blue = Math.floor(Math.random()*11+1);
    var Red = Math.floor(Math.random()*11+1);
    var Yellow = Math.floor(Math.random()*11+1);
    var Green = Math.floor(Math.random()*11+1);

    // Set variable to tally wins, losses, user totals
    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    // Append Wins and Losses to wins and losses in html
    $("numberWins").text(wins);
    $("numberLosses").text(losses);

    // Create a reset for the game
    function reset(){
      random = Math.floor(Math.random()*101+19);
      console.log(random)
      $("#randomNumber").text(random)
      var Blue = Math.floor(Math.random()*11+1);
      var Red = Math.floor(Math.random()*11+1);
      var Yellow = Math.floor(Math.random()*11+1);
      var Green = Math.floor(Math.random()*11+1);
      userTotal = 0;
      $("#finalTotal").text(userTotal)
    }


    // Add wins to the wins
    function win (){
      wins ++;
      $("#numberWins").text(wins);
      alert ("You WON!");
      reset();
    }

    // Add losses to the losses
    function lose (){
      losses++;
      $("#numberLosses").text(losses);
      alert ("You LOST!");
      reset();
    }

    // Setup click for jewels
    $('#Blue').on ("click", function(){
      userTotal = userTotal + Blue;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal === random){
            win();
          }
          else if ( userTotal > random){
            lose();
          }   
    })  

    $("#Red").on ("click", function(){
      userTotal = userTotal + Red;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
            //sets win/lose conditions
          if (userTotal === random){
            win();
          }
          else if ( userTotal > random){
            lose();
          }   
    })  

    $("#Yellow").on ("click", function(){
      userTotal = userTotal + Yellow;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
            //sets win/lose conditions
          if (userTotal === random){
            win();
          }
          else if ( userTotal > random){
            lose();
          }   
    })  

    $('#Green').on ("click", function(){
      userTotal = userTotal + Green;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal); 
            //sets win/lose conditions
          if (userTotal === random){
            win();
          }
          else if ( userTotal > random){
            lose();
          }   
    })  
  
  });