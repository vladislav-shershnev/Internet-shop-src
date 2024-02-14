
export default showMoreProducts;
// Проверяем наличие элементов с классом "product-item"
if (document.getElementsByClassName("product__btn").length > 0) {

// Получаем все элементы с классом "product-item"
var productItems = document.getElementsByClassName("product-item");

// Устанавливаем начальное значение для отображения товаров
var visibleItemCount = 6;

// Показываем только visibleItemCount товаров
for (var i = 0; i < productItems.length; i++) {
  if (i < visibleItemCount) {
    productItems[i].style.display = "block";
  } else {
    productItems[i].style.display = "none";
  }
}

// Получаем кнопку LOAD MORE
var loadMoreButton = document.querySelector(".product__btn");

// При нажатии на кнопку LOAD MORE
loadMoreButton.addEventListener("click", function() {
  // Увеличиваем visibleItemCount на 6
  visibleItemCount += 6;

  // Показываем visibleItemCount товаров
  for (var i = 0; i < productItems.length; i++) {
    if (i < visibleItemCount) {
      productItems[i].style.display = "block";
    } else {
      productItems[i].style.display = "none";
    }
  }

  // Проверяем, остались ли еще скрытые товары
  if (visibleItemCount >= productItems.length) {
    loadMoreButton.style.display = "none"; // Если нет, скрываем кнопку LOAD MORE
  }
});
}





