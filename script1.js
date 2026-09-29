let todos = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const counter = document.getElementById("counter");
const clearBtn = document.getElementById("clear-btn");
const sortBtn = document.getElementById("sort-btn");

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function load() {
  const data = localStorage.getItem("todos");
  if (data !== null) {
    todos = JSON.parse(data);
  }
}

function showTodos() {
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = todos[i].value + " (" + todos[i].date + ")";
    text.className = "task-text";
    li.appendChild(text);

    if (todos[i].completed === true) {
      li.classList.add("completed");
    }

    text.onclick = function () {
      todos[i].completed = !todos[i].completed;
      save();
      showTodos();
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "small secondary";
    editBtn.onclick = function () {
      editTodo(i, li);
    };
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "small danger";
    deleteBtn.onclick = function () {
      todos.splice(i, 1);
      save();
      showTodos();
    };
    li.appendChild(deleteBtn);

    list.appendChild(li);
  }

  counter.textContent = "Tasks: " + todos.length;
}

form.onsubmit = function (event) {
  event.preventDefault(); 

  const value = input.value.trim();

  if (value === "") {
    alert("Please write a task");
    return;
  }

  const task = {
    id: Date.now(),
    value: value,
    date: new Date().toLocaleString(),
    time: Date.now(), 
    completed: false
  };

  todos.push(task);
  save();
  showTodos();

  input.value = "";
};

function editTodo(i, li) {
  li.innerHTML = "";

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = todos[i].value;
  li.appendChild(editInput);

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className = "small";
  saveBtn.onclick = function () {
    if (editInput.value.trim() !== "") {
      todos[i].value = editInput.value.trim();
      save();
    }
    showTodos();
  };
  li.appendChild(saveBtn);
}

clearBtn.onclick = function () {
  todos = [];
  save();
  showTodos();
};

sortBtn.onclick = function () {
  todos.sort(function (a, b) {
    return b.time - a.time;
  });
  save();
  showTodos();
};

load();
showTodos();