$(document).ready(function() {

    $('.landing-banner-list').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $(".destination-select").select2({
        placeholder: "Destination",
        allowClear: true
    });
    $(".tour-select").select2({
        placeholder: "Toue Name",
        allowClear: true
    });
    $(".adults-select").select2({
        placeholder: "0",
        allowClear: true
    });
    $(".city-select").select2({
        placeholder: "City Name",
        allowClear: true
    });
    $(".hotel-select").select2({
        placeholder: "Hotel Name",
        allowClear: true
    });
    $(".activity-select").select2({
        placeholder: "Activity Name",
        allowClear: true
    });
    $(".pickup-select").select2({
        placeholder: "Select Pickup Location",
        allowClear: true
    });
    $(".drop-select").select2({
        placeholder: "Select Drop-Off Location",
        allowClear: true
    });
    $(".landing-select-number").select2({
        minimumResultsForSearch: Infinity
    });
    jQuery('#datetimepicker, #datetimepicker1').datetimepicker({
        i18n: {
            de: {
                months: [
                    'Januar', 'Februar', 'März', 'April',
                    'Mai', 'June', 'Juli', 'August',
                    'September', 'Oktober', 'November', 'Dezember',
                ],
                dayOfWeek: [
                    "So.", "Mo", "Di", "Mi",
                    "Do", "Fr", "Sa.",
                ]
            }
        },
        timepicker: false,
        format: 'd.m.Y'
    });
    jQuery('#datetimepickerhours, #datetimepickerhours1').datetimepicker();

})