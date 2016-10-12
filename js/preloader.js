function preloader() {
	if (document.getElementById) {
		document.getElementById("preload-01").style.background = "url(http://www.prism.gatech.edu/~mchi6/mchi6/photos/background1.jpg) no-repeat -9999px -9999px";
		document.getElementById("preload-02").style.background = "url(http://www.prism.gatech.edu/~mchi6/mchi6/photos/background2.jpg) no-repeat -9999px -9999px";
		document.getElementById("preload-03").style.background = "url(http://www.prism.gatech.edu/~mchi6/mchi6/photos/background3.jpg) no-repeat -9999px -9999px";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

addLoadEvent(preloader);
