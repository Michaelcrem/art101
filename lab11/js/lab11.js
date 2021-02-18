// Lab 10- sort or scamble a name
// Author:Michael Cremonini
// Created: Febuary 17
// License: Public Domain



$("#challenges").append("<button id=challenge-button>Press Me");
//creates the button under challenges

$("#problems").append("<button id=problems-button>Press Me");
//creates the button under problems

$("#results").append("<button id=results-button>Press Me");
//creates the button under results

$("#challenge-button").click(function(){
  alert("Help! I'm trapped inside this computer!");
})
//sends ann alert message after clicking on the challenge button

$("#problems-button").click(function(){
  alert("I can see you! Don't just sit there! Help me!");
})
//sends ann alert message after clicking on the problems button

$("#results-button").click(function(){
  alert("Ok fine, don't do anything. I just stole all your info!!!");
})
//sends ann alert message after clicking on the results button

$(document).ready(function(){
    $("p").on({
        mouseenter: function(){
            $(this).css("color", "green");
        }
    });
});
