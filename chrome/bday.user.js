// ==UserScript==
// @name Happy birthday extension
// @description Make the Google logo say Happy Birthday!
// @match http://www.google.com/
// ==/UserScript==

window.onload = function() {
	document.getElementById("hplogo").src = "http://m.pimpmyspace.org/pimp/1/0c/0c8cc2af7fd77413284a.jpg";
}
