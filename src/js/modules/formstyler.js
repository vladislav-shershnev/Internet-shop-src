export default formstyler;
$(function() {
  // Проверяем наличие определенного элемента на странице
  if ($('.select-style, .details-item__num').length > 0) {
     // Если элементы присутствуют на странице, то выполняем код
     $('.select-style, .details-item__num').styler();
  }
});
