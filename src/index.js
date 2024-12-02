import "./styles.css";
import { createToDo, addToDo, projects, projectNames } from "./logic.js";
import { newToDoForm, newToDoDialog, confirmButton, modalTitle, modalDueDate, modalPriority, projectCheckbox, modalProjectName, confirmNewToDo, confirmEditToDo } from "./modal.js";

export { displayProjectName, displayToDos};

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
        const deleteProjectButton = document.createElement("button");
        navProjectName.textContent = `${projectName}`;
        deleteProjectButton.textContent = "X";

        navProjectName.appendChild(deleteProjectButton);
        navDiv.appendChild(navProjectName);

        navProjectName.addEventListener("click", () => {
            eraseContainer();
            displayToDos(projectName);
        })

        deleteProjectButton.addEventListener("click", () => {
            navDiv.removeChild(navProjectName);
            for(let i = 0; i < projectNames.length; i++) {
                if(projectNames[i] === projectName) {
                    projectNames.splice(i, 1);
                    break;
                }
            }

            for(let i = 0; i < projects.length; i++) {
                if(projects[i].toDoProject === projectName) {
                    projects.splice(i, 1);
                    i--;
                }
            }
        })

    }
}

function editToDoDetails () {

    const projectsIndex = event.target.parentNode.dataset.ToDoIndex;
    modalTitle.value = projects[projectsIndex].toDoTitle;
    modalDueDate.value = projects[projectsIndex].toDoDueDate
    modalPriority.value = projects[projectsIndex].getPriority();
    modalProjectName.value = projects[projectsIndex].toDoProject;
    projectCheckbox.disabled = true;

    confirmButton.removeEventListener("click", confirmNewToDo);
    const myFunc = confirmEditToDo.bind(null, projectsIndex);
    confirmButton.addEventListener("click", myFunc, {once: true});

    newToDoDialog.showModal();
};

function displayToDos(projectName) {
    
    eraseContainer();

    for (let i = 0; i < projects.length; i++) {
        if(projects[i].toDoProject === projectName) {
            const cardContent = document.createElement("div");
            const title = document.createElement("div");
            const dueDate = document.createElement("div");
            const priority = document.createElement("div");
            const deleteButton = document.createElement("button");
            const editDetailsButton = document.createElement("button");
            
            title.textContent = `Title: ${projects[i].toDoTitle}`;
            dueDate.textContent = `Due Date: ${projects[i].toDoDueDate}`; 
            priority.textContent = `Priority: ${projects[i].getPriority()}`;
            deleteButton.textContent = "X";
            editDetailsButton.textContent= "Edit Details"
            
            cardContent.dataset.ToDoIndex = i;
            cardContent.classList.toggle("card");
            cardContent.append(title, dueDate, priority, editDetailsButton, deleteButton);
            container.appendChild(cardContent);

            editDetailsButton.addEventListener("click", editToDoDetails);

            deleteButton.addEventListener("click", () => {
                container.removeChild(cardContent);
                projects.splice(cardContent.dataset.ToDoIndex, 1);
                displayToDos(projectName);
            })
        }
    }

    console.table(projects);
    console.table(projectNames);
};

const container = document.querySelector(".container");
const navDiv = document.querySelector(".nav");

const firstToDo = createToDo("study", "tomorrow", "high", "default");
addToDo("study", "tomorrow", "high", "default");
addToDo("eat", "today", "medium", "diet");
addToDo("sleep", "now", "high", "default");

firstLoadUp();
