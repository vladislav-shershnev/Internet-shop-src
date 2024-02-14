
export default filterShop;
$(function filterShop(){

  if ($(".shop-content__filter-btn").length > 0) {
  // при клике меняется класс активности - при клике - у всех удаляется класс активности - а на того кого кликнули, он будет добавлен
  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn_active');
    $(this).addClass('shop-content__filter-btn_active');
  });
  

// фильтр, сортировка итемов: при клике на кнопку - у итема добавляется класс  - если нажать на button-grid тогда ремув класс
$('.button-list').on('click', function(){
  $('.product-item').addClass('product-item_list');
});

  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item_list');
  });
  }
});
