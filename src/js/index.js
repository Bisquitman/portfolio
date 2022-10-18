import '../libs/swiper/swiper-bundle.min.js';
import burger from './modules/burger.js';
import modal from './modules/modal.js';

new Swiper('.swiper', {
  navigation: {
    prevEl: '.portfolio__arrow_left',
    nextEl: '.portfolio__arrow_right',
    disabledClass: 'portfolio__arrow_disabled',
  },
  breakpoints: {
    480: {
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
    768: {
      grid: {
        fill: 'row',
        rows: 2,
      },
      slidesPerView: 2,
    },
  },
});

burger();
modal();
