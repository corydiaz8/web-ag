$(document).ready(function () {

    $(".navbar-toggler").click(function () {
        $('body').toggleClass('show-right-menu');

    });
    
    $(".accordion-card__title").click(function () {
        $(this).parents('.includ__box').find('.card').removeClass('card-bgcGreen');
        $(this).parents('.card').addClass('card-bgcGreen');
    })
});


$(window).scroll(function(){
    if ($(window).scrollTop()) {
        $('.header-bg').addClass('fixed-header');
    }
    else {
        $('.header-bg').removeClass('fixed-header');
    }
});
