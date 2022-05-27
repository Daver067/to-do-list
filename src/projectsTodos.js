import { createNewElement } from "./renderPage";
import { allImages } from "./imageLoaderAndListener";
import { checkMarkListener } from "./eventListeners,js";

/***************************************************************
 * TODO CLASS
 **************************************************************/
class toDo {
  constructor(name, steps, priority) {
    (this.name = name),
      (this.steps = steps),
      (this.priority = priority),
      (this.completed = false);
  }

  clickedCheckmark = () => {
    this.completed ? (this.completed = false) : (this.completed = true);
  };

  CreateDomElement = () => {
    const toDoCard = createNewElement("div", "to-do-display", "");
    if (this.completed) {
      toDoCard.classList.add("completed");
    }
    const steps = this.#stepArrayToLi();
    toDoCard.appendChild(steps);
    const toDoName = createNewElement("h1", "to-do-name", `${this.name}`);
    toDoCard.appendChild(toDoName);

    const priorityIcons = createNewElement(
      "div",
      "priority-icons",
      `<div class="priority">Priority - ${this.priority}</div>`
    );
    const images = createNewElement("div", "images", "");
    const checkMark = this.#addImages(allImages.check);
    checkMark.addEventListener("click", () => {
      checkMarkListener(this);
    });
    images.appendChild(checkMark);
    images.appendChild(this.#addImages(allImages.edit));
    images.appendChild(this.#addImages(allImages.delete));
    priorityIcons.appendChild(images);
    toDoCard.appendChild(priorityIcons);

    return toDoCard;
    //remove below this line once I figure a proper way to display all Todos in a Project
    //const toDoDisplay = document.querySelector(".display-to-do-display");
    //toDoDisplay.appendChild(toDoCard);
  };

  //Private Functions Below!
  #addImages = (IMAGE) => {
    const newImage = new Image();
    newImage.src = IMAGE;
    return newImage;
  };

  #stepArrayToLi = () => {
    const allSteps = createNewElement("ol", "to-do-steps", "");
    this.steps.forEach((step) => {
      const thisStep = createNewElement("li", "listItem", step);
      allSteps.appendChild(thisStep);
    });
    return allSteps;
  };
}

/******************************************************************
 * CLASS PROJECT
 *****************************************************************/
class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
    this.toDoDoms = [];
    this.active = false;
  }

  toggleActive = () => {
    this.active == true ? (this.active = false) : (this.active = true);
  };

  addToDo = (newTodo) => {
    this.toDos.push(newTodo);
  };

  cleartoDoDoms = () => {
    this.toDoDoms = [];
  };

  turnToDosIntoDoms = () => {
    this.cleartoDoDoms();
    this.toDos.forEach((todo) => {
      this.toDoDoms.push(todo.CreateDomElement());
    });
  };

  clearDisplay = () => {
    const display = document.querySelector(".display-to-do-display");
    while (display.firstElementChild) {
      display.removeChild(display.firstElementChild);
    }
  };
  renderDoms = () => {
    this.clearDisplay();
    this.turnToDosIntoDoms();
    this.toDoDoms.forEach((dom) => {
      const toDoDisplay = document.querySelector(".display-to-do-display");
      toDoDisplay.appendChild(dom);
    });
  };
}

/***************************************************************
 * functions for projects and todos
 **************************************************************/
function checkForActiveProject() {
  projects.forEach((project) => {
    if (project.active == true) {
      project.turnToDosIntoDoms();
      project.renderDoms();
    }
  });
}
/***************************************************************
 * currently this is just for building site
 ***********************************************************/
let mowLawn = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  6
);

let General = new Project("General");
General.addToDo(mowLawn);
General.addToDo(mowLawn);
General.addToDo(mowLawn);

let projects = ["junk", "more junk", General, "test"];

export { General, projects, toDo, Project, checkForActiveProject };
/*
toDo goes to eventListeners
Project goes to eventListeners
general to renderPage
projects to...? i forget
*/
