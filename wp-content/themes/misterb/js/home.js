$ = jQuery;

$.fn.extend({ isVisible: //returns true if the element is completely within the viewport (note: doesn't look at left side)
	function() {
		if (this.offset().left + this.outerWidth() <= $(window).width())
			return true;
		else
			return false;
	}
});

function changePager(direction) { // change pages either 'forward', 'backward' or place a specific el on the left
	brand_logos = $('#brands-pager-images a');

	if (direction == 'forward') {
		append = new Array();
		i = 0;
		while ($(brand_logos[i]).isVisible()) {
			append.push(brand_logos[i]);
			i++;
		}
		$(append).each(function() {
			$(this).detach().appendTo('#brands-pager-images');
		});
	} else if (direction == 'backward') {
		prepend = new Array();
		i = brand_logos.length-1;
		while (!($(brand_logos[i]).isVisible())) {
			prepend.push(brand_logos[i]);
			i--;
		}
		$(prepend).each(function() {
			$(this).detach().prependTo('#brands-pager-images');
		});
	} else {
		//deal with putting a specific el on the left
	}
}

$(document).ready(function() {
	

	//brands pager
	$('.pager-nav#next').click(function() {
		changePager('forward');
	});
	$('.pager-nav#prev').click(function() {
		changePager('backward');
	});
	$('#brands-pager').hover(function() {
		$('#brands-slideshow').cycle('pause');
	},function() {
		$('#brands-slideshow').cycle('resume');
	});

	$('#brands-slideshow').cycle({
	    timeout: 		1000,
	    loader: 		"wait",
	    pauseOnHover: 	true,
	    log: 			true
	});

	$('#brands-slideshow').on('cycle-initialized', function(e, opts) {
		// mark the initial brand in the pager
		console.log(opts.currSlide);
	    $('#brands-pager-images a[data-slide-index='+opts.currSlide+']').addClass('active').siblings().removeClass('active');
	});
	$('#brands-slideshow').on('cycle-before', function(e, opts) {
	    // mark the active brand in the pager
	    $('#brands-pager-images a[data-slide-index='+opts.nextSlide+']').addClass('active').siblings().removeClass('active');
	    if (!$('#brands-pager-images a[data-slide-index='+opts.nextSlide+']').isVisible())
	    	changePager('forward'); //pass the el's slide index instead and then modify the changePager fn to place that element on the left side
	});
	$('#brands-pager-images a').hover(function(event) { //change slide to hovered brand
		$('#brands-slideshow').cycle('goto',$(this).data('slide-index'));
	}).click(function (event) {
		window.location = this.href;
	});
});