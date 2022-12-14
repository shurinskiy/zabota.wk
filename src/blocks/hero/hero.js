import Cookies from 'js-cookie'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(() => {

	const items = document.querySelectorAll('.hero__item');
	const title = document.querySelector('.hero__title');
	const appeal = document.querySelector('.hero__appeal');

	if (items.length) {
		gsap.matchMedia().add("(min-width: 780px)", () => {
			gsap.to(items, {
				scrollTrigger: {
					trigger: ".hero__item",
					start: "-500px 0",
					end: "+=500",
					scrub: 1,
					markers: false,
				},
				y: -100,
				opacity: 1
			});
		});
	}

	if (title) {
		gsap.matchMedia().add("(min-width: 780px)", () => {
			gsap.from(title, {
				delay: 1.5,
				duration: 1.2,
				opacity: 0,
				y: 100,
			});
		});
	}
	
	if (appeal) {
		gsap.matchMedia().add("(min-width: 780px)", () => {
			gsap.from(appeal, {
				delay: 1.5,
				duration: 1.2,
				opacity: 0,
				y: 100,
			});
		});
	}

	if (Cookies.get('ordered')) {
		document.querySelectorAll('.unordered').forEach(section => section.classList.remove('unordered'));
	}
	
})();