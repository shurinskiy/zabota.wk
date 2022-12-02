import Cookies from 'js-cookie'
import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

(() => {
	const connect = document.querySelector('.connect');

	if (connect) {
		addUnderlay('modal');

		setTimeout(() => {
			Cookies.set('ordered', true, { expires: 3 });
			connect.replaceChildren();
			makeModalFrame.call(connect, {
				scrollLock,
				close: function() {
					window.location.assign('./')
				}
			});
		}, 60 * 1000);
	}

})();
