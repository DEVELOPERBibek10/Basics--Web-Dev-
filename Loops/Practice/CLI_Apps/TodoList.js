let input = require("prompt-sync")();
const todos = [];
let isRunning = true;
let choice;
let task;
while (isRunning) {
  console.log("\nTo-Do list");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Complete Task");
  console.log("4. Delete Task");
  console.log("5. Exit\n");

  choice = parseInt(input("Enter your choice : "));
  switch (choice) {
    case 1:
      console.log("\n");
      task = String(input("Enter the task : "));

      addTask(Date.now(), task, false);
      break;

    case 2:
      if (todos.length > 0) displayTodos();
      else console.log("\nNo task to show.");
      break;
    case 3:
      if (todos.length > 0) {
        console.log("\n");
        let completedTaskId = parseInt(
          input("Enter the id of the task which you completed :")
        );
        taskCompleted(completedTaskId);
      } else {
        console.log("\nPlease add a task.");
      }
      break;

    case 4:
      if (todos.length > 0) {
        console.log("\n");
        let deleteTaskId = parseInt(
          input("Enter the id of the task you want to delete : ")
        );
        deleteTask(deleteTaskId);
      } else {
        console.log("\nPlease add a task.");
      }
      break;

    case 5:
      console.log("\nSucessfully Exited from the app.\n");
      isRunning = false;
      break;
    default:
      console.log("\nInvalid choice.");
      break;
  }
}

function addTask(id, task, completed) {
  todos.push({ id: id, task: task, completed: completed });
  console.log("\nTask added sucessfully");
}

function displayTodos() {
  todos.forEach(function (item) {
    console.log(item);
  });
}

function deleteTask(id) {
  for (let todo of todos) {
    if (todo.id === id) {
      todos.splice(todos.indexOf(todo), 1);
      console.log("\nTask deleted sucessfully.\n");
      break;
    }
  }
}

function taskCompleted(id) {
  for (let todo of todos) {
    if (todo.id === id) {
      todo.completed = true;
      console.log("\nTask completed\n");
      break;
    }
  }
}
