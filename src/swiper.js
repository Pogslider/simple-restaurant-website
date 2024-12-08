import Swiper from 'swiper';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination,Autoplay],
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 10000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

export default swiper;