// JavaScript для работы с гамбургер-меню
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Обработчик для формы
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const messenger = document.getElementById("messenger").value;

    // Здесь добавляется код для отправки заявки в Telegram-бота
    const botUrl = `https://api.telegram.org/bot<7517099152:AAFrNoJT-BENa922VSLvHIB_gwmtveMXYuQ>/sendMessage?chat_id=<793874940>&text=Заявка от: ${name}%0AEmail: ${email}%0AСообщение: ${message}%0AМессенджер: ${messenger}`;
    
    fetch(botUrl)
        .then(response => response.json())
        .then(data => {
            alert("Заявка успешно отправлена!");
            form.reset(); // Очистка формы после отправки
        })
        .catch(error => alert("Ошибка отправки заявки"));

});
