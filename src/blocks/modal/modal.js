import Cookies from 'js-cookie'
import Inputmask from "inputmask";
import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";
import { selectTweaker } from "../../js/libs/selectTweaker";
import { arrLast } from "../../js/libs/helpers";

(() => {

	/* Проверка полей на пустое значение. В случае type="tel", нужно хотя бы одно заполненное поле */
	const fieldsValidation = ([...fields]) => {
		return fields.every((field) => {
			if (field.type == 'text' || field.tagName == 'TEXTAREA' || field.tagName == 'SELECT') {
				return !!field.value;
			} else if(field.type == 'tel') {
				return fields.some(field => (field.type == 'tel') && !!field.value);
			}
		});
	}

	
	addUnderlay('modal');
	makeModalFrame({ 
		el: '.resume__field, .footer__call, .footer__ask-button, .header__button, .complete__button, .rate__cost button', 
		scrollLock,
		/* Коллбэк на открытие модального окошка */
		open: function(el) {
			const agree = this.querySelector('.resume__agree [type="checkbox"]');
			const required = this.querySelectorAll('[type="tel"], [type="text"], textarea, select');
			const submit = this.querySelector('[type="submit"]');
			const alert = this.querySelector('.resume__alert');
			const form = this.querySelector('form');
			const rate = el.dataset.rate || '';

			const loader = document.createElement("img");
			loader.src = './images/loader.svg';
			
			const id = arrLast(document.location.pathname.split('/')).split('.')[0];
			const modal_id = arrLast([...this.closest('.modal')?.classList]);

			/* Перехват селекта */
			selectTweaker(this.querySelectorAll('.resume__select'));

			/* Маска на ввод телефонного номера */
			Inputmask({ 
				"mask": "+7 (999) 999-99-99", 
				showMaskOnHover: false 
			}).mask(this.querySelectorAll('input[type="tel"]'));
			
			/* Увеличивать высоту textarea по мере ввода текста */
			this.querySelectorAll('textarea.resume__input').forEach((area) => {
				area.addEventListener('input', () => area.style.height = Math.max(area.scrollHeight, area.offsetHeight) + 'px');
			});
			
			if (submit && agree && alert) {
				
				submit.addEventListener('click', (e) => {
					e.preventDefault();

					if (fieldsValidation(required)) {
						alert.replaceChildren();
						alert.appendChild(loader);
						
						// Отправка сообщения
						$.ajax({
							type: 'post',
							dataType: 'json',
							url: 'send.php',
							data: $(form).serialize() + `&id=${id}` + `&rate=${rate}` + `&modal=${modal_id}`,
							cache: false,
						}).done((response) => {
							alert.replaceChildren();
							
							// Если сообщение удачно отправлено
							if(response?.success) {

								// Если модалка была вызвана со страниц case, faq или prices - ставлю куку
								if(id.includes('case') || id.includes('prices') || id.includes('faq')) {
									Cookies.set('ordered', true, { expires: 365 });
								}
					
								// Еще одна модалка с адресом из data-modal формы
								makeModalFrame.call(form, {
									scrollLock,
									// Коллбэк на открытие модального окошка
									open: function(el) {
										if (form.dataset.modal == 'order-complete-3') {
											setTimeout(() => { window.location.assign('./connect.html') }, 20 * 1000);
										}
									}
								});
							
							// Если при отправке сообщения, произошла какая-то проблема
							} else {
								// Если сервер захочет передать текстовый ответ
								alert.innerText = response?.data?.text;
							}
						});
	
					} else {
						alert.innerText = 'Пожалуйста, заполните все поля';
					}
				});
	
				agree.addEventListener('change', () => submit.toggleAttribute("disabled"));
			}
		}
	});

})();