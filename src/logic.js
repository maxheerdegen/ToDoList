function createToDo(title, description, dueDate, priority) {
    const toDoTitle = title;
    const toDoDescription = description;
    const toDoDueDate = dueDate;
    const toDOPriority = priority;

    return {toDoTitle, toDoDescription, toDoDueDate, toDOPriority};
}

function addToDo () {
    const toDo = createToDo(title, description, dueDate, priority);
    defaultProjects.push(toDO);  
}

defaultProjects = [];