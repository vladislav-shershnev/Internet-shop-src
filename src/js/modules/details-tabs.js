
export default detailsTabs;
$(function detailsTabs() {
   if ($(".details-tabs__top-item").length > 0) {
      // при клике - у всех удаляется класс активности - а на того кого кликнули, он будет добавлен
      $('.details-tabs__top-item').on('click', function (e) {
         // отмена дефолтного поведения( чтобы не обновлялась страница или не было перехода)
         e.preventDefault();
         $('.details-tabs__top-item').removeClass('details-tabs__top-item_active');
         $(this).addClass('details-tabs__top-item_active');

         // в самом контенте классы активности, чтобы находил нужный нам элемент и включал его
         $('.details-tabs__content-item').removeClass('details-tabs__content-item_active');
         // при клике на топ, идет подвязка к id href
         $($(this).attr('href')).addClass('details-tabs__content-item_active');
      })
   }
});


