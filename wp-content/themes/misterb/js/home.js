jQuery(document).ready(function($) {

	/*var slideshow = $('.slideshow').bxSlider({
		mode: 'fade',
		pagerCustom: '#nav-brands',
		auto: true,
		controls: false
	});
	$('#nav-brands a').hover(
		function(event) {
			slideshow.stopAuto();
			slideshow.goToSlide($(this).data('slide-index')) },
		function(event){
			slideshow.startAuto();
		}
	).click(function (event) {
		window.location = this.href;
	});*/

	$('#brands-slideshow').cycle({
	    timeout: 		1000,
	    loader: 		true,
	    pauseOnHover: 	true,
	    log: 			true
	});
	$('#brands-slideshow').on('cycle-before', function(e, opts) {
	    // advance the brands pager
	    console.log('going to:'+opts.currSlide);
	    $('#brands-pager').cycle('goto', opts.currSlide);
	});

	$('#nav-brands a').hover(function(event) { //change slide to hovered brand
		$('.cycle-slideshow').cycle('goto');
	}).click(function (event) {
		window.location = this.href;
	});
});