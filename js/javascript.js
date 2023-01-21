$(document).ready(function() {

    function openSidenav() {
        $(".nav-links").addClass('enable-sidenav');
        $(".overlay").addClass('enable-overlay');
    }

    function closeSidenav() {
        $(".nav-links").removeClass('enable-sidenav');
        $(".overlay").removeClass('enable-overlay');
    }

    $("#menuBar").on('click', function() {
        openSidenav();
    });

    $(".overlay, #closeNav").on('click', function() {
        closeSidenav();
    });

})