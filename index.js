const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const todosUiEl = document.getElementById("todos");
const btnEl = document.querySelector(".btn-add");

// getting data from local storage
//get data from storage
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}
// step 1
btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo();
});

// step 2
function addTodo(todo) {
  let todoText = inputEl.value;

  //if i will pass the parameter inside the function
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todEl = document.createElement("li");

    if (todo && todo.completed) {
      todEl.classList.add("completed");
      updatsUi();
    }

    //remove element
    todEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todEl.remove();
      updatsUi();
    });

    todEl.innerText = todoText;

    //task complete
    todEl.addEventListener("click", () => {
      todEl.classList.toggle("completed");
      updatsUi();
    });

    todosUiEl.appendChild(todEl);
    inputEl.value = "";
    updatsUi();
  }
}

function updateLS() {
  const todosEls = document.querySelectorAll("li");
  const todos = [];
  todosEls.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}