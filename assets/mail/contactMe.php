<?php

    // verificar los campos vacios

    if(empty($_POST['name'])
    empty($_POST['email'])
    empty($_POST['phone'])
    empty($_POST['message'])
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
    {
        echo "No se proporcionaron argumentos!"
        return false;
    }

    $name = strip_tags(htmlspecialchars($_POST['name']));
    $email_addres = strip_tags(htmlspecialchars($_POST['email']));
    $phone = strip_tags(htmlspecialchars($_POST['phone']));
    $message = strip_tags(htmlspecialchars($_POST['message']));

    //  Crear el email y enviar el mensaje
    $to = 'planeta_dulce01@hotmail.com';
    $email_subject = "Contacto del sitio de : $name";
    $email_body = "Ha recibido un nuevo mensaje del formulario de contacto de su sitio web. \n\n"."Aqui estan los detalles:\n\nNombre: $name\n\nEmail: $email_addres\n\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: noreply@planetaDulce.com\n";
    $headers = "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    return true;
?>