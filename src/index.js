import './index.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';


//use modules

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
    <source src="video/video.webm" type="video/webm">
    <source src="video/video.mp4" type="video/mp4">
`;
