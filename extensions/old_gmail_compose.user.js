// ==UserScript==
// @name Old Compose Link
// @description Changes the look of new Gmail "Compose mail" button back to that of the old link. (requested by William & Minh)
// @match http://mail.google.com/mail/*
// @match https://mail.google.com/mail/*
// ==/UserScript==

var oldGmailComposeInterval = setInterval(function() {
	try {
		var canvas = document.getElementById("canvas_frame").contentDocument;
		for (var i = 0; i < canvas.getElementsByTagName("div").length; i++) {
			if (canvas.getElementsByTagName("div")[i].innerHTML == "Compose mail") {
				var composeBtn = canvas.getElementsByTagName("div")[i];
				composeBtn.style.background = "none";
				composeBtn.style.border = "none";
				composeBtn.style.fontSize = "10pt";
				composeBtn.style.fontWeight = "bold";
				composeBtn.style.textDecoration = "underline";
				composeBtn.style.color = "#00C";
				composeBtn.style.cursor = "pointer";
				window.clearInterval();
				break;
			}
		}
//		clearInterval(oldGmailComposeInterval);
	} catch(e) {
	}
}, 500);
