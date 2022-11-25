import Inputmask from "inputmask";

(() => {
	const resume = document.querySelector('.resume');
	
	if(resume) {
		let checkbox = resume.querySelector('.resume__agree [type="checkbox"]');

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