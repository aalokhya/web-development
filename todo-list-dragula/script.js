function addTask() {
  const taskText = document.getElementById('taskInput').value;
  if (!taskText) return;
  const card = document.createElement('div');
  card.className = 'card';
  card.innerText = taskText;
  document.getElementById('pending').appendChild(card);
  document.getElementById('taskInput').value = '';
}

dragula([document.getElementById('pending'), document.getElementById('done')])
  .on('drag', (el) => el.classList.add('dragging'))
  .on('drop', (el) => el.classList.remove('dragging'));

