// ==UserScript==
// @name Facebook Quote Of The Day
// @description Replaces your favorite quote with a random quote every time you open your settings.
// @match http://www.facebook.com/editprofile.php?sk=basic
// @match http://www.facebook.com/*/editprofile.php?sk=basic
// ==/UserScript==

var quoteBox = document.getElementsByName("quotes")[0];
quoteBox.innerHTML = "Loading quote of the day...";




alert("Options have been modified.");
