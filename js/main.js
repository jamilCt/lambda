(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        // sticky menu
    	$(".header-area").sticky({ topSpacing: 0 });


    	// jQuery smooth scroll
    	$('li.smooth-menu a').bind('click', function(event) {
    		var $anchor = $(this);
    		var headerH = '0';
    		$('html, body').stop().animate({
    			scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
    		}, 1200, 'easeInOutExpo');
    	});
        

    	// jQuery Scroll Spy
    	$('body').scrollspy({ target: '.navbar-collapse' })

    });


    	// jQuery Scrolly
	       $('.parallax-bg').scrolly({bgParallax: true});


    	// For fixing mainMenu toggle effect
    	$('.navbar-toggle').click(function() {
    		$('.mainMenu').addClass('mobileMenu-activated');
    	});


    	// For toggle back after click
    	$('ul.nav.navbar-nav li a').click(function() {
    		$('.navbar-collapse').removeClass('in');
    	});




    jQuery(window).load(function(){

        
    });


}(jQuery));