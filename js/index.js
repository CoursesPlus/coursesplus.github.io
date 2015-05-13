$(document).ready(function() {
	$("#scrollStay").scrollToFixed();

	$(".downloadBtn").click(function() {
		chrome.webstore.install();
	});
});