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
		
			return () => {
				gsap.set(items, { clearProps: "all" });
			};
		});
	}

	if (title) {
		gsap.matchMedia().add("(min-width: 780px)", () => {
			gsap.from(title, {
				duration: 1.2,
				opacity: 0,
				y: 100,
			});
		});
	}

	if (appeal) {
		gsap.matchMedia().add("(min-width: 780px)", () => {
			gsap.from(appeal, {
				duration: 1.2,
				opacity: 0,
				y: 100,
			});
		});
	}
	
})();