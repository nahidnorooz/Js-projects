
const modalScreen = document.querySelector(".modal-screen");
const modal = document.querySelector(".modal");
const xButton = document.querySelector(".x-btn");
const textarea = document.querySelector(".text");
const createNote = document.querySelector(".create-note");
const continueBtn = document.querySelector(".continue");
const cancleBtn = document.querySelector(".cancle");
const notesContainer = document.querySelector(".notes-container");
const colorBoxes = document.querySelectorAll(".color-box");
const searchInput = document.querySelector(".search-notes");
const searchBtn = document.querySelector(".search-btn");

let mainColor;

function showModal() {
    modalScreen.classList.remove("hidden");
    textarea.focus();
}
function hideModal() {
    modalScreen.classList.add("hidden");
    textarea.value = "";
}
function addNote() {
    userNote = textarea.value;    
    
    let userNotebox = document.createElement("div");
    userNotebox.className = "note-box";
    userNotebox.style.backgroundColor = mainColor;

    newNote = document.createElement("p");
    newNote.className = "user-note";
    newNote.innerHTML = userNote;

    userNotebox.append(newNote);

    let trashDiv = document.createElement("div");
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";

    trashDiv.append(deleteBtn);
    
    let delBtnImage = document.createElement("img");
    delBtnImage.src = "/note-app/pics/trash.png";

    deleteBtn.append(delBtnImage);
    

    notesContainer.append(userNotebox);
    userNotebox.append(trashDiv);
    
    hideModal();

    // Delete Button
    deleteBtn.addEventListener("click", function() {
        userNotebox.remove();               
    })};

function searchNotes() {
    const notes = document.querySelectorAll(".note-box");
    const searchValue = searchInput.value

    notes.forEach(function (note) {        
        const noteContentElm = note.querySelector(".user-note");
                
        if (noteContentElm.innerHTML.includes (searchValue)) {
            note.style.display = "flex";
        }
        else {
            note.style.display = "none";     
        }
    });
}

    colorBoxes.forEach(function (color) { 
        
        color.addEventListener("click", function (event) {
        mainColor = event.target.dataset.color;
        
        const selectedColorBox = document.querySelector(".selected");
        selectedColorBox.classList.remove("selected");

        color.classList.add("selected");
        });});

searchBtn.addEventListener("click", searchNotes);
continueBtn.addEventListener("click", addNote);
createNote.addEventListener("click", showModal);
cancleBtn.addEventListener("click", hideModal);
xButton.addEventListener("click", hideModal);

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        hideModal();
    }
});