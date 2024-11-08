import "./styles.css";
import { createToDo, addToDo, projects, projectNames } from "./logic.js";

const firstToDo = createToDo("study", "programming", "tomorrow", "high");
addToDo("study", "programming", "tomorrow", "high");
addToDo("eat", "cook", "today", "medium", "diet");


console.log(projects[0].getPriority());
console.log(projects[1].getPriority());

projects[0].changePriority("low");
console.log(projects[0].getPriority());

console.table(projects);
console.log(projectNames);
console.log(firstToDo)