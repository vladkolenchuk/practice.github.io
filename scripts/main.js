$(document).ready(function () {

    $('.tab1 .tab__title').on('click', function () {
        $('.tab1 .tab__title').removeClass('active');
        $(this).toggleClass('active');
        $('.tab1 .tab__content').removeClass('active').eq($(this).index()).toggleClass('active');

    })
})

$(document).ready(function () {

    $('.tab2 .tab__title').on('click', function () {

        $('.tab2 .tab__title').removeClass('active');
        $(this).toggleClass('active');
        $('.tab2 .tab__content').fadeOut(1000).eq($(this).index()).fadeIn( 1000 );
    })
})

$(document).ready(function () {

    $('.tab3 .tab__title').on('click', function () {
        $('.tab3 .tab__title').removeClass('active').animate({
            borderBottomWidth: 2
        }, 60);
        $(this).toggleClass('active').animate({
            borderBottomWidth: 0
        }, 60);
        $('.tab3 .tab__content').fadeOut(400).eq($(this).index()).fadeIn( 400 );

    })
})
