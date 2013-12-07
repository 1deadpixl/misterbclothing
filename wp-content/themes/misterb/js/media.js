$ = jQuery;

$(document).ready(function() {
	console.log('test');
	$('.page-id-15 .section').smoothDivScroll({
		autoScrollingMode: "",
		mousewheelScrolling: "horizontal",
		touchScrolling: false,
		manualContinuousScrolling: true,
		easingAfterHotSpotScrollingDistance: 50,
		easingAfterHotSpotScrollingDuration: 250,
		hotSpotSpeedRamp: false,
		hotSpotScrollingInterval: 20,
		hotSpotScrollingStep: 10,
		visibleHotSpotBackgrounds: ""
	});
	$('.page-id-15 .section a').fancybox({
		padding : 0,
		helpers:  {
	        thumbs : {
	            width: 50,
	            height: 50
	        },
	        title: {
	            type: 'over',
	            position: 'bottom'
        	}
	    }
	});
});