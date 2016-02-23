<?php 
require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer();
//indico a la clase que use SMTP
$mail->IsSMTP();
//permite modo debug para ver mensajes de las cosas que van ocurriendo
$mail->SMTPDebug = 2;
$mail->SMPTAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Host = "smtp.gmail.com";
$mail->Mailer = "smtp";
$mail->Port = 587;


//Whether to use SMTP authe
//indico un usuario / clave de un usuario de gmail
$mail->Username = "jfuertesl2@gmail.com";
$mail->Password = "575JAIR.,M";
$mail->SetFrom('jfuertesl2@gmail.com', 'Nombre completo');
$mail->AddReplyTo("jfuertesl2@gmail.com","Nombre completo");
$mail->Subject = "Envío de email usando SMTP de Gmaisdfasdl";
$mail->MsgHTML("Hola que tal, esto es el cuerpo del mensafsdfsdfje!");
//indico destinatario
$address = "jfuertesl2@gmail.com";
$mail->AddAddress($address, "Nombre completo");
if(!$mail->Send()) {
echo "Error al enviar: " . $mail­>ErrorInfo;
} else {
echo "Mensaje enviado!";
}
?>