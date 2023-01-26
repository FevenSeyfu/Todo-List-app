import './style.css';
import dotsIcon from './dots.png';
import addTask from './Add-task.js';

const taskListContainer = document.getElementById('todoListPlaceholder');
const taskForm = document.getElementById('task-form');
const input = document.getElementById('Add-task');

const displayTask = () => {
  const todoTasks = JSON.parse(localStorage.getItem('todoTasksList'));
  todoTasks.sort((a, b) => a.index - b.index);
  todoTasks.forEach((task) => {
    const taskList = document.createElement('li');
    taskListContainer.appendChild(taskList);
    taskList.innerHTML = `
      <hr>
      <li class="list-item parent">
        <label class="checkbox-label">
          <input type="checkbox" name="${task.index}" data-id="${task.index}">
          ${task.description}
        </label>
        <img src="${dotsIcon}" alt="show more icon" class="icon show-detail">
      </li>`;
  });
};

window.addEventListener('load', (e) => {
  e.preventDefault();
  displayTask();
});
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(input);
});
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('show-detail')) {
    e.preventDefault();
    if (e.target.getAttribute('src') !== 'https://img.icons8.com/ios/50/null/delete--v1.png') {
      e.target.setAttribute('src', 'https://img.icons8.com/ios/50/null/delete--v1.png');
      e.target.parentNode.style.backgroundColor = 'rgba(251, 251, 177, 0.704)';
    } else {
      e.target.setAttribute('src', dotsIcon);
      e.target.parentNode.style.backgroundColor = 'white';
    }
  }
});
