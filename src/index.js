import "./styles.css";
import { createToDo, addToDo, projects, projectNames } from "./logic.js";


addToDo("study", "programming", "tomorrow", "high");
addToDo("eat", "cook", "today", "high", "diet");


console.log(projects);
console.log(projectNames);