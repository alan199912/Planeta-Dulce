(function ($) {

    // Scrolling
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // cierra el menu responsivo cuando el link es clickeado
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // activa el scrollspy, activa una clase para el navbar item
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };

    // "colapsa" cuando la pagina no esta en top
    navbarCollapse();
    // "Colapsa" el nav cuando la pagina se desplaza
    $(window).scroll(navbarCollapse);
})(jQuery);



// modificacion del año

var year = (new Date).getFullYear();

$(document).ready( () => {
    $("#year").text("Copyright © Planeta Dulce - " + year);
});