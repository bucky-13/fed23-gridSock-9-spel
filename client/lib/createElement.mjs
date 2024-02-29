export default function createElement(tagName, id, className, text) {
	const element = document.createElement(tagName);
	// if (id) {
		element.id = id;
	// }
	// if (className) {
		element.className = className;
	// }
	if (text) {
		element.innerText = text;
	}
	return element;
}

// Exempel
