

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

        let todoDiv = document.createElement("div");
        let todoArticle = document.createElement("article");
        let todoDelBtn = document.createElement("button");

        todoDiv.className = "todo-div";

        todoArticle.className = "todo-article unhidden"
        todoArticle.innerHTML = userNewTask;

        todoDelBtn.className = "delete-todo unhidden"
        todoDelBtn.innerHTML = "Delete";

        todoDiv.append(todoArticle, todoDelBtn)
        todoContainer.append(todoDiv);
        
         newTask.value = "";

        
        todoDelBtn.addEventListener("click", function () {
            todoArticle.remove();
            todoDelBtn.remove();
            todoDiv.remove();
            
        });

    });