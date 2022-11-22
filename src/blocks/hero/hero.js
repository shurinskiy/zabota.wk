import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(() => {

	const items = document.querySelectorAll('.hero__item');
	const title = document.querySelector('.hero__title');
	const appeal = document.querySelector('.hero__appeal');

	
	if (items.length) {
		const breakpoint = window.matchMedia('(min-width:780px)');
		let tween;
		
		const enableMove = () => {
			tween = gsap.to(items, {
				scrollTrigger: {
					trigger: ".hero__item",
					start: "-500px 0", // when the top of the trigger hits the top of the viewport
					end: "+=500",
					scrub: 1,
					markers: false,
				},
				y: -100,
				opacity: 1
			});
		}
	
		const breakpointChecker = () => {
			if (breakpoint.matches === true) {
				return enableMove();
			} else if (breakpoint.matches === false) {
				if (tween !== undefined ) {
					tween.kill();
					gsap.set(items, { clearProps: "all" });
				}
				return;
			}
		}
	
		breakpoint.addEventListener('change', breakpointChecker);
		breakpointChecker();
	}

	if (title) {
		gsap.from(title, {
			duration: 1.2,
			opacity: 0,
			y: 100,
		});
	}

	if (appeal) {
		gsap.from(appeal, {
			duration: 1.2,
			opacity: 0,
			y: 100,
		});
	}

})();
