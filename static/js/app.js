$(document).ready(function(){

	// paralax menu
	var heroShinker = function() {
	    var hero = $('.paralx'),
	        heroHeight = $('.paralx').outerHeight(true);
	        $(hero).parent().css('padding-top', heroHeight);
	    $(window).scroll(function() {
	        var scrollOffset = $(window).scrollTop();
	        if (scrollOffset < heroHeight) {
	            $(hero).css('height', (heroHeight - scrollOffset));
				$('h1').stop().animate({ fontSize : '30px' }, 100);
	        }
	        // if scrolled past hero
	        if (scrollOffset > (heroHeight - 415)) {
	            hero.addClass('fixme');
	            $('h4.secondary').hide();
	        } else {
	        	$('h1').stop().animate({ fontSize : '5em' }, 100);
	        	$('h4.secondary').show();
	            hero.removeClass('fixme');

	        };
	    });
	}
	heroShinker();

	// scroll menu
	$(function($) {
		var hero = $('.paralx');
	    var heroHeight = $('.paralx').outerHeight(true);
	    
	    var $nav = $('#position-saver');
	    var $win = $(window);
	    var winH = $win.height(); // Get the window height.

	    $win.on("scroll", function () {
	        if ($(this).scrollTop() > heroHeight ) {
	            $nav.addClass("show-nav");
	            // animate menu
	            $('#position-saver').addClass('animated fadeInDown');
	        } else {
	            $nav.removeClass("show-nav");
	        }
	    }).on("resize", function(){ // If the user resizes the window
	       heroHeight = $(this).height(); // you'll need the new height value
	    });
	});

	// scroll to...
	$('#projects').click(function () {
		$('html,body').animate({
			scrollTop: $("#section1").offset().top
		}, 800);
	});

}); //end dom