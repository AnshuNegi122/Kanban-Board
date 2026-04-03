const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');

const tasks = document.querySelectorAll('.task');
tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        console.log("dragging", e);
    })
})



function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        // e.preventdefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e) => {
        // e.preventdefault();
        column.classList.remove("hover-over");
    })
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);