import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

(() => {
	const connect = document.querySelector('.connect');

	if (connect) {
		addUnderlay('modal');

		setTimeout(() => {
			connect.replaceChildren();
			makeModalFrame.call(connect, { scrollLock });
		}, 60 * 1000);
	}

})();
