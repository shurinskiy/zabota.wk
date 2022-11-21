import { scrollToTop } from "../../js/libs/scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(() => {

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

	scrollToTop(document.querySelector('.footer__up'));

})();