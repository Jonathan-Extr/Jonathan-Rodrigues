const reveals = document.querySelectorAll('.reveal');

function animateOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    reveals.forEach((el, index) => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerPoint) {
            setTimeout(() => {
                el.classList.add('active');
            }, index * 100);
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);