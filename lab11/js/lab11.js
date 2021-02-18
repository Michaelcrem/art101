// Lab 10- sort or scamble a name
// Author:Michael Cremonini
// Created: Febuary 17
// License: Public Domain



$("#challenges").append("<button id='c-button'>Button</button>");
$("#problems").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");

// what the button do when clicked
$("#c-button").click(function(){


  //another code for (this). parent
//  $("#challenges").toggleClass("special")

//traversing the DOM to the parent
  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
$(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
$(this).parent().toggleClass("special");
})
