import '../../libs/jquery-3.6.1.min.js';

const modal = () => {
  $('.present__order-btn').click(() => {
    $('.page__overlay_modal').fadeIn().css('display', 'flex');
  });

  $('.modal__close').click(() => {
    $('.page__overlay_modal').fadeOut();
  });

  $('.page__overlay').click(() => {
    $('.page__overlay_modal').fadeOut();
  });
};

export default modal;
