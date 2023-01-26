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
          <input type="checkbox" name="${task.index}" id="">
          ${task.description}
        </label>
        <img src="${dotsIcon}" alt="show more icon" class="icon">
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