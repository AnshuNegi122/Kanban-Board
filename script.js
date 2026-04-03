const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
let dragElement = null;
const addTaskBtn = document.querySelector("#add-new-task");

const tasks = document.querySelectorAll('.task');
tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        // console.log("dragging", e);
        dragElement = task; 
    })
})


function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    column.addEventListener("drop", (e) => {
        e.preventDefault();
        // console.log("Dropped", dragElement, column);
        column.appendChild(dragElement);
        column.classList.remove("hover-over");
    })
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

const toggleModalButton = document.querySelector("#toggle-modal")
const modal = document.querySelector(".modal")
const modalBg = document.querySelector(".modal .bg")

toggleModalButton.addEventListener("click", () => {
    modal.classList.toggle("active")
})
modalBg.addEventListener("click", () => {
    modal.classList.remove("active")
})

addTaskBtn.addEventListener("click", () => {
    const taskTitle = document.querySelector("#task-title").value
    const taskDesc = document.querySelector("#task-desc").value
    
    const div = document.createElement("div")
    
    div.classList.add("task")
    div.setAttribute("draggable", "true")
    
    div.innerHTML = `
    <h2>${taskTitle}</h2>
    <p>${taskDesc}</p>
    <button>Delete</button>`
    
    todo.appendChild(div)   
    modal.classList.remove("active")
})