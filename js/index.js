$(document).ready(function() {
	$("#scrollStay").scrollToFixed();

	$(".downloadBtn").click(function() {
		if (window.navigator.platform == "MacIntel" && window.screen.width == 1366 && window.screen.height == 768) {
			// student laptop?
			$("#slpModal").modal();
			return false;
		} else {
			// not student laptop
			chrome.webstore.install();
			return true;
		}
	});

	$(".inlineDl").click(function() {
		chrome.webstore.install();
		window.location.href = "/download";
	});

	$(".slp").click(function() {
		alert("Thanks for your interest in CoursesPlus! Unfortunately, CoursesPlus is not available on student laptops right now because of a ban on all extensions. We are working with New Lab to get this resolved!");
		window.location.reload();
	});
});