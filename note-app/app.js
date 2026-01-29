

const modalScreen = document.querySelector(".modal-screen");
const modal = document.querySelector(".modal");
const xButton = document.querySelector(".x-btn");

const notesText = document.querySelector(".text");

const createNote = document.querySelector(".create-note");

const createBtn = document.querySelector(".create");
const cancleBtn = document.querySelector(".cancle");

const notesContainer = document.querySelector(".notes-container");

const colorBoxAll = document.querySelectorAll(".color-box");


function showModal() {
    modalScreen.classList.remove("hidden");
}
function hideModal() {
    modalScreen.classList.add("hidden");
}


createNote.addEventListener("click", showModal);

xButton.addEventListener("click", function () {
    hideModal();
    notesText.value = "";
});

// Create the Note Here

let newNote;

createBtn.addEventListener("click", function () { 
    hideModal();
    let userNote = notesText.value;

    let userNotebox = document.createElement("div");
    userNotebox.className = "note-box";

    let newNote = document.createElement("article");
    newNote.className = "user-note";
    newNote.innerHTML = userNote;

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    
    let delBtnImage = document.createElement("img");
    delBtnImage.src = "/note-app/pics/trash.png";

    deleteBtn.append(delBtnImage);

    notesContainer.append(userNotebox);

    userNotebox.append(newNote);
    userNotebox.append(deleteBtn);

    notesText.value = ""; 


   // Delete Button 
    deleteBtn.addEventListener("click", function() {
        userNotebox.remove();               
    });
   
    
// Color Box
colorBoxAll.forEach(function (color) {

    color.addEventListener("click", function () {
        let colorCode = color.getAttribute("data-color");

        color.classList.add("selected");
        userNotebox.style.backgroundColor = colorCode;
    });
});


// Cancle Button
cancleBtn.addEventListener("click", function () {
    hideModal();
    notesText.value = "";
}); 


// KeyDown Events
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        hideModal();
        notesText.value = "";
    }

});
