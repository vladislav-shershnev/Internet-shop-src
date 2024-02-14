export default inputForm;

const input = document.querySelector(".details-item__num");
//Если элемент с классом "details-item__num" не найден на странице, то остальной код не будет выполнен.
if (input) {

  input.setAttribute("min", "1");
  input.setAttribute("max", "90");
  const minusButton = document.createElement("button");
  const plusButton = document.createElement("button");

  // Добавляем стилизацию из CSS
  minusButton.classList.add("minus-button");
  plusButton.classList.add("plus-button");

  // Добавляем текст в кнопки
  minusButton.innerText = "-";
  plusButton.innerText = "+";

  // Обработчики событий для кнопок
  minusButton.addEventListener("click", () => {
    input.value = parseInt(input.value) - 1;
    if (input.value < 1) {
      input.value = 1;
    }
  });

  plusButton.addEventListener("click", () => {
    input.value = parseInt(input.value) + 1;
    if (input.value > 90) {
      input.value = 90;
    }
  });

  // Вставляем кнопки перед input
  input.parentNode.insertBefore(minusButton, input);
  input.parentNode.insertBefore(plusButton, input.nextSibling);

  // Отключаем обновление страницы при клике на кнопки
  minusButton.addEventListener("click", (e) => {
    e.preventDefault();
  });

  plusButton.addEventListener("click", (e) => {
    e.preventDefault();
  });


}

