var CLIENT_ID = '68982240764.apps.googleusercontent.com';
var SCOPE = 'https://www.googleapis.com/auth/drive';

var FOLDER_MIME_TYPE = 'application/vnd.google-apps.folder';
var DOC_MIME_TYPE = 'application/vnd.google-apps.document';
var LYRICS_FOLDER_ID = '0B15evpzcAcI3Yjc0MmRkM2EtNDEzNy00ZTJjLWI0MzUtNGFlMGVhZTNiOTAw';

/**
 * Called when the client library is loaded to start the auth flow.
 */
function handleClientLoad() {
	window.setTimeout(checkAuth, 1);
}

/**
 * Check if the current user has authorized the application.
 */
function checkAuth() {
	gapi.auth.authorize({
		client_id: CLIENT_ID,
		scope: SCOPE,
		immediate: true
	},
	handleAuthResult);
}

/**
 * Called when authorization server replies.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
	/*var authButton = document.getElementById('authorizeButton');
	authButton.style.display = 'none';*/
	if(authResult && !authResult.error) {
		// Access token has been successfully retrieved, requests can be sent to the API
		gapi.client.load('drive', 'v2', function() {
			loadSongData();
		});
	} else {
		// No access token could be retrieved, show the button to start the authorization flow.
		authButton.style.display = 'block';
		authButton.onclick = function() {
				gapi.auth.authorize(
					{'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': false},
					handleAuthResult
				);
		};
	}
}

/**
 * Loads a song's metadata
 *
 * @param {String} docID - The ID of the doc whose metadata is to be loaded
 */
function loadSongData() {
	/*var request = gapi.client.request({
		'path': '/drive/v2/files/' + docID,
		'method': 'GET',
		'params': {},
		'callback': loadSong
	});*/
	
	// The the hash should be the doc's id.
	var docId = location.hash.substring(1);
	if(docId.length === 0) {
		// If there is nothing in the hash, something is wrong.
		dispError();
		return;
	}
	
	var request = gapi.client.drive.files.get({
		fileId: docId
	});
	request.execute(loadSong);
	// Temporary solution: open the Google Doc in a new window
	//window.open('https://docs.google.com/document/d/' + docID + '/edit', '_blank');
}

/**
 * Loads a song (doc)
 *
 * @param {Object} jsonResp The response parsed as JSON.  If the response is not JSON, this field will be false.
 * @param {Object} rawResp The HTTP response.
 */
function loadSong(jsonResp, rawResp) {
	if(jsonResp) {
		if(jsonResp.title) {
		}
		if(jsonResp.exportLinks && jsonResp.exportLinks['text/plain']) {
			var accessToken = gapi.auth.getToken().access_token;
			var xhr = new XMLHttpRequest();
			xhr.open('GET', jsonResp.exportLinks['text/plain']);
			xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
			xhr.onload = function() {
				dispSong(jsonResp.title, xhr.responseText);
			}
			xhr.send();
		}
	}
}

/**
 * Displays a song's lyrics
 * @param {String} text - The doc's contents as plain text
 */
function dispSong(title, text) {
	// If the doc has a title...
	if(title) {
		// Display the title on the page.
		document.getElementById('parodyTitle').innerText
			document.getElementById('parodyTitle').textContent = title;
		
		// Remove the title from the doc content.
		text = text.replace(title, '');
	}
	// Convert line breaks to <br> tags.
	text = text.replace(/\n/g, '<br />');
	
	// Display the doc content on the page.
	document.getElementById('parodyContent').innerHTML += text;
}

/**
 * Displays an error message
 */
function dispError() {
	document.getElementById('parodyContent').innerHTML = 'An error occurred while loading lyrics.  You may try refreshing the page or <a href=".">go back</a> and try a different song.';
}