// Toggle hamburger menu visibility
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

// Form submission handler (assuming form has ID 'contactForm')
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    // Send form data to the server (example using fetch)
    fetch('/submit-form', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for your submission!');
        contactForm.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    });
});

// Example function to handle the Telegram bot link
function sendMessageToTelegram() {
    const message = "New submission received";
    const chatId = "793874940"; // Use your Telegram chat ID
    const token = "7517099152:AAFrNoJT-BENa922VSLvHIB_gwmtveMXYuQ"; // Use your Telegram bot token
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

    fetch(url)
        .then(response => response.json())
        .then(data => console.log('Message sent to Telegram:', data))
        .catch(error => console.error('Error sending message to Telegram:', error));
}
