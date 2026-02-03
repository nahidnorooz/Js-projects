

let modalBtn = document.querySelector(".open-modal-btn");

let modalScreen = document.querySelector(".modal-screen");

let exitBtn = document.querySelector(".xBtn");

let newTask = document.querySelector(".new-task");

let createBtn = document.querySelector(".create");
let cancleBtn = document.querySelector(".cancle");
let todoContainer = document.querySelector(".todos-container");
let userNewTask; 

function showModal() {
    modalScreen.classList.remove("hidden");
}
function hideModal() {
    modalScreen.classList.add("hidden");
    newTask.value = "";
}
function addTask(event) {
    event.preventDefault();
        modalScreen.classList.add("hidden");
        userNewTask = newTask.value;
        todoContainer.insertAdjacentHTML("afterbegin", 
            `<div class="todo-div">
            <article class="todo-article unhidden">${userNewTask}</article>
            <button class="delete-todo unhidden">Delete</button>
            </div>`);
            
         newTask.value = "";

       const todoDelBtn = document.querySelector(".delete-todo")
       const todoDiv = document.querySelector(".todo-div");
       todoDelBtn.addEventListener("click", function () {
            todoDiv.remove();
        });
}

modalBtn.addEventListener("click", showModal);
exitBtn.addEventListener("click", hideModal);
cancleBtn.addEventListener("click", hideModal); 
createBtn.addEventListener("click",addTask);

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        hideModal();
    } 
});