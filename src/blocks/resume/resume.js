import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

(() => {

	addUnderlay('modal');
	makeModalFrame({ el: '.resume__field[type="submit"]', scrollLock });

})();
