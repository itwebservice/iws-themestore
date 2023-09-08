$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').toggleClass('active');
    })

    $('.navbar-toggler').on('click', function() {
        $('body').toggleClass('menu-open');
    });

    $('.header-menu-link').click(function() {
        $('.header-menu-dropdown').toggleClass('show');
    });
    $('.dropdown-item').click(function() {
        $('.header-megamenu-list').toggleClass('show');
    })
    $('.header-submenu-tour').click(function() {
        $('.header-ss-menu-tour').toggleClass('show');
    })

})