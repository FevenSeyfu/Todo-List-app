const taskForm = document.getElementById('task-form');

const editDescription = (taskID, e) => {
  const selectedTask = e.firstElementChild.firstElementChild;
  const oldTask = selectedTask.parentNode.innerText;
  selectedTask.setAttribute('type', 'text');
  selectedTask.setAttribute('value', oldTask);
  selectedTask.classList.add('Tasks-view');
  selectedTask.nextElementSibling.style.display = 'none';
  taskForm.addEventListener('change', () => {
    const todoTasks = JSON.parse(localStorage.getItem('todoTasksList')) || [];
    const id = parseFloat(taskID);
    todoTasks.forEach((task) => {
      if (task.index === id) {
        task.description = selectedTask.value;
      }
    });
    localStorage.setItem('todoTasksList', JSON.stringify(todoTasks));
    window.location.reload();
  });
};
export default editDescription;
