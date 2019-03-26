// ==UserScript==
// @name Remove YouTube Video Blocker
// @description Remove the div that covers the video in the YouTube HTML5 player allowing you to access the <video> element.
// @match http://www.youtube.com/watch?*
// ==/UserScript==

try {
	document.getElementsByClassName("video-blocker")[0].style.display = "none";
} catch(e) {}
