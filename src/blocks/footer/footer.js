import gsap from "gsap";
import Inputmask from "inputmask";
import scrollLock from 'scroll-lock';
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollToTop } from "../../js/libs/scroll";
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

gsap.registerPlugin(ScrollTrigger);

(() => {

	const right = document.getElementById('arr-right');
	const left = document.getElementById('arr-left');

	if (right) {
		gsap.to("#arr-right", {
			scrollTrigger: {
				trigger: "#arr-right",
				start: "-750px 0", // when the top of the trigger hits the top of the viewport
				end: "+=200",
				scrub: 1,
				markers: false,
			},
			x: 0,
		});
	}
	
	if (left) {
		gsap.to("#arr-left", {
			scrollTrigger: {
				trigger: "#arr-left",
				start: "-750px 0",
				end: "+=200",
				scrub: 1,
				markers: false,
			},
			x: 0,
		});
	}

	scrollToTop(document.querySelector('.footer__up'));

	addUnderlay('modal');
	makeModalFrame({ el: '.footer__call', scrollLock }, function() {
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