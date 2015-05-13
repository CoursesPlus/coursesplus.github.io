$(document).ready(function() {
	$("#scrollStay").scrollToFixed();

	$("#downlaodBtn").click(function() {
		chrome.webstore.install();
	});
});