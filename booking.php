<?php
// process_booking.php (Server-side PHP)

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $selectedMovie = $_POST['movie'];
    $selectedCinema = $_POST['cinema'];
    $selectedDate = $_POST['date'];
    $selectedTime = $_POST['time'];
    $numberOfTickets = $_POST['tickets'];

    // TODO: Perform server-side validation and booking processing here.
    // You would typically interact with a database to store booking details.

    // For this example, we'll send a simple confirmation response.
    $response = [
        'message' => 'Booking successful!',
        'movie' => $selectedMovie,
        'cinema' => $selectedCinema,
        'date' => $selectedDate,
        'time' => $selectedTime,
        'tickets' => $numberOfTickets,
    ];

    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Handle invalid requests or redirect to an error page.
    header('HTTP/1.1 400 Bad Request');
    echo 'Invalid request.';
}
?>
