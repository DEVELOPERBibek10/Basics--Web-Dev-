const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add");
const template = document.querySelector("template");
let todoList = document.querySelector("#todo-list");

const todos = [];

function addTodo(id, text, isCompleted) {
  let todo = {
    id: id,
    text: text,
    isCompleted: isCompleted,
  };

  todos.push(todo);
  displayTodo(todo);
}

function displayTodo(todo) {
  let { id, text } = todo;
  const liFragment = template.content.cloneNode(true);
  const li = liFragment.querySelector("li");
  li.setAttribute("id", Number(id) + 1);
  li.querySelector('input[type="checkbox"]').setAttribute("id", Number(id));
  li.querySelector(".custom-checkbox").setAttribute("for", Number(id));
  li.querySelector(".todo-text").textContent = text;
  console.log(li);
  todoList.appendChild(li);
}

addBtn.addEventListener("click", function () {
  addTodo(Date.now(), input.value, false);
  input.value = "";
});
