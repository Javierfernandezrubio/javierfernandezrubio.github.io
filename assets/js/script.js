/**
 * Página personal
 * Uso de JQuery
 * 
 * @author Javier Fernández Rubio 
 */
$(document).ready(function () {

    // Control sobre localStorage
    if (!localStorage.getItem("darkMode")) {
        localStorage.setItem("darkMode", "light-theme");
        $(".theme-btn").text("Modo Oscuro");
    } else {
        if (localStorage.getItem("darkMode") === "dark-theme") {
            $("body").removeClass("light-theme");
            $("body").addClass("dark-theme");

            $(".icon-light").css("display", "none");
            $(".icon-dark").css("display", "block");

            $(".theme-btn").text("Modo Claro");
        }
    }

    /**
     * Modo oscuro
     */
    $(".theme-btn").click(function () {
        if ($(".theme-btn").text() === "Modo Oscuro") {
            $(".icon-light").css("display", "none");
            $(".icon-dark").css("display", "block");

            $("body").removeClass(localStorage.getItem("darkMode"))
            localStorage.setItem("darkMode", "dark-theme");
            $("body").addClass(localStorage.getItem("darkMode"))

            $(".theme-btn").text("Modo Claro");
        } else {
            $(".icon-light").css("display", "block");
            $(".icon-dark").css("display", "none");

            $("body").removeClass(localStorage.getItem("darkMode"))
            localStorage.setItem("darkMode", "light-theme");
            $("body").addClass(localStorage.getItem("darkMode"));

            $(".theme-btn").text("Modo Oscuro");

        }
    });

    /**
     * Animación de la zona de citas
     */
    function fade($ele) {
        $ele
            .fadeIn(1000)
            .delay(3000)
            .fadeOut(1000, function () {
                var $next = $(this).next(".quote");
                fade($next.length > 0 ? $next : $(this).parent().children().first());
            });
    }
    fade($(".quoteLoop > .quote").first());

    /**
     * Navegación
     */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $(".main_nav").addClass("sticky");
        } else {
            $(".main_nav").removeClass("sticky");
            $(".menuppal").removeClass("is_active");
            $(".hamburger").removeClass("is-active");
        }

        // Boton Subir
        if ($(window).scrollTop() > 600) {
            $("#btn-Subir").css("display", "flex");
            $("#btn-Subir").css("opacity", "1");
        } else {
            $("#btn-Subir").css("opacity", "0");
            $("#btn-Subir").css("display", "none");
        }

        // Control de section
        let sections = [$("#nav1"), $("#nav2"), $("#nav3"), $("#nav4")];
        $("section").each(function () {
            if (($(window).scrollTop() + 300 > $("#about").offset().top - $(".main_nav").height()) && $(window).scrollTop() < ($("#skills").offset().top) - $(".main_nav").height()) {
                sections.forEach(function (element) {
                    element.removeClass("section-nav");
                });
                $("#nav1").toggleClass("section-nav");
            } else if (($(window).scrollTop() > $("#skills").offset().top - $(".main_nav").height()) && $(window).scrollTop() < ($("#portfolio").offset().top) - $(".main_nav").height()) {
                sections.forEach(function (element) {
                    element.removeClass("section-nav");
                });
                $("#nav2").toggleClass("section-nav");
            } else if (($(window).scrollTop() > $("#portfolio").offset().top - $(".main_nav").height()) && $(window).scrollTop() < ($("#contacto").offset().top) - $(".main_nav").height()) {
                sections.forEach(function (element) {
                    element.removeClass("section-nav");
                });
                $("#nav3").toggleClass("section-nav");
            } else if (($(window).scrollTop() > $("#contacto").offset().top - $(".main_nav").height())) {
                sections.forEach(function (element) {
                    element.removeClass("section-nav");
                });
                $("#nav4").toggleClass("section-nav");
            } else {
                $("main_nav a").removeClass("section-nav");
            }
        });
    });


    /**
     * Scroll suave
     */
    $(".smoothscroll").on("click", function (e) {
        e.preventDefault();

        let target = this.hash,
            $target = $(target);

        $("html, body")
            .stop()
            .animate({
                    scrollTop: $target.offset().top
                },
                800,
                "swing",
                function () {
                    window.location.hash = target;
                }
            );
    });


    /**
     * Efecto de los titulos principales
     */
    TweenMax.staggerFrom(".heading", 1, {
        opacity: 0,
        y: 20,
        delay: 0.5
    }, 0.5);


    /**
     * Menu movil
     */
    function toggleMenu() {
        $(".hamburger").click(
            function () {
                $(".menuppal").toggleClass("is_active");
                $(".hamburger").toggleClass("is-active");
            }
        );
    }
    toggleMenu();


    /**
     * Cards del portfolio
     * 
     */
    let zindex = 10;

    $("div.card").hover(function (e) {
        //e.preventDefault();

        let isShowing = false;

        if ($(this).hasClass("show")) {
            isShowing = true
        }

        if ($("div.cards").hasClass("showing")) {
            $("div.card.show")
                .removeClass("show");
            if (isShowing) {
                $("div.cards")
                    .removeClass("showing");
            } else {
                $(this)
                    .css({
                        zIndex: zindex
                    })
                    .addClass("show");
            }
            zindex++;
        } else {
            $("div.cards")
                .addClass("showing");
            $(this)
                .css({
                    zIndex: zindex
                })
                .addClass("show");
            zindex++;
        }

    });

});