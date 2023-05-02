require(['jquery', 'jquery/ui', 'slick'], function($) {
    $(document).ready(function() {
        $(".regular").slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        });
    });
});
