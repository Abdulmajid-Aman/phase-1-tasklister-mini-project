document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = document.getElementById("new-task-description")
    let task = input.value
    createElements(task)
  })
});  

function createElements(text) {
  let ul = document.getElementById("tasks")
  let btn = document.createElement('button')
  let div = document.getElementById('list')

    btn.textContent = "x"
    let li = document.createElement('li')
    li.textContent +=  `${text}  `
    li.appendChild(btn)
    ul.appendChild(li)
    div.appendChild(ul)

    deleteElement(btn)
  }

function deleteElement(button) {
  button.addEventListener('click', (e) => {
    let parent = e.target.parentNode
    parent.remove()
  }
)}


