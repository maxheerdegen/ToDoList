import "./styles.css";
import { createToDo, addToDo, projectNames, separateToDos } from "./logic.js";
import { newToDoForm, newToDoDialog, confirmButton, modalTitle, modalDescription, modalDueDate, modalPriority, modalProjectName } from "./modal.js";

function firstLoadUp() {
    displayToDos("default");
    const navDefault = document.createElement("div");
    navDefault.textContent = "default";
    navDefault.addEventListener("click", () => {
        eraseContainer();
        displayToDos("default");
    })

    navDiv.appendChild(navDefault);
}

function eraseContainer() {
    while (container.lastChild){
        container.removeChild(container.lastChild);
    }
}

function displayProjectName(projectName) {
    if(!projectNames.includes(projectName)) {
        const navProjectName = document.createElement("div");
        navProjectName.textContent = `${projectName}`;

        navProjectName.addEventListener("click", () => {
            eraseContainer();
            displayToDos(projectName);
        })

        navDiv.appendChild(navProjectName);
    }
}

function displayToDos(projectName) {
    
    eraseContainer();
    
    const toDosInProject = separateToDos(projectName);

    for (let i = 0; i < toDosInProject.length; i++) {
        const cardContent = document.createElement("div");
        const title = document.createElement("div");
        const description = document.createElement("div");
        const dueDate = document.createElement("div");
        const priority = document.createElement("div");
        
        title.textContent = `Title: ${toDosInProject[i].toDoTitle}`;
        description.textContent = `Description: ${toDosInProject[i].toDoDescription}`; 
        dueDate.textContent = `Due Date: ${toDosInProject[i].toDoDueDate}`; 
        priority.textContent = `Priority: ${toDosInProject[i].getPriority()}`;
        
        cardContent.classList.toggle("card");
        
        cardContent.append(title, description, dueDate, priority);
        container.appendChild(cardContent);
    }
};

const container = document.querySelector(".container");
const navDiv = document.querySelector(".nav");

const firstToDo = createToDo("study", "programming", "tomorrow", "high", "default");
addToDo("study", "programming", "tomorrow", "high", "default");
addToDo("eat", "cook", "today", "medium", "diet");
addToDo("sleep", "get recovery", "now", "high", "default");

confirmButton.addEventListener("click", () => {
    event.preventDefault();
    displayProjectName(modalProjectName.value);
    addToDo(modalTitle.value, modalDescription.value, modalDueDate.value, modalPriority.value, modalProjectName.value);
    displayToDos(modalProjectName.value);
    newToDoForm.reset();
    modalProjectName.disabled = true;
    newToDoDialog.close();
})

firstLoadUp();
