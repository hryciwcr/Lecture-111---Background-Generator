var h3 = document.getElementsByTagName("h3")[0];

var colourinput1 = document.getElementsByClassName("colour1")[0];
var colourinput2 = document.getElementsByClassName("colour2")[0];

colourinput1.addEventListener("input", function() {
	console.log(colourinput1.value);
});
colourinput2.addEventListener("input", function() {
	console.log(colourinput2.value);
});

console.log(h3, "\n", colourinput1, "\n", colourinput1);