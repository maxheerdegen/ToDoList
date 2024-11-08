function createToDo(title, description, dueDate, priority, project) {
    let toDoTitle = title;
    let toDoDescription = description;
    let toDoDueDate = dueDate;
    let toDoPriority = priority;
    const toDoProject = project;

    const getPriority = () => toDoPriority;
    const changePriority = (newPriority) => toDoPriority = newPriority;

    return {toDoTitle, toDoDescription, toDoDueDate, toDoProject, getPriority, changePriority};
}

function addToDo (title, description, dueDate, priority, project) {
    const toDo = createToDo(title, description, dueDate, priority, project);
    projects.push(toDo);

    if (!projectNames.includes(project) && !project=="") {
        projectNames.push(project);
    }
}

const projects = [];
const projectNames = [];

export { createToDo, addToDo, projects, projectNames };