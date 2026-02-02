

let modalBtn = document.querySelector(".open-modal-btn");

let modalScreen = document.querySelector(".modal-screen");

let exitBtn = document.querySelector(".close-modal-x");

let newTask = document.querySelector(".new-task");

let createBtn = document.querySelector(".create");
let cancleBtn = document.querySelector(".cancle");

let todoContainer = document.querySelector(".todos-container");


modalBtn.addEventListener("click", function (){
    modalScreen.classList.remove("hidden");
});


exitBtn.addEventListener("click", function (){
        modalScreen.classList.add("hidden");
        newTask.value = "";

    });
    cancleBtn.addEventListener("click", function (){
        modalScreen.classList.add("hidden");

        userNewTask = newTask.value;
        newTask.value = "";


    });

    let userNewTask; 

    createBtn.addEventListener("click", function (event){
        event.preventDefault();
        modalScreen.classList.add("hidden");

        userNewTask = newTask.value;
        

        todoContainer.insertAdjacentHTML("afterbegin", 
            `<div class="todo-div"><article class="todo-article unhidden">${userNewTask}</article><button class="delete-todo unhidden">Delete</button></div>`);
            
         newTask.value = "";

       const todoDelBtn = document.querySelector(".delete-todo")
       const todoDiv = document.querySelector(".todo-div");
       todoDelBtn.addEventListener("click", function () {
            todoDiv.remove();
        });

    });