import "./styles.css";
import { createToDo, addToDo, projects, projectNames, separateToDos } from "./logic.js";
import { newToDoForm, newToDoDialog, confirmButton, modalTitle, modalDescription, modalDueDate, modalPriority, modalProjectName } from "./modal.js";



function eraseContainer() {
    while (container.lastChild){
        container.removeChild(container.lastChild);
    }
}

function displayToDos() {
    
    eraseContainer();
    
    for (let i = 0; i < projects.length; i++) {
        const cardContent = document.createElement("div");
        const title = document.createElement("div");
        const description = document.createElement("div");
        const dueDate = document.createElement("div");
        const priority = document.createElement("div");
        
        title.textContent = `Title: ${projects[i].toDoTitle}`;
        description.textContent = `Description: ${projects[i].toDoDescription}`; 
        dueDate.textContent = `Due Date: ${projects[i].toDoDueDate}`; 
        priority.textContent = `Priority: ${projects[i].getPriority()}`;
        
        cardContent.classList.toggle("card");
        
        cardContent.append(title, description, dueDate, priority);
        container.appendChild(cardContent);
    }
};

function viewAllProjects() {
    
    eraseContainer();
    
    for (let i = 0; i < projectNames.length; i++) {
        const projectName = document.createElement("div");
        projectName.textContent = `${projectNames[i]}`;
        
        projectName.classList.toggle("card");
        
        container.appendChild(projectName);
    }
}

const container = document.querySelector(".container");
const viewProjectsButton = document.querySelector(".viewProjects");

const firstToDo = createToDo("study", "programming", "tomorrow", "high");
addToDo("study", "programming", "tomorrow", "high");
addToDo("eat", "cook", "today", "medium", "diet");
addToDo("sleep", "get recovery", "now", "high", "diet");

console.log(separateToDos("diet"));


confirmButton.addEventListener("click", () => {
    event.preventDefault();
    addToDo(modalTitle.value, modalDescription.value, modalDueDate.value, modalPriority.value, modalProjectName.value);
    displayToDos();
    console.log(projects);
    newToDoForm.reset();
    modalProjectName.disabled = true;
    newToDoDialog.close();
})

viewProjectsButton.addEventListener("click", viewAllProjects);


window.onload = displayToDos();
