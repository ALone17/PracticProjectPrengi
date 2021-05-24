$(document).ready(function(){
    $('.catalog__carusel').slick({
        infinite: true,
        speed:1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/carusel/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/carusel/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main__nav_mod'),
    menuItem = document.querySelectorAll('.main__nav_mod a'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('main__nav_mod_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('main__nav_mod_active');
        })
    })
})