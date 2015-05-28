// ==UserScript==
// @name Remove YouTube Player UI
// @description Remove the basic video controls from the YouTube HTML5 player and enables the standard HTML5 <video> controls.
// @match http://www.youtube.com/watch?*
// ==/UserScript==

try {
	document.getElementsByClassName("video-blocker")[0].style.display = "none";
	document.getElementsByClassName("html5-play-button")[0].style.display = "none";
	document.getElementsByClassName("html5-volume-control")[0].style.display = "none";
	document.getElementsByClassName("progress-text")[0].style.display = "none";
	document.getElementsByClassName("video-stream")[0].controls = true;
	document.getElementsByClassName("video-stream")[0].onloadeddata = function() {
		document.getElementsByClassName("progress-bar")[0].style.display = "none";
	}
} catch(e) {}
