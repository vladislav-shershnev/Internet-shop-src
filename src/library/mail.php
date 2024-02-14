
<?php
// Проверяем, что форма была отправлена
if(isset($_POST['email'])) {

  // Получаем данные из формы
  $email = $_POST['email'];

  // Установите свой email-адрес вместо "your_email_address"
  $to = "vladislav.shershnevv@gmail.com";

  // Установите тему письма
  $subject = "Новая подписка";

  // Установите текст письма
  $message = "Email: " . $email;

  // Определите заголовки письма
  $headers = "From: " . $email . "\r\n" .
             "Reply-To: " . $email . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  // Отправляем письмо
  mail($to, $subject, $message, $headers);

  // Перенаправляем пользователя обратно на страницу
  header("Location: index.html");
}
?>