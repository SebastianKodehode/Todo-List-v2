// Storing elements in variables
const input = document.querySelector('#input')
const addBtn = document.querySelector('#addBtn')
const listField = document.querySelector('.list-field')

// Button to run add todo item
addBtn.addEventListener('click', addTodoItem)

// add todo item function
function addTodoItem() {

    // Function to remove the possibility of empty todo items
    if (input.value === "") {
        alert("Please write something before adding!");
        return
    } else if (input.value === true); {

        addTodo()

        input.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                addTodo()
            }
        })
    }
}

function addTodo() {
    // Div to hold the content
    const todoItem = document.createElement('div')
    todoItem.classList.add("todo-item")

    // Paragraph to put input.value into
    const para = document.createElement('p')
    para.textContent = input.value

    // Delete button on the todo item
    const deleteBtn = document.createElement('figure')
    const deleteImg = document.createElement('img')
    deleteImg.src = "images/deleteicon.svg"
    deleteBtn.appendChild(deleteImg)
    deleteBtn.classList.add('img-del')

    // Appending the content to the todo div
    todoItem.appendChild(para)
    todoItem.appendChild(deleteBtn)

    // Appending the todo div to the list
    listField.appendChild(todoItem)

    // Resetting the input field when adding a todo
    input.value = ""

    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove()
    })
}




