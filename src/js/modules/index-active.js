export default indexActive;

// Получить текущий URL
var currentUrl = window.location.href;

// Получить все ссылки в меню
var menuLinks = document.querySelectorAll('.menu a');

// Пройтись по каждой ссылке и проверить, совпадает ли их URL с текущим URL
menuLinks.forEach(function(link) {
if (link.href === currentUrl) {
link.classList.add('menu__list-link_active'); // Добавить класс "active" к ссылке
}
});