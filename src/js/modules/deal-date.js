export default dealDate;

function updateClock() {
  if (document.getElementById('deal__clock')) {
    var countDownDate = new Date(document.getElementById("deal__clock").dataset.time).getTime();
  
  // Получение текущей даты и времени
  var now = new Date().getTime();

  // Разница между текущей датой и временем и датой и временем обратного отсчета
  var distance = countDownDate - now;

  // Расчет дней, часов, минут и секунд
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));      
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Обновление значения элементов с обратным отсчетом на странице
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  // Обновление обратного отсчета каждую секунду
  setTimeout(updateClock, 1000);
    }
 
}

// Запуск функции обратного отсчета
updateClock();