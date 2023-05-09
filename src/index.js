import './index.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';


//use modules

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
        // bulletClass: 'about__bullet',
        // bulletActiveClass: 'about__bullet-active'
    }
})

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
    <source src="video/video.webm" type="video/webm">
    <source src="video/video.mp4" type="video/mp4">
`;
