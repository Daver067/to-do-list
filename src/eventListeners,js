import {
  newProjectModule,
  newToDoModule,
  editToDoModule,
} from "./popupModules";
import {
  toDo,
  Project,
  projects,
  checkForActiveProject,
} from "./projectsTodos";

/****************************************************
 * * Project Listeners
 *****************************************************/

//adds event listener to New Project button in Nav Bar
function newProjectButton() {
  const btn = document.getElementById("newProject");
  btn.addEventListener("click", () => {
    newProjectModule();
    cancelBtn();
    createNewProjectOKListener();
  });
}

//listener for clicking on OK when New Project Module is up
function createNewProjectOKListener() {
  const okButton = document.getElementById("ok");
  okButton.addEventListener("click", () => {
    pushNewActiveProject();
    checkForActiveProject();
    closeModule();
  });
}

//pushes new project to array and sets it active
function pushNewActiveProject() {
  const ProjectName = document.querySelector("#name").value;
  const projectMade = new Project(ProjectName);
  projectMade.toggleActive();
  projects.push(projectMade);
}

//delete project button listener
function deleteProjectListener() {
  projects.forEach((project) => {
    if (project.active) {
      let index = projects.indexOf(project);
      projects.splice(index, 1);
    }
    checkForActiveProject();
  });
}

/*********************************************************
 * To Do Listeners
 *********************************************************/
//clicking on New To-Do Button
function newToDoButton() {
  const btn = document.getElementById("newToDo");
  btn.addEventListener("click", () => {
    newToDoModule();
    ToDoModuleOKListener();
    cancelBtn();
  });
}

//listener for clicking on OK when New ToDo Module is up
function ToDoModuleOKListener() {
  const okButton = document.getElementById("ok");
  okButton.addEventListener("click", () => {
    const toDoCreated = createToDoObjectFromModuleInput();
    let ProjectThisTodoBelongsTo = toDoCreated.parentProject;
    ProjectThisTodoBelongsTo = checkProjectsArrayForToDoCreation(
      ProjectThisTodoBelongsTo
    );
    ProjectThisTodoBelongsTo.toggleActive();
    ProjectThisTodoBelongsTo.addToDo(toDoCreated);
    ProjectThisTodoBelongsTo.renderDoms();
    closeModule();
  });
}
//takes input values from the module form for todo creation and returns an object
function createToDoObjectFromModuleInput() {
  const toDoName = document.querySelector("#name").value;
  const toDoSteps = textAreaToArray();
  const todoPriority = document.querySelector("#priority").value;
  const parentProject = document.getElementById("projectToDoModule").value;
  const toDoCreated = new toDo(
    toDoName,
    toDoSteps,
    todoPriority,
    parentProject
  );
  return toDoCreated;
}

//assigns todo to the proper project
function checkProjectsArrayForToDoCreation(parentProject) {
  let match;
  projects.forEach((project) => {
    if (project.name == parentProject) {
      match = projects[projects.indexOf(project)];
    }
  });
  return match;
}

//function to take textarea info and put it into an Array
function textAreaToArray() {
  let toDoSteps = document.querySelector("#steps").value;
  let toDoStepsArray = toDoSteps.split("\n");
  removeBlanks(toDoStepsArray);
  return toDoStepsArray;
}
//removes any accidental blank steps from array /[^\s\\]/
function removeBlanks(array) {
  for (let i = 0; i < array.length; i++) {
    let regEx = /[^\s\\]/;
    if (array[i].match(regEx)) {
    } else {
      array.splice(i, 1), i--;
    }
  }
}

//clicking on the check marks ToDo as complete
function checkMarkListener(ThisToDoObject) {
  ThisToDoObject.clickedCheckmark();
  checkForActiveProject();
}

//clicking on the edit button allows editting of current todo
function editListener(ThisToDoObject) {
  editToDoModule(ThisToDoObject);
  cancelBtn();
  EditOKListener(ThisToDoObject);
}

//listener for clicking on OK when New ToDo Module is up
function EditOKListener(toDoBeingEdited) {
  const okButton = document.getElementById("ok");
  okButton.addEventListener("click", () => {
    toDoBeingEdited.clickedEdit();
    const toDoCreated = createToDoObjectFromModuleInput();

    if (toDoBeingEdited.parentProject !== toDoCreated.parentProject) {
      toDoBeingEdited.clickedDelete();
      projects.forEach((project) => {
        project.deleteToDo();
      });
    }

    let ProjectThisTodoBelongsTo = toDoCreated.parentProject;
    ProjectThisTodoBelongsTo = checkProjectsArrayForToDoCreation(
      ProjectThisTodoBelongsTo
    );
    ProjectThisTodoBelongsTo.editToDo(toDoCreated);
    ProjectThisTodoBelongsTo.toggleActive();
    ProjectThisTodoBelongsTo.renderDoms();
    closeModule();
  });
}

//clicking on delete button deletes current toDo
function deleteListener(ThisToDoObject) {
  ThisToDoObject.clickedDelete();
  checkForActiveProject();
}

/***************************************************************
 * Both To-Do and Project Listeners
 **************************************************************/
//Cancel for any module
function cancelBtn() {
  const cancelBtn = document.getElementById("cancel");
  cancelBtn.addEventListener("click", closeModule);
}

//function to close module
function closeModule() {
  const body = document.querySelector("body");
  const module = document.querySelector(".module");
  const moduleBackground = document.querySelector(".module-background");
  body.removeChild(module);
  body.removeChild(moduleBackground);
}

/*****************************************************************
 * Page Load Listeners
 ****************************************************************/
//adding listeners to page load
function allListeners() {
  newProjectButton();
  newToDoButton();
}

export {
  allListeners,
  checkMarkListener,
  deleteListener,
  editListener,
  deleteProjectListener,
};
/* 
Alllisteners goed to render page
*/
