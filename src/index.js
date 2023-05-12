import './index.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';


//use modules
videoBackgroundInit();

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
        // bulletClass: 'about__bullet',
        // bulletActiveClass: 'about__bullet-active'
    }

});

slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
        // bulletClass: 'about__bullet',
        // bulletActiveClass: 'about__bullet-active'
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            pagination: false
        },

        1024: {
            slidesPerView: 'auto',
            spaceBetween: 26,
            pagination: false
        },
        1240: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: false
        }
        }
});

