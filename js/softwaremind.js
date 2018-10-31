$(window).ready(function() {
    
    $(window).resize();
    
    $(".advantagesSlider").slick({
        dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        focusOnSelect: false
    });
    
    $('.advantages .prev').click(function(e) {
        $('.advantagesSlider .slick-prev').click();
    });
    
    $('.advantages .next').click(function(e) {
        $('.advantagesSlider .slick-next').click();
    });
    
    $(".testimonialsSlider").slick({
        dots: false,
        arrows: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        focusOnSelect: false
    });
    
    $('.testimonials .prev').click(function(e) {
        $('.testimonialsSlider .slick-prev').click();
    });
    
    $('.testimonials .next').click(function(e) {
        $('.testimonialsSlider .slick-next').click();
    });
    
    $(".topSlider").slick({
        dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        focusOnSelect: false
    });
    
    setTimeout(function(){
        $(".topSlider").addClass("active");
    }, 600);
    
    $('.top .prev').click(function(e) {
        $('.topSlider .slick-prev').click();
    });
    
    $('.top .next').click(function(e) {
        $('.topSlider .slick-next').click();
    });
    
    $('.cookies .button a').click(function(e) {
        $('.cookies').fadeOut();
    });
    
    $('.scrollDown a').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".aboutUs").offset().top
        }, 1000);
    });
    
    $('.scrollTop a').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".top").offset().top
        }, 1000);
    });
    
    //
    
    function showMobileMenu(){
        $(".closeMobile").addClass("active");
        $(".hamburger").removeClass("active");
        $(".mobileMenu").addClass("active");
        $(".mobileMenu ul li").each(function(i) {
            var el = $(this);
            setTimeout(function() {
                el.addClass('active');
            }, i * 200);
        });
    }
    
    function hideMobileMenu(){
        $(".closeMobile").removeClass("active");
        $(".hamburger").addClass("active");
        $(".mobileMenu").removeClass("active");
        $(".mobileMenu ul li").each(function(i) {
            var el = $(this);
            setTimeout(function() {
                el.removeClass('active');
            }, i * 0);
        });
    }
    
    $(".hamburger a").click(function(e) {
        showMobileMenu();
    });
    
    $(".closeMobile a").click(function(e) {
        hideMobileMenu();
    });
    
});

$(window).on('load', function() {
    
});

$(window).on('resize', function() {
    
});

$(window).scroll(function() {
    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 120) {
        $(".hamburger").addClass("active");
    }
    else {
        $(".hamburger").removeClass("active");
    }
    
});