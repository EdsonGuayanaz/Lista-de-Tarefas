const database = [] //banco local de desenvolvimento

function addTask() {
  const input = document.querySelector('.header input')

  const task = {
    label: input.value,
    status: ''
  }

  database.push(task)
  input.value = ''
  updateTasks()
}

function createTaskHtml(label, status) {
  const div = document.createElement('div')

  div.classList.add('task')

  if (status === 'completed') {
    div.classList.add('completed')
  }

  div.innerHTML = `
  <p>${label}</p>
  <button>deletar</button>
  `

  const tasks = document.querySelector('.tasks')

  tasks.appendChild(div)
}

function clearTasks() {
  const tasks = document.querySelector('.tasks')

  tasks.innerHTML = ''
}

function updateTasks() {
  clearTasks()
  database.forEach(item => {
    createTaskHtml(item.label, item.status)
  })
}
