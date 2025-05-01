window.onload = function(){
    // Initialize Swiper
    var swiper = new Swiper(".slider", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
            init: initSliderNumber('01')
        },
    });

    swiper.on('transitionEnd', function() {
        let numberElement = document.querySelector('.slider-number');
        numberElement.innerHTML = `0${swiper.realIndex + 1}`;
    });

    function initSliderNumber(value) {
        let numberElement = document.querySelector('.slider-number');
        numberElement.innerHTML = value;
    }
}