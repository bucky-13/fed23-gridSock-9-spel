export default function createElement(tagName, id, className, text) {
	const element = document.createElement(tagName);
	element.id = id;
	element.className = className;
	element.innerText = text;
	return element;
}

// Exempel 
// createElement('h1', h1Tagg, header, This is H1 text)