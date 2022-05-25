import { projects, general } from "./projectsTodos";
import {
  cancelBtn,
  createNewProjectOK,
  createNewToDoOK,
} from "./eventListeners,js";
import edit from "./images/edit.svg";
import delete2 from "./images/delete.svg";
import check from "./images/check.svg";
/*******************************************************************
 * This part for making modules
 ******************************************************************/

function createNewElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  return domElement;
}

//creates popup module
function moduleMaker() {
  const body = document.querySelector("body");
  body.appendChild(createNewElement("div", "module-background", ""));
  const module = createNewElement("div", "module", "");
  body.appendChild(module);
  return module;
}

//makes New Project module
function newToDoModule() {
  const module = moduleMaker();
  module.appendChild(
    createNewElement(
      "div",
      "module-name",
      '<label for="name">To-Do Name:</label>  <input type="text" name="name" id="name" placeholder="Mow Lawn"/>'
    )
  );
  module.appendChild(
    createNewElement(
      "div",
      "module-steps",
      '<label for="steps">To-Do Steps: (separate steps by line break)</label><textarea name="steps" id="steps" cols="30" rows="10" placeholder="step one &#10step two &#10step three &#10etc.."></textarea>'
    )
  );
  module.appendChild(
    createNewElement(
      "div",
      "module-priority",
      '  <label for="priority">Priority: (0-9)</label><input type="number" name="priority" id="priority" min="0" max="9" />'
    )
  );
  module.appendChild(
    createNewElement(
      "div",
      "module-buttons",
      '<button id="ok">OK</button><div></div><button id="cancel">CANCEL</button>'
    )
  );
  createNewToDoOK();
  cancelBtn();
}

//makes New Project module
function newProjectModule() {
  const module = moduleMaker();

  module.appendChild(
    createNewElement(
      "div",
      "module-name",
      '<label for="name">Project Name:</label>  <input type="text" name="name" id="name" placeholder="General">'
    )
  );
  module.appendChild(
    createNewElement(
      "div",
      "module-buttons",
      '<button id="ok">OK</button><div></div><button id="cancel">CANCEL</button>'
    )
  );
  cancelBtn();
  createNewProjectOK();
  displayProjectInDisplay();
}
/**********************************************************************
 * Rendering of the projects and toDos
 **********************************************************************/
function loopProjects() {
  const allProjects = projects;
  allProjects.push(general);
  console.log(allProjects);
}

function displayProjectInDisplay() {
  alert("not done yet");
}

function displayToDoInDisplay(ThisToDo) {
  const toDoDisplay = document.querySelector(".display-to-do-display");
  const toDoCard = createNewElement("div", "to-do-display", "");
  const steps = loopThroughStepsArray(ThisToDo);
  toDoCard.appendChild(steps);
  const toDoName = createNewElement("h1", "to-do-name", `${ThisToDo.name}`);
  toDoCard.appendChild(toDoName);

  const priorityIcons = createNewElement(
    "div",
    "priority-icons",
    `<div class="priority">Priority - ${ThisToDo.priority}</div>`
  );
  const images = createNewElement("div", "images", "");
  images.appendChild(addImages(check));
  images.appendChild(addImages(edit));
  images.appendChild(addImages(delete2));
  priorityIcons.appendChild(images);
  toDoCard.appendChild(priorityIcons);

  toDoDisplay.appendChild(toDoCard);

  loopThroughStepsArray(ThisToDo);
}

function addImages(IMAGE) {
  const newImage = new Image();
  newImage.src = IMAGE;
  return newImage;
}

export { newProjectModule, newToDoModule, displayToDoInDisplay };
/**
 * newProjectsModule exports to eventListeners
 * newToDoModule exports to eventListeners
 */

function loopThroughStepsArray(ToDoArray) {
  const allSteps = createNewElement("ol", "to-do-steps", "");
  ToDoArray.steps.forEach((step) => {
    const thisStep = createNewElement("li", "listItem", step);
    allSteps.appendChild(thisStep);
  });
  return allSteps;
}
