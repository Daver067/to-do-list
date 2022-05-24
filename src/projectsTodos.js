class toDo {
  constructor(name, steps, priority) {
    (this.name = name), (this.steps = steps), (this.priority = priority);
  }
}

class Project {
  constructor(name, toDo1, toDo2, toDo3) {
    this.name = name;
    this.toDos = [toDo1, toDo2, toDo3];
  }

  addToDo = (newTodo) => {
    this.toDos.push(newTodo);
  };
}

let mowLawn = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  6
);

//function to add a new to-do to a project
function addToDo(projectToAddTo, toDoName, toDoSteps, toDoPriority) {
  projectToAddTo.push(new toDo(toDoName, toDoSteps, toDoPriority));
}

//function to create a new project
function createNewProject(name) {
  const NewProject = new Project(name);
  projects.push(NewProject);
}
let general = new Project("general", mowLawn, mowLawn, mowLawn);
let projects = [];

export { addToDo, createNewProject, projects, general };
