<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include the PHPMailer library (you need to download and set it up)
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

try {
    // Create a new PHPMailer instance
    $mail = new PHPMailer;

    // Enable verbose debugging (optional)
    $mail->SMTPDebug = 2;

    // Set SMTP settings (replace with your SMTP server details)
    $mail->isSMTP();
    $mail->Host = 'your-smtp-server.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your-smtp-username';
    $mail->Password = 'your-smtp-password';
    $mail->SMTPSecure = 'tls'; // Use 'tls' or 'ssl'
    $mail->Port = 587; // Use the appropriate SMTP port

    // Set email sender and recipient
    $mail->setFrom('your-email@example.com', 'Your Name');
    $mail->addAddress('recipient-email@example.com', 'Recipient Name');

    // Email subject and content (HTML)
    $mail->Subject = 'Movie Ticket Confirmation';
    $mail->isHTML(true);
    $mail->Body = file_get_contents('confirmation_email.html'); // Load the HTML template

    // Send the email
    if ($mail->send()) {
        echo 'Email sent successfully';
    } else {
        echo 'Email could not be sent. Error: ' . $mail->ErrorInfo;
    }
} catch (Exception $e) {
    echo 'Email could not be sent. Error: ' . $e->getMessage();
}
?>
