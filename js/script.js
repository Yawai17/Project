$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle')
    })

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle')

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){
        
        e.preventDefault();

        $('html, body').animate({

            scrollTop :$($(this).attr('href')).offset().top,

        },
        500,
        'linear'
        );

    });

});
// $(document).ready(function(){$("img").click(function(){this.requestFullscreen()})}); this code works for full screening images 
// but i have to try one more code lines which will probably break my code so if this gets erased i know when to stop undoing my failure lol

$('img[data-enlargable]').addClass('img-enlargable').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
});