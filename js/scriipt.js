const nav = document.querySelector('.navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

function updateNavbar() {
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavbar);
window.addEventListener('load', () => {
    updateNavbar();
    if (nav) {
        nav.classList.add('nav-ready');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle) {
            menuToggle.checked = false;
        }
    });
});
