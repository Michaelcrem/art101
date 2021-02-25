var original_text = $("#original_text").children().html();
console.log(original_text);


function macthingFunction(){
var input_text = $("input_text").val();
var substring_var = original_text.substring(0,input_text.length)
console.log(input_text);
console.log(substring_var);
if(input_text==substing_var){

  $("#input_text").css('border-color','green');

}

else {
$("#input_text").css('border-color','blue');


}

}
else {
$("#input_text").css('border-color','red');


}



}


$("#input_text").keyup(matchingFunction);
