document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Collect form data
        const formData = new FormData(this);

        // Create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.action, true);
        xhr.setRequestHeader('Accept', 'application/json');

        // Handle the response from the server
        xhr.onload = function() {
            const formMessage = document.getElementById('formMessage');
            if (xhr.status === 200) {
                formMessage.textContent = 'Thank you! Your message has been sent.';
                formMessage.style.color = 'green';
                document.getElementById('contactForm').reset(); // Reset the form
            } else {
                formMessage.textContent = 'Oops! Something went wrong and we couldn\'t send your message.';
                formMessage.style.color = 'red';
            }
        };

        // Send the form data
        xhr.send(formData);
    });
});
