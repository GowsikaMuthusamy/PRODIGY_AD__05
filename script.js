const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="completeTask(this)">Done</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function completeTask(button) {
  const task = button.parentNode;
  task.classList.toggle('completed');
}

function deleteTask(button) {
  const task = button.parentNode;
  taskList.removeChild(task);
}
