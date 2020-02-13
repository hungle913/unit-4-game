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
    console.log(Blue, Red, Yellow, Green);

    // Set variable to tally wins, losses, user totals
    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    // Append Wins and Losses to wins and losses in html
    $("numberWins").text(wins);
    $("numberLosses").text(losses);

    // Create a reset for the game


    // Add wins to the wins


    // Add losses to the losses


    // Setup click for jewels


    // Setup wins/lose conditions




  
  });