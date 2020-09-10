$(function() {
	$("#check").blur(function(event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 769) {
			$("#item").collapse('hide');
		}
	});
	// body...
});