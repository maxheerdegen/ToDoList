function createToDo(title, description, dueDate, priority, project) {
    const toDoTitle = title;
    const toDoDescription = description;
    const toDoDueDate = dueDate;
    const toDoPriority = priority;
    const toDoProject = project;

    return {toDoTitle, toDoDescription, toDoDueDate, toDoPriority, toDoProject};
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