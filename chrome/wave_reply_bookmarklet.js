javascript:(function() {
	var sub = document.getElementById("canvas_frame").contentDocument.getElementsByClassName("hP")[0].innerHTML;
	
	var url = location.href.replace("#", "%23");
	
	
	var msg = "";
	var msgDiv = document.getElementById("canvas_frame").contentDocument.getElementsByClassName("ii")[0];
	msg += msgDiv.children[0].innerText;
	
	while (msg.indexOf("&nbsp;") != -1) {
		msg.replace("&nbsp;", " ");
	}
	while (msg.indexOf("<br/>") != -1) {
		msg.replace("<br>", "\n");
	}
	
	var form = document.createElement("form");
	form.setAttribute("method", "POST");
	form.setAttribute("action", "https://wave.google.com/wave/wavethis");
	
	var tField = document.createElement("input");
	tField.setAttribute("type", "hidden");
	tField.setAttribute("name", "t");
	tField.setAttribute("value", sub);
	var uField = document.createElement("input");
	uField.setAttribute("type", "hidden");
	uField.setAttribute("name", "u");
	uField.setAttribute("value", url);
	var cField = document.createElement("input");
	cField.setAttribute("type", "hidden");
	cField.setAttribute("name", "c");
	cField.setAttribute("value", msg);
	
	form.appendChild(tField);
	form.appendChild(uField);
	form.appendChild(cField);
	form.submit();
	
})();
	
//	window.open(("https://wave.google.com/wave/wavethis?t=" + encodeURI(sub) + "&u=" + encodeURI(url) + "&c=" + encodeURI(msg)), "_blank");
