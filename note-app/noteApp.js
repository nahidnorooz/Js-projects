

const modalScreen = document.querySelector(".modal-screen");
const modal = document.querySelector(".modal");
const xButton = document.querySelector(".x-btn");

const notesText = document.querySelector(".text");

const createNote = document.querySelector(".create-note");

const createBtn = document.querySelector(".create");
const cancleBtn = document.querySelector(".cancle");

const notesContainer = document.querySelector(".notes-container");


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
    delBtnImage.src = "/js/exercise/note app/pics/trash.png";

    deleteBtn.append(delBtnImage);

    notesContainer.append(userNotebox);

    userNotebox.append(newNote);
    userNotebox.append(deleteBtn);

    notesText.value = ""; 

    
    deleteBtn.addEventListener("click", function() {
        userNotebox.remove();               
    });
   
});

cancleBtn.addEventListener("click", function () {
    hideModal();
    notesText.value = "";
}); 


// KeyDown 

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        hideModal();
        notesText.value = "";
    }
});



const colorBox = document.querySelector(".color-box");
