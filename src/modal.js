const showDialogButton = document.querySelector(".showDialog");
const newToDoDialog = document.querySelector(".newToDoDialog");
const cancelButton = document.querySelector(".cancel");
const newToDoForm = document.querySelector(".newToDoForm");
const confirmButton = document.querySelector(".confirm");
const modalTitle = document.querySelector("#title");
const modalDescription = document.querySelector("#description");
const modalDueDate = document.querySelector("#dueDate");
const modalPriority = document.querySelector("#priority");
const projectCheckbox = document.querySelector("#projectCheckbox");
const modalProjectName = document.querySelector("#project");


showDialogButton.addEventListener("click", () => {
    newToDoDialog.showModal();
})

cancelButton.addEventListener("click", () => {
    modalProjectName.disabled = true;
    newToDoForm.reset();
})

projectCheckbox.addEventListener("click", () => {
    if (projectCheckbox.checked) {
        modalProjectName.disabled = false;
    }
    else {
        modalProjectName.value = "default";
        modalProjectName.disabled = true;
    }
})

export { newToDoForm, newToDoDialog, confirmButton, modalTitle, modalDescription, modalDueDate, modalPriority, modalProjectName };