// booking.js (Client-side JavaScript)

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('booking-form');
    const confirmBookingButton = document.getElementById('confirm-booking');

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Existing form submission logic...

        // Now, when the "Confirm Booking" button is clicked, send the confirmation email.
        sendConfirmationEmail();
    });

    function sendConfirmationEmail() {
        // Construct the email content (HTML) and send it via AJAX to a server-side script.
        const emailContent = `
            <html>
                
            </html>
        `;

        // Send the email content to the server-side script for sending emails
        // using an AJAX request (you will need a server-side script to handle this).
        // Replace 'send_email.php' with the actual server-side script URL.
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'send_email.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Email sent successfully
                    alert('Booking confirmed! Email sent.');
                } else {
                    // Email sending failed
                    alert('Booking confirmed, but email could not be sent.');
                }
            }
        };
        xhr.send('emailContent=' + encodeURIComponent(emailContent));
    }
});
