import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/libs/modal";

(() => {

	addUnderlay('modal');
	makeModalFrame({ 
		el: '.block-v__video', 
		scrollLock, 
		open: function() {
			let video = this.querySelector('video');
			video.setAttribute('controls', '');
			video.setAttribute('autoplay', '');
		}
	});
	
})();
