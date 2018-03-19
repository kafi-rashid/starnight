jQuery(document).ready(function(){
	$('#sky').append('<div id="stars"></div>');
	$(window).on("load resize", function(e) {
		var stars = $('#stars');
		$('.star').remove();
		var vp_w = stars.width();
		var vp_h = stars.height();
		for (var i = 0; i < 200; i++) {
			stars.append("<div class='star' style='left: "+Math.floor((Math.random() * vp_w) + 1)+"px; top: "+Math.floor((Math.random() * vp_h) + 1)+"px'></div>");
		}
		setInterval(function() {
			for(var i = 0; i < 200; i++) {
	            $('.star:nth-of-type('+Math.floor(Math.random() * (i - i + 1)) + i+')').animate({
	                'opacity': Math.random() * (1 - 0) - (1 * 0.3)
	            }, 1000);
	        }
		}, 1000)
	});
});