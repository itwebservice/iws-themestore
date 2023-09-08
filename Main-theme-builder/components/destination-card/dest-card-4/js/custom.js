$(document).ready(function() {
    $('.c-destination-slide-list').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
        dots: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            },
        ]
    });
})