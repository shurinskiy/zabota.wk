import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollToTop } from "../../js/libs/scroll";

gsap.registerPlugin(ScrollTrigger);

(() => {

	const right = document.getElementById('arr-right');
	const left = document.getElementById('arr-left');

	if (right) {
		gsap.matchMedia().add("(min-width: 960px)", () => {
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
		});
	}
			
	if (left) {
		gsap.matchMedia().add("(min-width: 960px)", () => {
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
		});
	}

	scrollToTop(document.querySelector('.footer__up'));
})();