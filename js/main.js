$(function () {

    $(document).ready(function ($) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('.logo img').addClass('small-logo');
                $('header').addClass('header-bg')
            } else {
                $('.logo img').removeClass('small-logo');
                $('header').removeClass('header-bg')
            }
        });
    });

    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('header nav').toggleClass('active');
        $('body, html').toggleClass('hidden');
        // $(window).scrollTop(0);
        return false;
    });

    $('.menu li .sub-menu').parent().append('<span class="sub-down"><i class="fa fa-angle-down"></i></span>');
    $('.sub-down').parent().find('a').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('.sub-menu').toggle();
    });


    $(window).on('load', function () {

        /*---------------------
            Preloader
        -----------------------*/
        var preLoder = $("#loader");
        preLoder.addClass('hide');
    });

    $('.user-profil-page .right li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.user-profil-page .right .tab-content').eq($(this).index()).addClass('active').siblings().removeClass('active');
    });

    // $("video").play();

    $('.accordion-tab-content .accordion').hide();
    $('.accordion-tab-content .accordion').first().show();
    $('.accordion-tab li').on('click', function(){
        var index = $(this).index();
        $('.accordion-tab li').removeClass('active');
        $(this).addClass('active');
        $('.accordion-tab-content .accordion').hide();
        $('.accordion-tab-content .accordion').eq(index).show();
    });
// ====================
var ClockDate = $('#clock').data( "date" );
$('#clock').countdown(ClockDate, function(event) {
  var $this = $(this).html(event.strftime(''
    + '<ul>'
    + '<li><span>%D<em>days</em></span></li>'
    + '<li><span>%H<em>hours </em></span></li>'
    + '<li><span>%M<em>minutes</em></span></li>'
    + '<li><span>%S<em>seconds</em></span></li>'
    + '</ul>'
    ));
});
});

(function () {
    var dd = $('dd');
    dd.filter(':nth-child(n+3)').hide();
    $('dl').on('click', 'dt', function () {
        $(this).next().slideDown(500).siblings('dd').slideUp(500);
    })
})();











// ====================
var ClockDate = $('#clock_1').data( "date" );
$('#clock_1').countdown(ClockDate, function(event) {
  var $this = $(this).html(event.strftime(''
    + '<ul>'
    + '<li><span>%D<em>days</em></span></li>'
    + '<li><span>%H<em>hours </em></span></li>'
    + '<li><span>%M<em>minutes</em></span></li>'
    + '<li><span>%S<em>seconds</em></span></li>'
    + '</ul>'
    ));
});


(function () {
    var dd = $('dd');
    dd.filter(':nth-child(n+3)').hide();
    $('dl').on('click', 'dt', function () {
        $(this).next().slideDown(500).siblings('dd').slideUp(500);
    })
})();

