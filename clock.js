function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	// add a zero in front of numbers < 10
	m = checkTime(m);
	s = checkTime(s);
	// translate the day number to a string
	var d = dayToString(today.getDay());
	// translate the month number to a string
	var mo = monthToString(today.getMonth());
	// put the text on in the div (and onto the page)
	document.getElementById("time").innerHTML = "The current time is: " + h + ":" + m + ":" + s + " on " + d + ", " + mo + " " + today.getDate() + ", " + today.getFullYear();
	t = setTimeout('startTime()', 500);
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
function dayToString(day) {
	if (day == 0) {
		return "Sunday";
	} else if (day == 1) {
		return "Monday";
	} else if (day == 2) {
		return "Tuesday";
	} else if (day == 3) {
		return "Wednesday";
	} else if (day == 4) {
		return "Thursday";
	} else if (day == 5) {
		return "Friday";
	} else if (day == 6) {
		return "Saturday";
	}
	return null;
}
function monthToString(month) {
	if (month == 0) {
		return "January";
	} else if (month == 1) {
		return "February";
	} else if (month == 2) {
		return "March";
	} else if (month == 3) {
		return "April";
	} else if (month == 4) {
		return "May";
	} else if (month == 5) {
		return "June";
	} else if (month == 6) {
		return "July";
	} else if (month == 7) {
		return "August";
	} else if (month == 8) {
		return "September";
	} else if (month == 9) {
		return "October";
	} else if (month == 10) {
		return "November";
	} else if (month == 11) {
		return "December";
	}
	return null;
}