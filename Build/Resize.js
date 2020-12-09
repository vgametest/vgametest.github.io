var defaultWidth = "960px";
var defaultHeight = "600px";


$(document).ready(function () {

	resize();
	$(window).resize(function() {

		resize();
	  });
});

//------------------------------
function resize() {
	if (getOrientation() == "Landscape" && isMobileDevice()) {
		modifyScreenDimensions();
		//unityInstance.SetFullscreen(1);
		console.log("Click");
		$("#TestOnClick").trigger("click");
	} else if (getOrientation() == "Portrait" && isMobileDevice()) {
		unityInstance.SetFullscreen(0);
		document.getElementById("unityContainer").style.width = defaultWidth;
		document.getElementById("unityContainer").style.height = defaultHeight;
	} else {
		document.getElementById("unityContainer").style.width = defaultWidth;
		document.getElementById("unityContainer").style.height = defaultHeight;
	}
}

function modifyScreenDimensions() {
	var mywidth = window.innerWidth;
	var myheight = window.innerHeight;

	//mywidth = (myheight*16)/9;

	document.getElementById("unityContainer").style.width = mywidth + "px";
	document.getElementById("unityContainer").style.height = myheight + "px";
};

function getOrientation() {
	var orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
	return orientation;
};

function isMobileDevice() {
	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};