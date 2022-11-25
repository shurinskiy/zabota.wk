import scrollLock from 'scroll-lock';
import Inputmask from "inputmask";
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

(() => {
	const resume = document.querySelector('.resume');
	
	if(resume) {
		let checkbox = resume.querySelector('.resume__agree [type="checkbox"]');
		
		addUnderlay('modal');
		makeModalFrame({ el: '.resume__field', scrollLock }, function(el) {
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

		Inputmask({ 
			"mask": "+7 (999) 999-99-99", 
			showMaskOnHover: false 
		}).mask(resume.querySelectorAll('.resume__input[type="tel"]'));

		if (checkbox) {
			checkbox.addEventListener('change', function() {
				resume.querySelector('[type="submit"]').toggleAttribute("disabled");
			});
		}
	
		resume.querySelectorAll('textarea.resume__input').forEach((area) => {
			resume.addEventListener('input', () => area.style.height = Math.max(area.scrollHeight, area.offsetHeight) + 'px');
		});
	}

})();