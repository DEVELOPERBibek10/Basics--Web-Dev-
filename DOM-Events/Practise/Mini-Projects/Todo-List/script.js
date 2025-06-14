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
  const checkboxId = Math.random();
  li.setAttribute("id", Number(id));
  li.querySelector('input[type="checkbox"]').setAttribute("id", checkboxId);
  li.querySelector(".custom-checkbox").setAttribute("for", checkboxId);
  li.querySelector(".todo-text").textContent = text;
  li.querySelector('input[type="checkbox"]').addEventListener(
    "change",
    function () {
      todo.isCompleted = li.querySelector('input[type="checkbox"]').checked;
      if (id === Number(li.id)) {
        li.remove();
      }
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
  if (event.target.closest(".delete-btn")) {
    const li = event.target.closest("li");
    todos = todos.filter(function (todo) {
      return todo.id !== Number(li.id);
    });
    if (li) {
      li.remove();
    }
  }
  if (event.target.closest(".edit-btn")) {
    const todo = todos.find(function (todo) {
      return (
        todo.isCompleted === false &&
        todo.id === Number(event.target.closest("li").id)
      );
    });

    if (todo) {
      const li = event.target.closest("li");
      li.querySelector(".edit").style.display = "none";
      li.querySelector(".edit").setAttribute("disabled", "");
      li.querySelector(".delete").style.display = "none";
      li.querySelector(".delete").setAttribute("disabled", "");
      li.querySelector(".save").style.display = "inline-block";
      li.querySelector(".save").removeAttribute("disabled");
      li.querySelector(".cancel").style.display = "inline-block";
      li.querySelector(".cancel").removeAttribute("disabled");
      li.querySelector(".todo-text").style.outline = "auto";
      li.querySelector(".todo-text").setAttribute("contenteditable", "true");
    }
  }

  if (event.target.closest(".save")) {
    const todo = todos.find(function (todo) {
      return (
        todo.isCompleted === false &&
        todo.id === Number(event.target.closest("li").id)
      );
    });
    if (todo) {
      const li = event.target.closest("li");
      if (li.querySelector(".todo-text").textContent.trim().length === 0)
        return;
      li.querySelector(".todo-text").setAttribute("contenteditable", "false");
      li.querySelector(".todo-text").style.outline = "none";
      li.querySelector(".edit").style.display = "inline-block";
      li.querySelector(".edit").removeAttribute("disabled");
      li.querySelector(".delete").style.display = "inline-block";
      li.querySelector(".delete").removeAttribute("disabled");
      li.querySelector(".save").style.display = "none";
      li.querySelector(".save").setAttribute("disabled", "");
      li.querySelector(".cancel").style.display = "none";
      li.querySelector(".cancel").setAttribute("disabled", "");
      todo.text = li.querySelector(".todo-text").textContent;
    }
  }
  if (event.target.closest(".cancel")) {
    const todo = todos.find(function (todo) {
      return (
        todo.isCompleted === false &&
        todo.id === Number(event.target.closest("li").id)
      );
    });
    if (todo) {
      const li = event.target.closest("li");
      li.querySelector(".todo-text").setAttribute("contenteditable", "false");
      li.querySelector(".todo-text").style.outline = "none";
      li.querySelector(".edit").style.display = "inline-block";
      li.querySelector(".delete").style.display = "inline-block";
      li.querySelector(".save").style.display = "none";
      li.querySelector(".save").setAttribute("disabled", "");
      li.querySelector(".cancel").style.display = "none";
      li.querySelector(".cancel").setAttribute("disabled", "");
      li.querySelector(".todo-text").textContent = todo.text;
    }
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
