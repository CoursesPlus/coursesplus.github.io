function isChrome() {
	if (window.navigator.userAgent.match(/Chrome/) != null) {
		// maybe...
		if (window.navigator.userAgent.match(/Edge/) != null) {
			// Microsoft Edge lies and tell websites it's Chrome, Safari, and Edge.
			// (on mobile, it says it's a Windows Phone and Android phone running Mobile Safari)
			// Since it can't install Chrome extensions, it's NOT counted as Chrome.
			return false;
		}
		return true;
	}
	return false;
}

$(document).ready(function() {
	$("#scrollStay").scrollToFixed();

	$(".downloadBtn").click(function() {
		_paq.push(['trackEvent', 'DownloadStart', 'ClickBtn']);
		if (!isChrome()) {
			// you're not using Chrome!
			_paq.push(['trackEvent', 'DownloadFail', 'WrongBrowser', window.navigator.userAgent]);
			$("#notAvailable").modal();
			return false;
		}/*I else if (window.navigator.platform == "MacIntel" && window.screen.width == 1366 && window.screen.height == 768) {
			// student laptop?
			_paq.push(['trackEvent', 'DownloadProg', 'SLP']);
			$("#slpModal").modal();
			return false;
		} */else {
			// not student laptop
			_paq.push(['trackEvent', 'DownloadOK', 'InlineInstall']);
			chrome.webstore.install();
			return true;
		}
	});

	$(".inlineDl").click(function() {
		_paq.push(['trackEvent', 'DownloadOK', 'NotSLP']);
		chrome.webstore.install();
		window.location.href = "/download";
	});

	$(".slp").click(function() {
		_paq.push(['trackEvent', 'DownloadFail', 'SLP']);
		alert("Thanks for your interest in CoursesPlus! Unfortunately, CoursesPlus is not available on student laptops right now because of a ban on all extensions. We are working with New Lab to get this resolved!");
		window.location.reload();
	});
});
