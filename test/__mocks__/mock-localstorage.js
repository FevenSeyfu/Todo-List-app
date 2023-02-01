const newTaskOne = {
  description: 'Task 1',
  completed: false,
  index: 1,
};
const newTaskTwo = {
  description: 'Task 2',
  completed: false,
  index: 2,
};
const getLocalStorage = () => {
  const localStorage = [];
  localStorage.push(newTaskOne);
  localStorage.push(newTaskTwo);
  return localStorage;
};
module.exports = getLocalStorage;