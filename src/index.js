import './style.css';
import dotsIcon from './dots.png';

const taskListContainer = document.getElementById('todoListPlaceholder');
const todoTasks = [
  {
    description: 'Task one',
    completed: true,
    index: 4,
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
  todoTasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const taskList = document.createElement('li');
    taskList.innerHTML = `
      <hr>
      <li class="list-item parent">
        <label class="checkbox-label">
          <input type="checkbox" name="${todoTasks[task].index}" id="">
          ${todoTasks[task].description}
        </label>
        <img src="${dotsIcon}" alt="show more icon" class="icon">
      </li>`;
    taskListContainer.appendChild(taskList);
  });
};

window.addEventListener('load', (e) => {
  e.preventDefault();
  AddTask();
});