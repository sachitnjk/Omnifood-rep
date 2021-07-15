/*----FOR STICKY NAV-------*/

/* jslint browser: true */
/* global $, document, location */
$(document).ready(function () {
    "use strict";

    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });


    /*---------SCROLL ON BUTTONS--------*/


    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);

    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);

    });

    /*---------NAVIGATION SCROLL------------*/


    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /*---------ANIMATIONS ON SCROLL------------*/

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__backInUp');
    }, {
        offset: '80%'
    });
    
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '80%'
    });
    
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '60%'
    });

});
