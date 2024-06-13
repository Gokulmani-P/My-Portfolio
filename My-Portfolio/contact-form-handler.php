<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phoneNumber = $_POST['phoneNumber'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Example: Sending an email notification (replace with your actual email sending code)
    $to = "your-email@example.com";
    $subject = "New Message from Contact Form";
    $email_body = "First Name: $firstName\n" .
                  "Last Name: $lastName\n" .
                  "Phone Number: $phoneNumber\n" .
                  "Email: $email\n\n" .
                  "Message:\n$message";
    
    // Send email
    mail($to, $subject, $email_body);
    
    // Optionally, redirect the user to a thank you page or show a success message
    header("Location: thank-you.html");
    exit();
}
?>
