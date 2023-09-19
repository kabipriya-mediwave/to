let button = document.querySelector("#add");
let List = document.querySelector("#List");
let input = document.querySelector("#input");

let todos = [];

button.addEventListener("click", () => {
  todos.push(input.value);
  saveToLocalStorage();
  updateListUI();
  console.log("yes");
  addtodo(input.value);
  clear();
});

function addtodo(todo) {
  let div = document.createElement("div");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let para = document.createElement("label");
  para.innerText = todo;
  div.appendChild(checkbox);
  div.appendChild(para);

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      para.style.textDecoration = "line-through";
    } else {
      para.style.textDecoration = "";
    }
  });
  return div;
}
function clear() {
  let input = document.getElementById("input");
  input.value = "";
}

function saveToLocalStorage() {
  const str = JSON.stringify(todos);
  localStorage.setItem("todos-list", str);
}

function getFromLocalStorage() {
  const str = localStorage.getItem("todos-list");
  if (!str) {
    todos = [];
  } else {
    todos = JSON.parse(str);
  }
}
function clearApp() {
  const app = document.querySelector("#List");
  app.innerHTML = "";
}

function updateListUI() {
  clearApp();
  for (let i = 0; i < todos.length; i++) {
    const todo = addtodo(todos[i]);
    List.appendChild(todo);
  }
}
getFromLocalStorage();
updateListUI();
