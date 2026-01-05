// Todo list

let todolist = [
    {id:1, title: "Make a todo list" , isDone: false}
];

let menu = +prompt("Please select an option:\n \nAdd task :     Enter 1 \nDelete task :  Enter 2 \nMark done :   Enter 3 ");


let userTasks;
let tasks;


if (menu === 1 || menu === 2 || menu === 3) {

    if (menu === 1) { // Add Todo
    userTasks = prompt("Enter your task: ");

    if (userTasks.length === 0) {
        alert("You didn't write your task! ");
    }
    else {
        let newUserTask = [
        {
            id: todolist.length +1,
            title: userTasks,
            isDone: false
        }
    ];
    console.log(newUserTask);
    
    todolist.push(newUserTask);
    console.log("Todo list: " + todolist);
    alert("Task successfully added! ")
    }
    
}
else if (menu === 2) { // Delete Todo
     tasks = todolist.map(function(task) {
    console.log(task.title);
    return task.title;
});
    let deleteName = prompt("Enter the title of the task you want to delete.\n \nTodo List: \n" + tasks.join("\n"));

     if (deleteName.length === 0) {
        alert("You didn't write your task! ");
    }
    else {
    let taskIndex;
    taskIndex = todolist.findIndex(function(task) {
        if(task.title === deleteName) { 
            return true;
        }  });
        if (taskIndex === -1){
            console.log('"' + deleteName + '" ' + " isn't in your todo list. ");
        }
         else {
                todolist.splice(taskIndex, 1);
                console.log("Task deleted successfully! \nHere's your todo list: " , todolist);
                alert("Task successfully deleted! ")
            }
    }

}
else { // Mark Done
    tasks = todolist.map(function(task) {
    return task.title;
});
    let taskDone = prompt("Enter the title of the task you want to mark done:\n \nTodo List: \n" + tasks.join("\n"));
    console.log("The task you want to mark done: " + taskDone);

    let markFound = todolist.some(function(todo) {
        if (todo.title === taskDone) {
            console.log("Marked done! ");
            todo.isDone = true;
            return true;
        }
        return false;
    });
    if (!markFound) {
        console.log('"' + taskDone + '" ' + " isn't in your todo list. ");
        alert('"' + taskDone + '" ' + " isn't in your todo list. ");

    }
    else {
         console.log("Todo list: " + todolist);
    alert("Task is done! ");

    }
    
}

}

else {
    alert("The entered number is invalid . ")
}


console.log(todolist);