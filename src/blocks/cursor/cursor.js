import gsap from "gsap";

(() => {

	const ball = document.querySelector('.cursor');

	if (ball) {

		const elements = document.querySelectorAll('.task__content, .header__logo, .header__social, .header__phone, .header__button, .sticky-w__button, .team__item-toggle, .footer__ask-button, .footer__social, .footer__phone, .footer__mail, .footer__call, .footer__politics, .footer__up, .footer__agency');
		
		const addShowed = () => ball.classList.add('cursor_showed');
		const removeShowed = () => ball.classList.remove('cursor_showed');
		
		const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2};
		const mouse = { x: pos.x, y: pos.y };
		const speed = 0.2;
		
		const xSet = gsap.quickSetter(ball, "x", "px");
		const ySet = gsap.quickSetter(ball, "y", "px");

		const mouseMove = (e) => { 
			mouse.x = e.x; 
			mouse.y = e.y; 
		}

		gsap.matchMedia().add("(min-width: 780px)", () => {
			gsap.set(ball, {
				xPercent: -50,
				yPercent: -50
			});
	
			window.addEventListener("mousemove", mouseMove);
			
			gsap.ticker.add(() => {
				// adjust speed for higher refresh monitors
				const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
				
				pos.x += (mouse.x - pos.x) * dt;
				pos.y += (mouse.y - pos.y) * dt;
				xSet(pos.x);
				ySet(pos.y);
			});
			
			elements.forEach(item => {
				item.addEventListener('mouseenter', removeShowed);
				item.addEventListener('mouseleave', addShowed);
			});
			
			
			return () => {
				window.removeEventListener("mousemove", mouseMove);
				
				elements.forEach(item => {
					item.removeEventListener('mouseenter', removeShowed);
					item.removeEventListener('mouseleave', addShowed);
				});
			};
		});
	}
})();