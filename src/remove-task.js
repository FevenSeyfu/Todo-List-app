const removetask = (id) => {
  const todoTasks = JSON.parse(localStorage.getItem('todoTasksList')) || [];
  id = parseFloat(id);
  const i = todoTasks.findIndex((task) => task.index === id);
  todoTasks.splice(i, 1);
  todoTasks.forEach((task) => {
    if (task.index > id) {
      task.index -= 1;
    }
  });

  localStorage.setItem('todoTasksList', JSON.stringify(todoTasks));
  window.location.reload();
};
export default removetask;