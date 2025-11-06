// Todo list

let todolist = [
    {id:1, title: "Make a todo list", tStatus: "Done"},
    {id:2, title: "Make", tStatus: "Done"}

];

let menu = +prompt("Add task : Enter 1 \nDelete task : Enter 2 \nChange task status to done : Enter 3 ");

// let Usertodolist = [];

let userTasks;

if (menu === 1) { // add task
    userTasks = prompt("Enter your task: ");

    if (userTasks.length === 0) {
        alert("You didn't write your task! ");
    }
    else {
        let newUserTask = [
        {
            id: todolist.length +1,
            title: userTasks
        }
    ];
    console.log(newUserTask);
    
    todolist.push(newUserTask);
    console.log("Todo list: " + todolist);
    }
    
}
else if (menu === 2) { // delete task
    let deleteName = prompt("Enter the task you want to delete: ");

    let userDelTask = todolist.forEach(function(task) {

        if (task.title.includes(deleteName)) {
            return true;

        }
        else {
            console.log("This task is not in your todo list. ");  
}
    });
    console.log(userDelTask);

    

    

}
else if (menu === 3) { // task status change

    todolist.forEach

}
else {
    alert("Please enter a valid number. ")
}
