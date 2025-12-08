// Todo structure
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let todos: Todo[] = [];

const input = document.getElementById("todoInput") as HTMLInputElement;
const btn = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;

btn.addEventListener("click", () => {
  if (!input.value.trim()) return alert("Task cannot be empty!");

  const newTodo: Todo = {
    id: Date.now(),
    text: input.value.trim(),
    completed: false,
  };

  todos.push(newTodo);
  input.value = "";
  render();
});

function render() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    li.addEventListener("click", () => {
      todo.completed = !todo.completed;
      li.style.textDecoration = todo.completed ? "line-through" : "none";
    });

    list.appendChild(li);
  });
}
