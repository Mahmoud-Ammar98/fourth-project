$(function(){
    "use strict";
    $('.header').height($(window).height());
    $('.header .big-logo h1').css('margin-top' , ($(window).height()/4))

    $(window).resize(function(){
        $('.header').height($(window).height());
        $('.header .big-logo h1').css('margin-top' , ($(window).height()/4))
    });
});
/*
$(document).ready(function(){
    $('.read').on('click', function(){
        $(this).prev().toggle();
        $(this).siblings('.dots').toggle();
        if($(this).text()== 'read more'){
            $(this).text('read less')
        }else{
            $(this).text('read more')
        }
    });
    
});
*/
$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40,
        infiniteLoop: true,
        slideWidth: 660,
        minSlides: 3,
        maxSlides: 2,
        speed: 800,
    });
});
