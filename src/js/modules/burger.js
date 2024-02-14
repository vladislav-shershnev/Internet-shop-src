export default burger;




// чистый JS меню бургер
// // константа, задаем имя классам
const hamburger = document.querySelector('.humburger');
const menu = document.querySelector('.hamburger-menu');
const closeElem = document.querySelector('.hamburger-menu__close');
const overlay = document.querySelector('.hamburger-menu__overlay');

if (document.getElementsByClassName("humburger").length > 0) {
 // отслеживание кликов по гамбургеру, после клика добавляем класс active
 hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  hamburger.classList.add('active'); // Добавляем класс active к гамбургеру
});

// при нажатии на крестик убирается класс активности
closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active'); // Убираем класс active у гамбургера
});

// при клике на оверлей также закроется
overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active'); // Убираем класс active у гамбургера
});
  }
  
