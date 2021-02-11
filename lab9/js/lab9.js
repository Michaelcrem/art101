// author:
//date: 2021/02/9
//License: MIT (for everyone) copywritten by (for myself)


//create a div element that has id="div_1" and text that says "this is annoying"
var new1El = document.getElementById("output");
new1El.innerHTML = "Want know how many challenges we had?";


//console.log that text
console.log(new1El.innerHTML);

//add a button
var new2El = document.createElement("button");
document.body.appendChild(new2El); //keeps the button from disappearing
new2El.innerHTML = "Challenges";

//change the text from this annoying into "this is more annoying than I thought!" when Clicking the button
new2El.onclick = function (){
        new1El.innerHTML = "NONE!... Just kidding, we did have some. We were having a hard time tyring to add in more buttons in our javascript since it was not connecting to our HTML. We found our error by looking over our code and fixing our new numbered variables. After that, we didn't have any challenges and it was straight forward. We both attended section the previous week which helped us a lot for this lab."

}




//create a div element that has id="div_1" and text that says "this is annoying"
var new3El = document.getElementById("content");
new3El.innerHTML = "Don't press the button";


//console.log that text
console.log(new3El.innerHTML);

//add a button
var new4El = document.createElement("button");
document.body.appendChild(new4El); //keeps the button from disappearing
new4El.innerHTML = "Problems";

//change the text from this annoying into "this is more annoying than I thought!" when Clicking the button
new4El.onclick = function (){
        new3El.innerHTML = "I got 99 Problems, but JavaScript isn't one..... We are curious as to how to keep the buttons clickable without refreshing the page. We tried to exlpore this little problem in depth but we were happy with our initial result."

}


//create a div element that has id="div_1" and text that says "this is annoying"
var new5El = document.getElementById("content2");
new5El.innerHTML = "DONT PRESS THE THIRD BUTTON!";


//console.log that text
console.log(new5El.innerHTML);

//add a button
var new6El = document.createElement("button");
document.body.appendChild(new6El); //keeps the button from disappearing
new6El.innerHTML = "Results";

//change the text from this annoying into "this is more annoying than I thought!" when Clicking the button
new6El.onclick = function (){
        new5El.innerHTML = "Here we have our results. We made three new elements that allow us to click for more information. We created buttons in our javascript by using createElement and we connected our new elements in our HTML with our three different divs. By clicking on our buttons, you are able to see our information in our Results, Problems and Challenges Section!  ";

}
