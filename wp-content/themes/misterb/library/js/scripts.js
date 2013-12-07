/*
Bones Scripts File
Author: Eddie Machado

Modified for Mister B
By: Philippe Enzler
*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
	window.getComputedStyle = function(el, pseudo) {
		this.el = el;
		this.getPropertyValue = function(prop) {
			var re = /(\-([a-z]){1})/g;
			if (prop == 'float') prop = 'styleFloat';
			if (re.test(prop)) {
				prop = prop.replace(re, function () {
					return arguments[2].toUpperCase();
				});
			}
			return el.currentStyle[prop] ? el.currentStyle[prop] : null;
		}
		return this;
	}
}

$ = jQuery;

$.fn.extend({ distHoriz:  // Horizontally distribute elements in their parent container
	function() {
		var totalWidth = 0;
		numBrands = $(this).each(function(){ totalWidth += $(this).width() }).length;
		var eachLeftMargin = ($(this).parent('div').width() - totalWidth)/(numBrands+1);
		$(this).each(function() { $(this).css('marginLeft',eachLeftMargin+'px'); });
	},
	isVisible: //returns true if the element is completely within the viewport (note: doesn't check left edge of viewport)
	function(parent) {
		if (parent != undefined) { parent = $(parent); }
		else { this.parent(); }
		console.log(this.offset().left);
		if ((this.offset().left-parent.offset().left) + this.outerWidth(true) <= parent.width())
			return true;
		else
			return false;
	},
	fitChildren: //fits the children of a container into it so that none are cut off
				 // maxWidth: maximum desired width of container
				 // startIndex: element index to start counting fitting elements
				 // returnToOutput: return new width instead of resizing
	function(maxWidth, startIndex, returnToOutput) {
		var containerWidth = maxWidth;
		startIndex = startIndex || 0;
		children = this.children();
		marginLeft = parseInt($(children[1]).css('marginLeft')); //check if the non-first element has a margin, if so assume it's the same for all elements
		newWidth = 0;
		containerFull = false;
		children.each(function(i) {
			if (i >= startIndex) {
				if (newWidth+$(this).outerWidth()+marginLeft < containerWidth && !containerFull) {
					newWidth += $(this).outerWidth()+marginLeft;
				} else { containerFull = true; }
			}
		});
		newWidth = newWidth-marginLeft
		if (returnToOutput)
			return newWidth;
		else
			this.css({width: newWidth});
	}
});

// function changePager(dirORel) { // change pages either 'forward', 'backward' or place a specific el on the left
// 	brand_logos = $('#brands-pager-images a');

// 	// count x number of brand of off-page brands and check if they'll fit in the container div, if not pop until they do.

// 	if (dirORel == 'forward') {
// 		visible = new Array();
// 		brand_logos.each(function(i) {
// 			if ($(this).isVisible())
// 				visible.push(this);
// 		});
// 		// newPage = new Array();
// 		// newPageWidth = 0;
// 		// pageFull = false;
// 		// brand_logos.each(function(i) {
// 		// 	if (!($(this).isVisible())) {
// 		// 		if (newPageWidth+$(this).outerWidth(true) <= $(window).width()*.95 && !pageFull) {
// 		// 			newPage.push(this);
// 		// 			newPageWidth += $(this).outerWidth(true);
// 		// 			pageFull = false;
// 		// 		} else { pageFull = true; }
// 		// 	}
// 		// });
// 		// brand_logos.parent().width(newPageWidth);
// 		brand_logos.animate({left: -1*parseInt($(brand_logos[visible.length]).position().left)+'px'},{
// 			queue: 'brands-pager',
// 			easing: 'easeInQuad',
// 			duration: 750
// 		});
		
// 		brand_logos.queue('brands-pager',function(next){
// 			// brand_logos.parent().animate({width: brand_logos.parent().fitChildren($(window).width()*.95, visible.length, true)});
// 			brand_logos.parent().fitChildren($(window).width()*.95, visible.length);
// 			next();
// 		});
// 		brand_logos.queue('brands-pager',function(next){
// 			$(visible[0]).detach().appendTo('#brands-pager-images');
// 			visible.shift();
// 			$(this).css('left',0);
// 			next();
// 		});
// 		brand_logos.dequeue('brands-pager');

// 	} else if (dirORel == 'backward') {
// 		prepend = new Array();
// 		i = brand_logos.length-1;
// 		while (!($(brand_logos[i]).isVisible())) {
// 			prepend.push(brand_logos[i]);
// 			i--;
// 		}
// 		$(prepend).each(function() {
// 			$(this).detach().prependTo('#brands-pager-images');
// 		});
// 	} else {
// 		append = new Array();
// 		i = 0;
// 		while (!($(brand_logos[i]).is(dirORel))) {
// 			append.push(brand_logos[i]);
// 			i++;
// 		}
// 		$(append).each(function() {
// 			$(this).detach().appendTo('#brands-pager-images');
// 		});
// 	}
// }

// as the page loads, call these scripts
jQuery(document).ready(function($) {

	/*
	Responsive jQuery is a tricky thing.
	There's a bunch of different ways to handle
	it, so be sure to research and find the one
	that works for you best.
	*/
	
	/* getting viewport width */
	var responsive_viewport = $(window).width();
	
	/* if is below 481px */
	if (responsive_viewport < 481) {
	
	} /* end smallest screen */
	
	/* if is larger than 481px */
	if (responsive_viewport > 481) {
	
	} /* end larger than 481px */
	
	/* if is above or equal to 768px */
	if (responsive_viewport >= 768) {
	
		/* load gravatars */
		$('.comment img[data-gravatar]').each(function(){
			$(this).attr('src',$(this).attr('data-gravatar'));
		});
		
	}
	
	/* off the bat large screen actions */
	if (responsive_viewport > 1030) {
	
	}
	
	
	//$('#nav-brands a').distHoriz();
	/*$('#nav-brands').carouFredSel({
		width: 		'100%',
		height: 	'auto',
		padding: 	[0, 50, 0, 50],
		items:  	{visible: "variable"}, 
		align:  	false,
		auto: 		{ play: false },
		next:  		{ button: '.carouselnav#next' },
		prev: 		{ button: '.carouselnav#prev' }
	},{
		wrapper:  	"parent",
		debug:  	true
	});*/

	//brands pager
	// $('.pager-nav#next').click(function() {
	// 	console.log('forward');
	// 	changePager('forward');
	// });
	// $('.pager-nav#prev').click(function() {
	// 	changePager('backward');
	// });
	$("#brands-pager").smoothDivScroll({
		autoScrollingMode: "",
		mousewheelScrolling: "horizontal",
		touchScrolling: false,
		manualContinuousScrolling: true,
		easingAfterHotSpotScrollingDistance: 150,
		easingAfterHotSpotScrollingDuration: 750,
		hotSpotSpeedRamp: false,
		hotSpotScrollingInterval: 2,
		hotSpotScrollingStep: 10,
		visibleHotSpotBackgrounds: ""
	});
	$('#brands-pager .scrollableArea a').click(function () {
		window.location = this.href;
	});
 
}); /* end of as page load scripts */

jQuery(window).load(function() {
	// $('#brands-pager-images').fitChildren($(window).width()*.95)
});

jQuery(window).resize(function() {
	// $('#brands-pager-images').fitChildren($(window).width()*.95)
});

jQuery(window).scroll(function() {
	if (!($('body').hasClass('home'))) {  //don't change header for home page
		if ($(window).scrollTop() <= 15) {
			$('header, #brands-pager').removeClass('scrolling');
		} else {
			$('header, #brands-pager').addClass('scrolling');
		}
	}
});

/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
	var doc = w.document;
	if( !doc.querySelector ){ return; }
	var meta = doc.querySelector( "meta[name=viewport]" ),
		initialContent = meta && meta.getAttribute( "content" ),
		disabledZoom = initialContent + ",maximum-scale=1",
		enabledZoom = initialContent + ",maximum-scale=10",
		enabled = true,
		x, y, z, aig;
	if( !meta ){ return; }
	function restoreZoom(){
		meta.setAttribute( "content", enabledZoom );
		enabled = true; }
	function disableZoom(){
		meta.setAttribute( "content", disabledZoom );
		enabled = false; }
	function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
		if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );