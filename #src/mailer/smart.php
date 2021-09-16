<?php 
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);

{
require_once('PHPMailerAutoload.php');
$mail = new PHPMailer();
$mail->CharSet = 'utf-8';
$name = $_POST['name']; //получаем из  инпута в html
$phone = $_POST['phone']; //получаем из  инпута в html
$email = $_POST['email']; //получаем из  инпута в html
$myEmail = 'classes@edunano.ru'; //email владельца сайта
        //$mail->SMTPDebug = 3;                               // Enable verbose debug output


//$mail->isSMTP();                                      // Set mailer to use SMTP
//$mail->Host = 'smtp.mail.ru';                                 // Specify main and backup SMTP servers
//$mail->SMTPAuth = true;                               // Enable SMTP authentication
//$mail->Username = '****'; // Ваш логин от почты с которой будут отправляться письма
//$mail->Password = '****'; // Ваш пароль от почты с которой будут отправляться письма
//$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
//$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
//$mail->setFrom('*****','Имя сайта'); // от кого будет уходить письмо?
//$mail->isHTML(true);                                  // Set email format to HTML

$mail->From = 'stemford@edunano.ru';
$mail->FromName = 'Stemford';
//$mail->addAddress('name@domain.com', 'User');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
$mail->isHTML(true);   


$getters = ['a', 'b'];

foreach ($getters as $getter) {
	set_time_limit(60);
	$mail->clearAttachments();
	$mail->clearAllRecipients();

   if ($getter == 'a') {
      $mail->AddAddress($myEmail);
		$mail->Subject = "Сообщение от пользователя {$name}";
      $mail->Body = "
		<b>Пользователь:</b> {$name}<br>
		<b>Элетронная почта:</b> {$email}<br>
		<b>Номер телефона пользователя:</b> {$phone}<br>";
      $mail->send();
   }
   if ($getter == 'b') {
      $mail->AddAddress($email);
		$mail->Subject = "Сообщение с сайта Stemford";
      $mail->Body = "
		Уважаемый(ая) <b>{$name}</b>!<br>
		Спасибо, за Вашу заявку<br>
		В ближайшее время с Вами свяжется наш менеджер!
		";
		$mail->send();
   }
}
}
?>