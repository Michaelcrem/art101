/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 19 September
 * License: Public Domain
 */

//apiEndpoint = "https://api.chucknorris.io/jokes/random";
var apiEndpoint = "https://xkcd.com/info.0.json"

$("#api-button").click(doAPIStuff);

function putTextOnPage(text){
  $("#output").html(text);
}

function doAPIStuff() {
  console.log("Doing API Stuff");
  $.ajax({
    // The URL for the request
    url: apiEndpoint,
    // The data to send (will be converted to a query string)
    data: { },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",

    success: function( data ) {
      var textData = JSON.stringify(data);
      var str = "";
      var imageURL = data.img;
      var title = data.title;
      var alt= data.alt;
      str += "<h2>" + title + "</h1>";
      str += "<img src='" + imageURL + "'title='" + alt + "'>"
      console.log("Success:", textData);
      putTextOnPage(str);
    }
    })

  .fail(function( xhr, status, errorThrown ) {
    console.log("Failure.");
    putTextOnPage(errorThrown + " Status:" + status);
    //console.log(errorThrown + " Status:" + status );
  })
  console.log("Asynchronously doing the next thing.");

}
