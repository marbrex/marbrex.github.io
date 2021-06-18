$(document).ready(function() {
	$('nav ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	});
});


$(document).ready(function() {
	$(".navbar-btn").on("click", function() {
		$("nav ul").toggleClass("showing");
	});
});

$(window).on("scroll", function() {
	if ($(window).scrollTop()) {
		$('nav').addClass('dark');
	}
	else {
		$('nav').removeClass('dark');
	}
});

$(window).scroll(function() {
	var scrollValue = $(this).scrollTop();

	$('.header-text').css('transform', 'translate(-50%, -'+(scrollValue/2 + 50)+'%)');
	$('.sun').css('transform', 'translateY(-'+scrollValue/3+'%)');
});

$(document).on("click", "ul li", function() {
	$(this).addClass("active").siblings().removeClass("active");
});