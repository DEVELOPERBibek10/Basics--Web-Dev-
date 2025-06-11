const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add");
const template = document.querySelector("template");
let todoList = document.querySelector("#todo-list");
const filterBtns = document.querySelector(".filters");

let todos = [];

function addTodo(id, text, isCompleted) {
  if (text.trim().length === 0) return;
  const completedFilter = document.querySelector(".Completed");
  if (completedFilter.classList.contains("active")) return;
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
  li.querySelector('input[type="checkbox"]').addEventListener(
    "change",
    function () {
      todo.isCompleted = li.querySelector('input[type="checkbox"]').checked;
    }
  );
  li.querySelector('input[type="checkbox"]').checked = todo.isCompleted;
  todoList.appendChild(li);
}

addBtn.addEventListener("click", function () {
  addTodo(Date.now(), input.value, false);
  input.value = "";
});

todoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const li = event.target.closest("li");
    todos = todos.filter(function (todo) {
      return todo.id !== Number(li.id - 1);
    });
    if (li) {
      li.remove();
    }
  }
  if (event.target.classList.contains("edit")) {
  }
});

filterBtns.addEventListener("click", function (event) {
  todoList.innerHTML = "";
  const filBtns = filterBtns.querySelectorAll(".fil-btn");

  filBtns.forEach(function (btn) {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
  if (event.target.classList.contains("Completed")) {
    event.target.classList.add("active");
    todos.forEach(function (todo) {
      if (todo.isCompleted === true) {
        displayTodo(todo);
      }
    });
  } else if (event.target.classList.contains("Incomplete")) {
    event.target.classList.add("active");
    todos.forEach(function (todo) {
      if (todo.isCompleted === false) {
        displayTodo(todo);
      }
    });
  }
});
