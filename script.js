document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const contactForm = document.getElementById('Laformula');

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
    contactForm.addEventListener('enviado', function(event) {
        event.preventDefault();
        alert('¡Gracias por tu mensaje! Te responderemos pronto.');
        contactForm.reset();
    });
});