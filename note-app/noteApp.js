

const modalScreen = document.querySelector(".modal-screen");
const modal = document.querySelector(".modal");
const xButton = document.querySelector(".x-btn");
const notesText = document.querySelector(".text");

const createNote = document.querySelector(".create-note");

const createBtn = document.querySelector(".create");
const cancleBtn = document.querySelector(".cancle");


function showModal() {
    modalScreen.classList.remove("hidden");
}
function hideModal() {
    modalScreen.classList.add("hidden");
}


createNote.addEventListener("click", showModal);

xButton.addEventListener("click", hideModal);

createBtn.addEventListener("click", hideModal);
cancleBtn.addEventListener("click", hideModal);