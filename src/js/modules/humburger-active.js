export default humburgerActive;

// Получить текущий URL
var currentUrl = window.location.href;

// Получить все ссылки в меню
var menuLinks = document.querySelectorAll('.hamburger-menu__list a');

// Пройтись по каждой ссылке и проверить, совпадает ли их URL с текущим URL
menuLinks.forEach(function(link) {
if (link.href === currentUrl) {
link.classList.add('hamburger-menu__link_active'); // Добавить класс "active" к ссылке
}
});