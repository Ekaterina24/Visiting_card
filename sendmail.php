<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // От кого письмо
    $mail->setFrom('katrykova2002@yandex.ru', 'Верстка сайтов');
    // Кому отправить
    $mail->addAddress('test111121@yandex.ru');
    // Тема письма
    $mail->Subject = 'Привет!';

    $body = '<h1>Встречайте супер письмо!</h1>';

    if (trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if (trim(!empty($_POST['tel']))) {
        $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
    }
    if (trim(!empty($_POST['email']))) {
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if (trim(!empty($_POST['message']))) {
        $body.='<p><strong>Комментарий:</strong> '.$_POST['message'].'</p>';
    }

    $mail->Body = $body;

    // Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка 2';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>