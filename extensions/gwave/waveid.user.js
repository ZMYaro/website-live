// ==UserScript==
// @name WaveID opener
// @description Opens waveid:// URLs in the Google Wave client.
// @match waveid://*
// ==/UserScript==

var url = location.href;
url = url.substring(9, url.length);
location.href = "https://wave.google.com/wave/waveref/" + url;
