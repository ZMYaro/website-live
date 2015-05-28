javascript:(function() {
	for(var i = 0; i < document.getElementsByClassName("KOB").length; i++) {
		try {
			document.getElementsByClassName("KOB")[i].style.right = "0px";
			// the "KOB" div contains the panel's actual contents
		} catch(e) {}
	}
	for(var i = 0; i < document.getElementsByClassName("FPB").length; i++) {
		try {
			document.getElementsByClassName("FPB")[i].style.display = "none";
			// the "FPB" div contains the scroll bar and related elements
		} catch(e) {}
	}
})();
