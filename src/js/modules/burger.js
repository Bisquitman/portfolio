import '../../libs/jquery-3.6.1.min.js';

const burger = () => {
  $('.header__contacts-burger').click(function() {
    $('.header__contacts').slideToggle();
  });
};

export default burger;
