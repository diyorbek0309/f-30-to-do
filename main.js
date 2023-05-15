const addTitle = document.getElementById("addTitle");
const titleInput = document.getElementById("titleInput");
const todosWrap = document.getElementById("todosWrap");
const todos = [];

const addTodo = () => {
  const li = document.createElement("li");
  const todoItem = {
    id: todos.length,
    title: titleInput.value,
    isCompleted: false,
  };
  todos.push(todoItem);

  li.innerHTML = `<strong>${titleInput.value}</strong><span><button>E</button><button onclick='completeTodo(${todoItem.id})'>C</button><button>D</button></span>`;

  todosWrap.appendChild(li);
  titleInput.value = "";
};

const completeTodo = (id) => {
  console.log(id);
};
