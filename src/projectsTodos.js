class toDo {
  constructor(name, steps, priority) {
    (this.name = name), (this.steps = steps), (this.priority = priority);
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
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

let general = new Project("general");
general.addToDo(mowLawn);
general.addToDo(mowLawn);
general.addToDo(mowLawn);
let projects = [];

export { general, projects, toDo, Project };
/*
toDo goes to eventListeners
Project goes to eventListeners
*/
