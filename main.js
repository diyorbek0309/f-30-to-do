const addTitle = document.getElementById("addTitle");
const titleInput = document.getElementById("titleInput");
const todosWrap = document.getElementById("todosWrap");
const editModal = document.getElementById("editModal");
const editInput = document.getElementById("editInput");
const editOK = document.getElementById("editOK");
const editCancel = document.getElementById("editCancel");
let todos = [];

const showTodo = () => {
  todosWrap.innerHTML = null;

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${
      todo.isCompleted ? "<del>" + todo.title + "</del>" : todo.title
    }</strong><span><button onclick='editTodo(${
      todo.id
    })'>E</button><button onclick='completeTodo(${
      todo.id
    })'>C</button><button onclick='deleteTodo(${todo.id})'>D</button></span>`;

    todosWrap.appendChild(li);
  });
};

const addTodo = () => {
  const todoItem = {
    id: todos.length,
    title: titleInput.value,
    isCompleted: false,
  };
  todos.push(todoItem);
  showTodo();

  titleInput.value = "";
};

const completeTodo = (id) => {
  todos[id].isCompleted = !todos[id].isCompleted;
  showTodo();
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  showTodo();
};

const editTodo = (id) => {
  editModal.style.display = "block";
  editInput.value = todos[id].title;

  editOK.addEventListener("click", () => {
    todos[id].title = editInput.value;
    editModal.style.display = "none";
    showTodo();
  });

  editCancel.addEventListener("click", () => {
    editModal.style.display = "none";
  });
};
