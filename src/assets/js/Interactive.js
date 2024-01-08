import removetask from './remove-task.js';

const checkStatus = (task, id) => {
  const todoTasks = JSON.parse(localStorage.getItem('todoTasksList')) || [];
  if (task.checked) {
    todoTasks.forEach((task) => {
      if (task.index === id) {
        task.completed = true;
      }
    });
  } else {
    todoTasks.forEach((task) => {
      if (task.index === id) {
        task.completed = false;
      }
    });
  }
  localStorage.setItem('todoTasksList', JSON.stringify(todoTasks));
};
const clearAllCompleted = () => {
  const todoTasks = JSON.parse(localStorage.getItem('todoTasksList')) || [];
  const completed = todoTasks.filter((task) => task.completed === true);
  completed.forEach((task) => {
    removetask(task.index);
  });
};

export { checkStatus, clearAllCompleted };