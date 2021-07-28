javascript:(function() {
	if (location.hash.indexOf("wave:") == -1) {
		alert("No wave to pop out.");
	} else {
		var waveID = location.hash.substring(1, location.hash.length).split(",");
		for (var i = 0; i < waveID.length; i++) {
			if (waveID[i].indexOf("wave") != -1) {
				waveID = waveID[i].substring((waveID[i].indexOf("wave:") + 5), waveID[i].length);
				break;
			}
		}
		
		waveID = waveID.split("%");
		waveID = waveID[0] + "!" + waveID[1].substring(4, waveID[1].length) + "+" + waveID[2].substring(4, waveID[2].length);
		
		window.open("https://zmyaro.com/apps/waveembed.html#" + waveID,"_blank","left=20,top=20,width=480,height=600,status=no,toolbar=no");
	}
})();
