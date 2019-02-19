function toggleNavBar() {
	if(!localStorage.hideNav || localStorage.hideNav !== 'true') {
		localStorage.hideNav = 'true';
		document.body.classList.add('hideNav');
		document.getElementById('navToggleBtn').innerHTML = '&equiv;';
	} else {
		localStorage.hideNav = '';
		document.body.classList.remove('hideNav');
		document.getElementById('navToggleBtn').innerHTML = '&lsaquo;';
	}
}

window.addEventListener('load', function() {
	// Handle browsers where localStorage is not defined or not allowed to be accessed.
	try {
		if (!window.localStorage || localStorage.hideNav !== (localStorage.hideNav = localStorage.hideNav)) {
			window.localStorage = {};
		}
	} catch (err) {
		window.localStorage = {};
	}
	
	// Make the nav toggle button toggle the nav bar.
	document.getElementById('navToggleBtn').addEventListener('click', toggleNavBar, false);
	
	// Set the nav bar's initial state based on the saved setting (if any).
	localStorage.hideNav = (localStorage.hideNav === 'true' ? '' : 'true');
	toggleNavBar();
}, false);
