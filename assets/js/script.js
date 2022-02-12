/**
 * Página personal
 * Uso de JQuery
 * 
 * @author Javier Fernández Rubio 
 */



/**
 * Quote Loop
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
    }
});

// Mobile Navigation
$(".mobile-toggle").click(function () {
    if ($(".main_nav").hasClass("open-nav")) {
        $(".main_nav").removeClass("open-nav");
    } else {
        $(".main_nav").addClass("open-nav");
    }
});

$(".main_nav li a").click(function () {
    if ($(".main_nav").hasClass("open-nav")) {
        $(".navigation").removeClass("open-nav");
        $(".main_nav").removeClass("open-nav");
    }
});

$("#menu-icon").click(function () {
    this.style.trigger = function (trigger) {
        return trigger === 'hover' ? 'hover' : 'click';
    }
});

/**
 * Smooth Scrolling
 */
jQuery(document).ready(function ($) {
    $(".smoothscroll").on("click", function (e) {
        e.preventDefault();

        var target = this.hash,
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
});

TweenMax.staggerFrom(".heading", 0.8, {
    opacity: 0,
    y: 20,
    delay: 0.2
}, 0.4);

/**
 *Modo oscuro
 */
jQuery(document).ready(function ($) {
    $(".theme-btn").click(function () {
        localStorage.setItem("darkMode", "dark-theme");
        $("body").toggleClass(localStorage.getItem("darkMode"));
        $(".theme-btn").text(function (i, text) {
            return text === "Modo Oscuro" ? "Modo Claro" : "Modo Oscuro";
        });

        if ($(".theme-btn").text() === "Modo Claro") {
            localStorage.setItem("darkMode", "light-theme");
            $(".icon-light").css("display", "none");
            $(".icon-dark").css("display", "block");
        } else {
            localStorage.setItem("darkMode", "dark-theme");
            $(".icon-light").css("display", "block");
            $(".icon-dark").css("display", "none");
        }

    });
});



// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");
    event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);