import "./styles.css";
import { addToDo, projects, projectNames, storedProjects } from "./logic.js";
import { newToDoDialog, confirmButton, modalTitle, modalDueDate, modalPriority, projectCheckbox, modalProjectName, confirmNewToDo, confirmEditToDo } from "./modal.js";

export { displayProjectName, displayToDos };

function firstLoadUp() {
    restoreProjects();
    displayToDos("default");
    const navDefault = document.querySelector(".defaultProjects");
    navDefault.addEventListener("click", () => {
        eraseContainer();
        displayToDos("default");
    })
}

function restoreProjects() {
    const restoredProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    console.table(restoredProjects);
    for(let i=0; i < restoredProjects.length; i++) {
        displayProjectName(restoredProjects[i].toDoProject);
        addToDo(restoredProjects[i].toDoTitle, restoredProjects[i].toDoDueDate, restoredProjects[i].toDoPriority, restoredProjects[i].toDoProject);
    }
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
                    storedProjects.splice(i,1);
                    localStorage.setItem("projects", JSON.stringify(storedProjects));
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
                storedProjects.splice(cardContent.dataset.ToDoIndex, 1);
                localStorage.setItem("projects", JSON.stringify(storedProjects));
                displayToDos(projectName);
            })
        }
    }

    console.table(projects);
    console.table(projectNames);
};

const container = document.querySelector(".container");
const navDiv = document.querySelector(".nav");


firstLoadUp();