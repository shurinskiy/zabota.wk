import Inputmask from "inputmask";
import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

(() => {
		
	addUnderlay('modal');
	makeModalFrame({ el: '.resume__field, .footer__call, .footer__ask-button, .header__button, .complete__button', scrollLock }, function(el) {
		const id = document.location.pathname.split('/').at(-1).split('.')[0];
		const agree = this.querySelector('.resume__agree [type="checkbox"]');
		const required = this.querySelectorAll('[required]');
		const submit = this.querySelector('[type="submit"]');
		const alert = this.querySelector('.resume__alert');
		const form = this.querySelector('form');
		const rate = el.dataset.rate || '';

		const loader = document.createElement("img");
		loader.src = 'images/loader.svg';

		Inputmask({ 
			"mask": "+7 (999) 999-99-99", 
			showMaskOnHover: false 
		}).mask(this.querySelectorAll('input[type="tel"]'));
		
		this.querySelectorAll('textarea.resume__input').forEach((area) => {
			area.addEventListener('input', () => area.style.height = Math.max(area.scrollHeight, area.offsetHeight) + 'px');
		});
		
		if (submit && agree && alert) {
			
			submit.addEventListener('click', (e) => {
				e.preventDefault();
				
				if ([...required].every(field => field.value)) {
					alert.replaceChildren();
					alert.appendChild(loader);
			
					$.ajax({
						type: 'post',
						dataType: 'json',
						url: 'send.php',
						data: $(form).serialize() + `&id=${id}` + `&rate=${rate}`,
						cache: false,
					}).done((response) => {
						alert.replaceChildren();
						
						if(response.success) {
							makeModalFrame.call(form, { scrollLock }, function(el) {
								if (form.dataset.modal == 'order-complete-3') {
									setTimeout(() => { window.location.assign('/connect.html') }, 20 * 1000);
								}
							});

						} else {
							alert.innerText = response.data.text;
						}

					});

				} else {
					alert.innerText = 'Пожалуйста, заполните все поля';
				}
			});

			agree.addEventListener('change', () => submit.toggleAttribute("disabled"));
		}
	});

})();