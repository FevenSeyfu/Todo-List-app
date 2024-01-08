const addTask = (input) => {
  const todoTasks = JSON.parse(localStorage.getItem('todoTasksList')) || [];
  const newTask = {
    description: input.value,
    completed: false,
    index: todoTasks.length + 1,
  };
  todoTasks.push(newTask);
  localStorage.setItem('todoTasksList', JSON.stringify(todoTasks));
  window.location.reload();
};

export default addTask;