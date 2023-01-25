import './style.css';

const taskListContainer = document.getElementById('todoListPlaceholder');
const todoTasks = [
  {
    description: 'finish writing',
    completed: true,
    index: 0,
  },
  {
    description: 'write code',
    completed: true,
    index: 1,
  },
  {
    description: 'play',
    completed: false,
    index: 2,
  },
  {
    description: 'run',
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
        <label class="checkbox-label">
          <input type="checkbox" name="${todoTasks[task].index}" id="">
          ${todoTasks[task].description}
        </label>
      </li>
      <hr>`;
    taskListContainer.appendChild(taskList);
  });
};

window.addEventListener('load', (e) => {
  e.preventDefault();
  AddTask();
});