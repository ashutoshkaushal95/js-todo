const textInput = document.getElementById("text-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const textValue = textInput.value;

  const todoItem = document.createElement("li");

  todoList.appendChild(todoItem);

  todoItem.innerText = textValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = () => {
    todoList.removeChild(todoItem);
  };

  todoItem.appendChild(deleteBtn);

  textInput.value = null;
}

addBtn.onclick = () => {
  if (textInput.value != "") {
    addTodo();
  }
};
