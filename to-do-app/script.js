let todos;

// Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos"));
// Check if it's an array
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    {
      id: "id1",
      title: "Build Web App",
      dueDate: "2023-10-04",
    },
    {
      id: "id2",
      title: "Learn TypeScript",
      dueDate: "2023-02-03",
    },
    {
      id: "id3",
      title: "Learn Java",
      dueDate: "2023-03-04",
    },
  ];
}

// Creates a todo
const createTodo = (title, dueDate) => {
    const id = '' + new Date().getTime();

    todos.push({
        id: id,
        title: title,
        dueDate: dueDate
    });
    saveTodos();
}

// Delete a todo
const removeTodo = idToDelete => {
    todos = todos.filter(todo =>{
        if (todo.id === idToDelete) {
            return false;
        } else {
            return true;
        }
    });
    saveTodos();
}

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const addTodo = () => {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    createTodo(title, dueDate);
    render();
}

const deleteTodo = (event) => {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete);
    render();
}

const render = () => {
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(todo => {
        const element = document.createElement('div');
        element.innerText = '» '+ todo.title + ' ' + todo.dueDate;
        element.style = 'margin-top: 10px;'

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px; background: red; color: white; border-radius: 10px; border: none;';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
}

render();