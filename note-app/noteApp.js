

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

let newNote;

createBtn.addEventListener("click", function () { 
    hideModal();
    let userNote = notesText.value;

    let newNote = document.createElement("div");
    newNote.className = "note";
    newNote.innerHTML = userNote;

    notesContainer.append(newNote);

    notesText.value = "";
    
   
});

cancleBtn.addEventListener("click", function () {
    hideModal();
    notesText.value = "";
}); 

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        hideModal();
        notesText.value = "";
    }
});


const colorBox = document.querySelector(".color-box");
