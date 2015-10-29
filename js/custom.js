$(document).ready(function(){
	takePicture();
});

function takePicture(){
	$(".button--submit").bind("click", function(){
		alert("Take a Picture");
	});
}