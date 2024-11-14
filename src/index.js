import "./styles.css";
import { createToDo, addToDo, projects, projectNames } from "./logic.js";

const firstToDo = createToDo("study", "programming", "tomorrow", "high");
addToDo("study", "programming", "tomorrow", "high");
addToDo("eat", "cook", "today", "medium", "diet");
addToDo("sleep", "get recovery", "now", "high");


console.log(projects[0].getPriority());
console.log(projects[1].getPriority());

projects[0].changePriority("low");
console.log(projects[0].getPriority());

console.table(projects);
console.log(projectNames);
console.log(firstToDo)


const container = document.querySelector(".container");

window.onload = () => {
    for (let i = 0; i < projects.length; i++) {
        const cardContent = document.createElement("div");
        const title = document.createElement("div");
        const description = document.createElement("div");
        const dueDate = document.createElement("div");
        const priority = document.createElement("div");

        title.textContent = `Title: ${projects[i].toDoTitle}`;
        description.textContent = `Description: ${projects[i].toDoDescription}`; 
        dueDate.textContent = `Due Date: ${projects[i].toDoDueDate}`; 
        priority.textContent = `Priority: ${projects[i].toDoPriority}`; 

        
    }
};
