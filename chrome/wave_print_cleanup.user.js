// ==UserScript==
// @name Wave Printing UI Cleanup
// @description Remove unnecessary UI from the Google Wave printing UI
// @match https://wave.google.com/wave/?client.type=print*
// @match https://wave.google.com/a/?client.type=print*
// ==/UserScript==

window.onload = function() {
	try {
		document.getElementsByTagName("FEB")[0].style.display = "none";
	} catch(e) {}
	try {
		document.getElementsByTagName("EEB")[0].style.display = "none";
	} catch(e) {}
};
