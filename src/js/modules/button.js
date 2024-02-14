
function backlight(){ 
// подсветка кнопок, активный элемент
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
});

};

export default backlight;