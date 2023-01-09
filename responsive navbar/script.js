const btn = document.querySelector('.bar');
const menu = document.querySelector('.header_menu');
const icons = document.querySelector('.header_icons');

btn.addEventListener('click', function() {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});