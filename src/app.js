const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { rootMargin: '0px 0px -50% 0px' }); // Ajuste del margen inferior

document.querySelectorAll('.scroller').forEach((el) => observer.observe(el));

/* const tooltipTrigger = document.querySelector('[data-tooltip-target="tooltip-down-EC0217"]');
const tooltip = document.querySelector('#tooltip-down-EC0217');

new Popper(tooltipTrigger, tooltip, {
    placement: 'bottom', // Puedes cambiar la posición aquí
}); */

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("bg-naviblue");
    } else {
        navbar.classList.remove("bg-naviblue");
    }
});
