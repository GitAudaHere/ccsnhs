<?php
    if (isset($_POST['submit']))
    {
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $email_subject = "Hello";

        $email_body = "Name: $name.\n" .
            "Email: $mailFrom.\n" .
            "Message: $message.\n";
        
        $mailTo = "contactus@ccsnhs.org";

        $headers = "From: $email_from .\n\n";

        mail($mailTo, $email_subject, $email_body, $headers);

        header("Location: contact.php?mailsend");
    }
?>
