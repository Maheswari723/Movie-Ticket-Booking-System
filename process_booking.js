// booking.js (Client-side JavaScript)

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve user inputs
        const selectedMovie = document.getElementById('movie').value;
        const selectedCinema = document.getElementById('cinema').value;
        const selectedDate = document.getElementById('date').value;
        const selectedTime = document.getElementById('time').value;
        const numberOfTickets = document.getElementById('tickets').value;

        // TODO: Send this data to your server for processing and booking confirmation.
        // You would typically use an AJAX request to send data to the server.

        // For this example, we'll just log the selected data.
        console.log('Selected Movie:', selectedMovie);
        console.log('Selected Cinema:', selectedCinema);
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);
        console.log('Number of Tickets:', numberOfTickets);

        // You can add further processing or redirection logic here.
    });
});
