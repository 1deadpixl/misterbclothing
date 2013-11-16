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
	

	//
	$('#brands-slideshow').cycle({
	    timeout: 		1000,
	    loader: 		true,
	    pauseOnHover: 	true,
	    log: 			true
	});
	$('#brands-pager-images').cycle({
		fx:  				'carousel',
		slides: 			'> a',
		timeout: 			0,
		slideActiveClass: 	'active',
		carouselVisible:	10,
	    log: 				true
	});
	$('#brands-pager-images').on('cycle-before',function(e,opts) {
		$('#brands-pager-images .active').removeClass('active');
	});
	$('#brands-pager-images').on('cycle-after',function(e,opts) {
		// console.log(opts.currSlide);
		console.log($('#brands-pager-images .active').attr('title'));
	});
	$('#brands-slideshow').on('cycle-before', function(e, opts) {
	    // advance the brands pager
	    //console.log(opts);
	    // console.log('going to: '+opts.nextSlide);
	    $('#brands-pager-images').cycle('goto', opts.nextSlide);
	});
	$('#brands-pager-images a').hover(function(event) { //change slide to hovered brand
		//console.log('hovered on: '+$(this).data('slide-index'));
		$('#brands-slideshow').cycle('goto',$(this).data('slide-index'));
	}).click(function (event) {
		window.location = this.href;
	});
});