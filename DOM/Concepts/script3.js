const div = document.createElement("div");

div.className = "main";
div.id = Math.floor(Math.random() * 10 + 1);
div.setAttribute("title", "generate div");
div.style.backgroundColor = "green";
div.style.padding = "15px";
// div.innerText = "Bibek Pyakurel"
const addText = document.createTextNode("Bibek Pyakurel");

// appendChild() can only add one DOM node (like an element or text node)
// append() can add multiple items at once, including plain text

div.appendChild(addText);

document.body.append(div);
