// ==UserScript==
// @name Facebook Quote Of The Day
// @description Appends a random quote to your favorite quotes every time you open your settings.
// @match http://www.facebook.com/editprofile.php?sk=basic
// @match http://www.facebook.com/*/editprofile.php?sk=basic
// ==/UserScript==

var quoteBox = document.getElementsByName("quotes")[0];

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		quoteBox.innerHTML += "\n\n" + xhttp.responseText;
	}
}
xhttp.open("GET", "http://www.iheartquotes.com/api/v1/random", true);
xhttp.send();


alert("Options have been modified.");
