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

// Horizontally distribute elements in their parent container
jQuery.fn.extend({ distHoriz:
	function() {
		$ = jQuery;
		var totalWidth = 0;
		numBrands = $(this).each(function(){ totalWidth += $(this).width() }).length;
		var eachLeftMargin = ($(this).parent('div').width() - totalWidth)/(numBrands+1);
		$(this).each(function() { $(this).css('marginLeft',eachLeftMargin+'px'); });
	}
});

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

	$('#brands-pager').cycle({
		slideActiveClass: 	'active',
		log:  				true
	});
	$('#brands-pager-images img').hover(function(){
	    $('brands-slideshow').cycle('goto', $('#brands-pager').data('cycle.API').getSlideIndex(this));
	});
 
}); /* end of as page load scripts */

jQuery(window).resize(function() {
	//jQuery('#nav-brands a').distHoriz();
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