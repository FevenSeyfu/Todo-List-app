import './style.css';
import dotsIcon from './dots.png';
import addTask from './Add-task.js';
import removetask from './remove-task.js';
import editDescription from './edit-task.js';

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
        <label class="checkbox-label" data-id="${task.index}">
          <input type="checkbox" name="${task.index}">
          <span class="label-text">${task.description}</span>
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
  const { parentNode } = e.target;
  if (e.target.classList.contains('show-detail')) {
    e.preventDefault();
    if (e.target.getAttribute('src') !== 'https://img.icons8.com/ios/50/null/delete--v1.png') {
      e.target.setAttribute('src', 'https://img.icons8.com/ios/50/null/delete--v1.png');
      e.target.classList.add('remove-btn');
      parentNode.style.backgroundColor = 'rgba(251, 251, 177, 0.704)';
      const taskID = parentNode.firstElementChild.getAttribute('data-id');
      editDescription(taskID, parentNode);
      document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
          removetask(taskID);
        }
      });
    } else {
      e.target.setAttribute('src', dotsIcon);
      parentNode.style.backgroundColor = 'white';
    }
  }
});
