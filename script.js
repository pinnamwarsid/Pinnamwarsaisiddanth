document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // EmailJS service ID, template ID, and user ID
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_USER_ID')
        .then(function () {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }, function (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again later.');
        });
});