<?php
    if (issen($_POST['submit']))
    {
        $name = $_POST['name'];
        $visitor_email = $_POST['email'];
        $message = $_POST['message'];

        $email_from = "cheney.ni@ccs.us";

        $email_subject = "Hello";

        $email_body = "Name: $name.\n" .
            "Email: $visitor_email.\n" .
            "Message: $message.\n";
        
        $email_to = "cheney.ni@ccs.us";

        $headers = "From: $email_from .\r\n";

        $headers .= "Reply-To: $visitor_email .\r\n";

        mail($email_to, $email_subject, $email_body, $headers);

        header("Location: contact.html");
    }
?>
