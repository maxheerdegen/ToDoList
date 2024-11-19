function createToDo(title, dueDate, priority, project) {
    let toDoTitle = title;
    let toDoDueDate = dueDate;
    let toDoPriority = priority;
    const toDoProject = project;

    const getPriority = () => toDoPriority;
    const changePriority = (newPriority) => toDoPriority = newPriority;

    return {toDoTitle, toDoDueDate, toDoProject, getPriority, changePriority};
}

function addToDo (title, dueDate, priority, project) {
    const toDo = createToDo(title, dueDate, priority, project);
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
const projectNames = ["default"];

export { createToDo, addToDo, projectNames, projects, separateToDos };