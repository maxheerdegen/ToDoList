function createToDo(title, dueDate, priority, project) {
    let toDoTitle = title;
    let toDoDueDate = dueDate;
    let toDoPriority = priority;
    const toDoProject = project;

    const getPriority = () => toDoPriority;
    const changePriority = (newPriority) => toDoPriority = newPriority;

    const forStorage = () => {
        return {toDoTitle, toDoDueDate, toDoPriority, toDoProject};
    }

    return {toDoTitle, toDoDueDate, toDoProject, getPriority, changePriority, forStorage};
}

function addToDo (title, dueDate, priority, project) {
    const toDo = createToDo(title, dueDate, priority, project);
    const storedToDo = toDo.forStorage();
    storedProjects.push(storedToDo);
    localStorage.setItem("projects", JSON.stringify(storedProjects));
    projects.push(toDo);

    if (!projectNames.includes(project)) {
        projectNames.push(project);
    }
}

function separateToDos(projectName) {
    const separatedToDos = projects.filter((el) => {
        return el.toDoProject == projectName;
    })

    return separatedToDos;
}

const projects = [];
const storedProjects = [];
console.table(projects);
const projectNames = ["default"];

export { createToDo, addToDo, projectNames, projects, separateToDos, storedProjects };