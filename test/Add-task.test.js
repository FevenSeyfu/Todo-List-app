const addTask = require('../src/Add-task.js');

const getLocalStorage = require('./__mocks__/mock-localstorage.js');

describe('Test Add and remove one a li element', () => {
  test('Add task to list', () => {
    taskList.innerHTML = `
      <hr>
      <li class="list-item parent">
        <label class="checkbox-label" data-id="${}">
          <input type="checkbox" name="${}" class="task-checkbox" >
          <span class="label-text">${n}</span>
        </label>
      </li>`;
  });
});