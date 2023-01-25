import './style.css';

const taskListContainer = document.getElementById('todoListPlaceholder');
const todoTasks = [
  {
    description: 'Task one',
    completed: true,
    index: 0,
  },
  {
    description: 'Task two',
    completed: true,
    index: 1,
  },
  {
    description: 'Task three',
    completed: false,
    index: 2,
  },
  {
    description: 'Task four',
    completed: true,
    index: 3,
  },
];

const AddTask = () => {
  const tasks = Object.keys(todoTasks);
  tasks.forEach((task) => {
    const taskList = document.createElement('li');
    taskList.innerHTML = `
      <li class="list-item">
        <hr>
        <label class="checkbox-label">
          <input type="checkbox" name="${todoTasks[task].index}" id="">
          ${todoTasks[task].description}
        </label>
      </li>`;
    taskListContainer.appendChild(taskList);
  });
};

window.addEventListener('load', (e) => {
  e.preventDefault();
  AddTask();
});