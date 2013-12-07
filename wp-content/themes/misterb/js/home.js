$ = jQuery;

$(document).ready(function() {
	

	//brands pager
	$('#brands-pager').hover(function() {
		$('#brands-slideshow').cycle('pause');
	},function() {
		$('#brands-slideshow').cycle('resume');
	});
	 //define the hover fn for the brand images to change slide to when a brand
	var brandsHoverFn = function(event) { $('#brands-slideshow').cycle('goto',$(this).data('slide-index'));	}

	$('#brands-slideshow').cycle({
	    timeout: 		4000,
	    loader: 		"wait",
	    pauseOnHover: 	false,
	    log: 			false
	});

	$('#brands-slideshow').on('cycle-initialized', function(e, opts) {
		// mark the initial brand in the pager
	    $('#brands-pager .scrollableArea a[data-slide-index='+opts.currSlide+']').addClass('active').siblings().removeClass('active');
	});
	$('#brands-slideshow').on('cycle-before', function(e, opts) {
	    // mark the active brand in the pager
	    $('#brands-pager .scrollableArea a[data-slide-index='+opts.nextSlide+']').addClass('active').siblings().removeClass('active');
	    if (!$('#brands-pager .scrollableArea a[data-slide-index='+opts.nextSlide+']').isVisible('.scrollWrapper')) {
	    	//setup and execute a queue of functions: first unbind the brand imgs HoverIn event so that this whole thing doesn't run over and over as the scrolling is going on, then setup the action for when the scrolling completes and finally tell the div to scroll
	    	$("#brands-pager").queue('scrollTo',function(next){$('#brands-pager .scrollableArea a').unbind('mouseenter'); next();});
	    	$("#brands-pager").queue('scrollTo',function(next){$('#brands-pager').smoothDivScroll('option','scrolledToElementNumber',function(event,data){$('#brands-pager .scrollableArea a').mouseenter(brandsHoverFn);}); next();});
	    	$("#brands-pager").queue('scrollTo',function(next){$("#brands-pager").smoothDivScroll('scrollToElement','obj',$('#brands-pager .scrollableArea a[data-slide-index='+opts.nextSlide+']')); next();});
	    	$("#brands-pager").dequeue('scrollTo');
	    }
	});
	$('#brands-pager .scrollableArea a').mouseenter(brandsHoverFn);
});