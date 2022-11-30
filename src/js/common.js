import "./blocks.js";

/* Polyfills */


(function() {
	Document.prototype.replaceChildren ||= replaceChildren;
	DocumentFragment.prototype.replaceChildren ||= replaceChildren;
	Element.prototype.replaceChildren ||= replaceChildren;

	function replaceChildren(...new_children) {
		const { childNodes } = this;
		while (childNodes.length) {
			childNodes[0].remove();
		}
		this.append(...new_children);
	}
})();

(function(e) {
	e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
	e.closest = e.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {return null}
			else return this.parentElement.closest(selector)
		};
}(Element.prototype));

(function(e) {
	let matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
	!matches ? (e.matches = e.matchesSelector = function matches(selector) {
		let matches = document.querySelectorAll(selector);
		let th = this;
		return Array.prototype.some.call(matches, function(e) {
			return e === th;
		});
	}) : (e.matches = e.matchesSelector = matches);
})(Element.prototype);