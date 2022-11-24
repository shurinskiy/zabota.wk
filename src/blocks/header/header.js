import Inputmask from "inputmask";
import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

(() => {
	const header = document.querySelector('.header');
	
	if (header) {
		window.addEventListener('scroll', () => {
			let offset = window.scrollY || window.pageYOffset;
			header.classList[(offset > header.offsetHeight / 4) ? 'add' : 'remove']('header_filled');
		});
	}

	addUnderlay('modal');
	makeModalFrame({ el: '.header__button', scrollLock }, function() {
		Inputmask({ 
			"mask": "+7 (999) 999-99-99", 
			showMaskOnHover: false 
		}).mask(this.querySelectorAll('input[type="tel"]'));

		this.querySelector('.resume__agree [type="checkbox"]').addEventListener('change', () => {
			this.querySelector('[type="submit"]').toggleAttribute("disabled");
		});

		this.querySelectorAll('textarea.resume__input').forEach((area) => {
			area.addEventListener('input', () => area.style.height = Math.max(area.scrollHeight, area.offsetHeight) + 'px');
		});
	});
	
})();