/*global alert: false, console: false, jQuery: false */
/*jslint browser: true*/
/*global $, jQuery, alert*/
var main = function () {
    "use strict";
    // Main menu code
    $('.nav-option').hover(function () {
        $(this).children(':nth-child(1)').removeClass('nav-option-color');
        $(this).children(':nth-child(1)').addClass('nav-option-hover');
        $(this).children(':nth-child(2)').slideDown(150);
    }, function () {
        $(this).children(':nth-child(1)').removeClass('nav-option-hover');
        $(this).children(':nth-child(1)').addClass('nav-option-color');
        $(this).children(':nth-child(2)').hide();
    });

    $('.sub-option').hover(function () {
        $(this).animate({backgroundColor: "#faaf8e"}, 200);
    }, function () {
        $(this).animate({backgroundColor: "#ffc7af"}, 200);
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
        
    });
    
    $('.scrollToTop').click(function () {
        $('body').animate({scrollTop : 0}, 800);
        return false;
    });
    
    $('.page-btn').hover(function () {
        $(this).children('.page-link').animate({backgroundColor: "#faaf8e", color: "#fff"}, 180);
    }, function () {
        $(this).children('.page-link').animate({backgroundColor: "#fff", color: "#000"}, 180);
    });
    
};
$(document).ready(main);