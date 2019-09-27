let btn = document.getElementById('menuBtn');
let menu = document.querySelector('.menu');

function toggleMenu() {
	menu.classList.toggle('menu-visible');
	btn.classList.toggle('menu__button-open');
	btn.classList.toggle('menu__button-close');
}

btn.addEventListener('click', toggleMenu);
