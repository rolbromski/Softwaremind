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
    
});

$(window).on('load', function() {
    
});

$(window).on('resize', function() {
    
});

$(window).scroll(function() {
    
});