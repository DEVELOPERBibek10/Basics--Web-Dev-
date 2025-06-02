function appendList(languageName) {
  const li = document.createElement("li");
  li.textContent = `${languageName}`;
  document.querySelector("#language").append(li);
}

// appendList("Python");

function OptiAppendList(languageName) {
  const li = document.createElement("li");
  li.append(`${languageName}`);
  document.querySelector("#language").append(li);
}

OptiAppendList("Python");
OptiAppendList("typescript");
OptiAppendList("Java");

const thirdLang = document.querySelector("li:nth-child(3)");
const newLi = document.createElement("li");
newLi.append("golang");
thirdLang.replaceWith(newLi);
