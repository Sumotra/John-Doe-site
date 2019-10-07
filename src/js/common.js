// Menu button
(function() {

	let btn = document.getElementById('menuBtn');
	let menu = document.querySelector('.menu');

	function toggleMenu() {
		menu.classList.toggle('menu-visible');
		btn.classList.toggle('menu__button-open');
		btn.classList.toggle('menu__button-close');
	}

	btn.addEventListener('click', toggleMenu);

})();

// To-top button
(function() {

  let toTopBtn = document.querySelector('.back-to-top');

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let pageHeight = document.documentElement.clientHeight;

    if (scrolled > pageHeight) {
      toTopBtn.classList.add('back-to-top-show');
    }
    if (scrolled < pageHeight) {
      toTopBtn.classList.remove('back-to-top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  window.addEventListener('scroll', trackScroll);
  toTopBtn.addEventListener('click', backToTop);
})();