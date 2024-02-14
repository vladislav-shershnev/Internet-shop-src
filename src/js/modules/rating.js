export default rating;
$(function rating(){
  // проверка наличия элементов с классом product__star
  if ($(".product__star").length > 0) {
  // инициализация rateYo
  $(".product__star").rateYo({
  starWidth: "17px",
  normalFill: "#ccccce",
  readOnly: true
  });
  }
  });


 
    