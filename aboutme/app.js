/*global alert: false, console: false, jQuery: false */
/*jslint browser: true*/
/*global $, jQuery, alert*/
var main = function () {
    "use strict";
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
        $(this).removeClass('sub-option-color');
        $(this).addClass('sub-option-hover');
    }, function () {
        $(this).removeClass('sub-option-hover');
        $(this).addClass('sub-option-color');
    });













};
$(document).ready(main);