$(document).ready(function(){
    if ($(window).width() > 640)
    {
        $('.header').height($(window).height() - ($('.navbar').height() * 1.4));
    }else {
        $('.header').height($(window).width() * 9.0 / 16.0);
    }
    
    $(".navbar a").click(function(){
        $('body,html').animate({
         scrollTop: $("#" + $(this).data('value')).offset().top
        },1000)
       });
   })