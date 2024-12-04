import { displayProjectName, displayToDos } from "./index.js";
import { addToDo, projects, storedProjects } from "./logic";

const showDialogButton = document.querySelector(".showDialog");
const newToDoDialog = document.querySelector(".newToDoDialog");
const cancelButton = document.querySelector(".cancel");
const newToDoForm = document.querySelector(".newToDoForm");
const confirmButton = document.querySelector(".confirm");
const modalTitle = document.querySelector("#title");
const modalDueDate = document.querySelector("#dueDate");
const modalPriority = document.querySelector("#priority");
const projectCheckbox = document.querySelector("#projectCheckbox");
const modalProjectName = document.querySelector("#project");


function confirmNewToDo() {
    event.preventDefault();
    displayProjectName(modalProjectName.value);
    addToDo(modalTitle.value, modalDueDate.value, modalPriority.value, modalProjectName.value);
    displayToDos(modalProjectName.value);
    newToDoForm.reset();
    modalProjectName.disabled = true;
    newToDoDialog.close();
}

function confirmEditToDo(projectsIndex) {
    event.preventDefault();

    projects[projectsIndex].toDoTitle = modalTitle.value;
    projects[projectsIndex].toDoDueDate = modalDueDate.value;
    projects[projectsIndex].changePriority(modalPriority.value);

    storedProjects[projectsIndex].toDoTitle = modalTitle.value;
    storedProjects[projectsIndex].toDoDueDate = modalDueDate.value;
    storedProjects[projectsIndex].toDoPriority = modalPriority.value;
    
    localStorage.setItem("projects", JSON.stringify(storedProjects));

    displayToDos(projects[projectsIndex].toDoProject);
    newToDoForm.reset();
    modalProjectName.disabled = true;
    newToDoDialog.close();

}


showDialogButton.addEventListener("click", () => {
    projectCheckbox.disabled = false;
    newToDoDialog.showModal();
    confirmButton.removeEventListener("click", confirmNewToDo);
    confirmButton.addEventListener("click", confirmNewToDo);
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


export { newToDoForm, newToDoDialog, confirmButton, modalTitle, modalDueDate, modalPriority, projectCheckbox, modalProjectName, confirmNewToDo, confirmEditToDo };