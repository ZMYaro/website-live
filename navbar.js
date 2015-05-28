function toggleNavBar() {
	if(!localStorage || !localStorage.hideNav || localStorage.hideNav !== "true") {
		localStorage.hideNav = "true";
		document.body.classList.add("hideNav");
		document.getElementById("navToggleBtn").innerHTML = "&equiv;";
	} else {
		localStorage.hideNav = "false";
		document.body.classList.remove("hideNav");
		document.getElementById("navToggleBtn").innerHTML = "&lsaquo;";
	}
}

window.addEventListener("load", function() {
	document.getElementById("navToggleBtn").addEventListener("click", toggleNavBar, false);
	if(!localStorage || !localStorage.hideNav || localStorage.hideNav !== "true") {
		document.body.classList.remove("hideNav");
		document.getElementById("navToggleBtn").innerHTML = "&lsaquo;";
		
	} else {
		document.body.classList.add("hideNav");
		document.getElementById("navToggleBtn").innerHTML = "&equiv;";
	}
}, false);
