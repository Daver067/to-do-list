import { Project, projects, toDo } from "./projectsTodos";

// takes the list of projects and returns data that is saveable to firebase
function parseProjectsToJSON(projs) {
  const saveData = [];

  // for each project pull the data we need
  projs.forEach((project) => {
    const projectData = {};
    projectData.name = project.name;
    projectData.toDos = [];

    //for each todo in the project pull the data we need
    project.toDos.forEach((todo) => {
      const todoInfo = {};
      todoInfo.name = todo.name;
      todoInfo.steps = todo.steps;
      todoInfo.priority = todo.priority;
      todoInfo.completed = todo.completed;
      todoInfo.parentProject = project.name;

      // adds the new todo info to the projects todo Array
      projectData.toDos.push(todoInfo);
    });
    // adds the project data to the saveData Array for each iteration of the loop
    saveData.push(projectData);
  });
  return JSON.stringify(saveData);
}

// returns an array of projects with toDos
function parseDataToProjectsTodos(rawdata) {
  const data = JSON.parse(rawdata);
  // the return item
  const savedProjects = [];
  // for each project in the data create a new project
  data.forEach((project) => {
    const newProject = new Project(project.name);
    const thisProjTodos = [];
    // for each todo in the projects todo list make a todo and add it to the project
    project.toDos.forEach((todo) => {
      const newToDo = new toDo(
        todo.name,
        todo.steps,
        todo.priority,
        todo.project,
        todo.completed
      );
      newProject.addToDo(newToDo);
    });
    savedProjects.push(newProject);
  });
  return savedProjects;
}

const exampleData = {
  projectName: "general",
  projectTodos: [
    {
      toDoName: "Mow Lawn",
      toDoSteps: [
        "Prep Lawn Mower",
        "Mow Lawn",
        "Dispose of Grass",
        "Clean Up",
      ],
      toDoPriority: 6,
      toDoBelongsTo: "General",
    },
    {
      toDoName: "Mow Lawn",
      toDoSteps: [
        "Prep Lawn Mower",
        "Mow Lawn",
        "Dispose of Grass",
        "Clean Up",
      ],
      toDoPriority: 8,
      toDoBelongsTo: "General",
    },
    {
      toDoName: "Mow Lawn",
      toDoSteps: [
        "Prep Lawn Mower",
        "Mow Lawn",
        "Dispose of Grass",
        "Clean Up",
      ],
      toDoPriority: 1,
      toDoBelongsTo: "General",
    },
  ],
};

export { parseDataToProjectsTodos, parseProjectsToJSON };
