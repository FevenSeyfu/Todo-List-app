const editDescription = (taskID, e) => {
  const selectedTask = e.firstElementChild.firstElementChild;
  const oldTask = selectedTask.parentNode.innerText;
  selectedTask.setAttribute('type', 'text');
  selectedTask.setAttribute('value', oldTask);
  selectedTask.classList.add('Tasks-view');
};

export default editDescription;
