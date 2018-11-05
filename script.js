var h3 = document.getElementsByTagName("h3")[0];

var colourinput1 = document.getElementsByClassName("colour1")[0];
var colourinput2 = document.getElementsByClassName("colour2")[0];

var body = document.getElementsByTagName("body")[0];

function updateColour() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ colourinput1.value
		+ ", "
		+ colourinput2.value
		+ ")";

	h3.textContent = body.style.background;
}
// colourinput1.addEventListener("input", updateColour);
// colourinput2.addEventListener("input", updateColour);
