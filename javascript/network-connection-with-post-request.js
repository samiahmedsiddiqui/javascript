var myUID = 123,
    myFeeling = "Awesome",
    myStatus = "new";

functfeelingeStatus () {
  if (!navigator.onLine) // Check whether the Internet is connected or not
    return;
  var http = new XMLHttpRequest(); // Create Object of HttpRequest
  var url = "https://www.example.com/sami-ahmed-siddiqui/update-status"; //URL Which needs to be called
  var params = "uid="+myUID+"&feeling="+myFeeling+"&status="+myStatus+""; // Param which needs to be passed to Post Data.
  http.open("POST", url, true); // Open Connection

  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // Set URL Header

  http.onreadystatechange = function () { //  Check the state change
    if (http.readyState == 4 && http.status == 200) { // Check if the Page callback returns 200 status so, it represents that the data has been posted or and return maybe retrieved.
      console.log(http.responseText);
    }
  } 
  http.send(params); 
}
