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
    // taskList.innerHTML = `<li class="list-item">${todoTasks[task].description}</li>`;
    const taskList = document.createElement('li');
    taskList.classList.add('list-item');
    taskList.innerText = todoTasks[task].description;
    taskListContainer.appendChild(taskList);
  });
};

window.addEventListener('load', (e) => {
  e.preventDefault();
  AddTask();
});