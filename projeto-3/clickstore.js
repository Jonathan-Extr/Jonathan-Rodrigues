// Menu hambúrguer toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Scroll Reveal com delay suave
const reveals = document.querySelectorAll('.reveal');

function animateOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    reveals.forEach((el, index) => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerPoint) {
            setTimeout(() => {
                el.classList.add('active');
            }, index * 100); // delay entre elementos
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);