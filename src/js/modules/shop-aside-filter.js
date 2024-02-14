

if (document.getElementsByClassName("shop-filters__btn").length > 0) {
    // Получаем кнопку и элементы, к которым необходимо добавить/убрать классы
const shopFiltersBtn = document.querySelector('.shop-filters__btn');
const shopInner = document.querySelector('.shop__inner');
const shopFiltersOverlay = document.querySelector('.shop-filters__overlay');
const shopFiltersBtnClose = document.querySelector('.shop-filters__btn-close');

// Функция, которая будет выполняться при клике на кнопку
function toggleClasses() {
 
// Проверяем, есть ли у элементов классы, и в зависимости от этого добавляем/убираем классы
if (shopInner.classList.contains('shop__inner_active')) {
shopInner.classList.remove('shop__inner_active');
shopFiltersOverlay.classList.remove('shop-filters__overlay_active');
shopFiltersBtnClose.classList.remove('shop-filters__btn-close_active');
} else {
shopInner.classList.add('shop__inner_active');
shopFiltersOverlay.classList.add('shop-filters__overlay_active');
shopFiltersBtnClose.classList.add('shop-filters__btn-close_active');
}
}

// Назначаем обработчик клика на кнопку
shopFiltersBtn.addEventListener('click', toggleClasses);

shopFiltersOverlay.addEventListener('click', toggleClasses);
shopFiltersBtnClose.addEventListener('click', toggleClasses);
}
