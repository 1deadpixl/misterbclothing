$ = jQuery;

$(document).ready(function() {
	

	//brands pager
	$('#brands-pager').hover(function() {
		$('#brands-slideshow').cycle('pause');
	},function() {
		$('#brands-slideshow').cycle('resume');
	});

	$('#brands-slideshow').cycle({
	    timeout: 		4000,
	    loader: 		"wait",
	    pauseOnHover: 	false,
	    log: 			false
	});

	$('#brands-slideshow').on('cycle-initialized', function(e, opts) {
		// mark the initial brand in the pager
	    $('#brands-pager-images a[data-slide-index='+opts.currSlide+']').addClass('active').siblings().removeClass('active');
	});
	$('#brands-slideshow').on('cycle-before', function(e, opts) {
	    // mark the active brand in the pager
	    $('#brands-pager-images a[data-slide-index='+opts.nextSlide+']').addClass('active').siblings().removeClass('active');
	    if (!$('#brands-pager-images a[data-slide-index='+opts.nextSlide+']').isVisible())
	    	changePager('#brands-pager-images a[data-slide-index='+opts.nextSlide+']'); //pass the el's slide index instead and then modify the changePager fn to place that element on the left side
	});
	$('#brands-pager-images a').hover(function(event) { //change slide to hovered brand
		$('#brands-slideshow').cycle('goto',$(this).data('slide-index'));
	});
});