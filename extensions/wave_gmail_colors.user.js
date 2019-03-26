// ==UserScript==
// @name Wave Gmail Colors
// @description Replace some of the colors in Google Wave with Gmail colors.
// @match https://wave.google.com/wave/*
// ==/UserScript==

/*window.setInterval(function () {
	try {
		// nav panel selection
		for (var i = 0; i < document.getElementsByClassName("P-").length; i++) {
			var elem = document.getElementsByClassName("P-")[i];
			if (elem == document.getElementsByClassName("G0")[0]) {
				elem.style.backgroundColor = "#678CD7";
			} else if (elem == document.getElementsByClassName("H0")[0]) {
				elem.style.backgroundColor = "#C6D9FE";
			} else {
				elem.style.backgroundColor = "none";
			}
		}
	} catch (e) {}
	
	// search panel selection
	for (var i = 0; i < document.getElementsByClassName("FLB").length; i++) {
		try {
			document.getElementsByClassName("FLB")[i].style.backgroundColor = "#678CD7";
		} catch (e) {}
	}
}, 500); */
alert("Running extension!");

for (var i = 0; i < document.getElementsByTagName("style").length; i++) {
	var ss = document.getElementsByTagName("style")[i];
	while (ss.innerHTML.indexOf("#81a642") != -1) {
		alert("Found one! (index" + ss.innerHTML.indexOf("#81a642") + ")");
		ss.innerHTML.replace("#81a642", "#678CD7");
		alert("Fixed it!");
	}
}

