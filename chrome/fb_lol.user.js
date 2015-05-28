// ==UserScript==
// @name Facebook Options Modifier
// @description Loploololol
// @match http://www.facebook.com/editprofile.php?sk=relationships
// @match http://www.facebook.com/*/editprofile.php?sk=relationships
// ==/UserScript==

var origInd = document.getElementsByName("status")[0].selectedIndex;

var newOption = document.createElement("option");
newOption.value = "20";
newOption.innerHTML = "I am a geek";

document.getElementsByName("status")[0].add(newOption,null);
document.getElementsByName("status")[0].selectedIndex = origInd;
document.getElementsByName("status")[0].setAttribute("onchange",
	document.getElementsByName("status")[0].getAttribute("onchange") +
	" if (document.getElementsByName('status')[0].options[document.getElementsByName('status')[0].selectedIndex].value == '20') {" +
		"document.getElementsByName('status')[0].selectedIndex = 2;" +
		"document.getElementsByClassName('relConnector_2')[0].style.display = 'inline';" +
		"var listId = document.getElementsByName('status')[0].id;" +
		"var txtId = listId.substring(0,8) + (parseInt(listId.charAt(8)) + 2);" +
		"document.getElementById(txtId).value = 'my computer';" +
	"}");

//alert("Options have been modified.");
