import Inputmask from "inputmask";
import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

(() => {
		
	addUnderlay('modal');
	makeModalFrame({ el: '.resume__field, .footer__call, .footer__ask-button, .header__button', scrollLock }, function(el) {
		const agree = this.querySelector('.resume__agree [type="checkbox"]');
		const submit = this.querySelector('[type="submit"]');
		const alert = this.querySelector('.resume__alert');

		Inputmask({ 
			"mask": "+7 (999) 999-99-99", 
			showMaskOnHover: false 
		}).mask(this.querySelectorAll('input[type="tel"]'));
		
		
		this.querySelectorAll('textarea.resume__input').forEach((area) => {
			area.addEventListener('input', () => area.style.height = Math.max(area.scrollHeight, area.offsetHeight) + 'px');
		});
		
		if (submit && agree && alert) {
			let id = document.location.pathname.split('/').at(-1).split('.')[0];
			let formdata = $(this).find('form').serialize() + `&id=${id}`;
			let required = $(this).find('[required]');

			
			submit.addEventListener('click', (e) => {
				e.preventDefault();
				
				if ([...required].every(field => field.value)) {
					
					/* $.ajax({
						type: 'post',
						dataType: 'json',
						url: 'send.php',
						data: formdata,
						cache: false,
					}).done(function(response) {
						
						if(response.success) {
							$forminputs.val('');
							$infoblock.addClass('form__alert_success').html(response.data.text);
							
							setTimeout(() => {
								$form
								.parents('.modal__body')
								.find('.modal__close')
								.trigger('click');
							}, 3000);
							
						} else {
							$infoblock.html(response.data.text);
		
							if(response.data.smtpinfo !== undefined && response.data.smtpinfo !== '')
							console.log(response.data.smtpinfo);
						}
						
						$elements.prop("disabled", false);
					}); */
				}
			});


			agree.addEventListener('change', () => submit.toggleAttribute("disabled"));
		}
	});

})();