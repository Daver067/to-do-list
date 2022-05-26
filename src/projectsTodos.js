import { createNewElement } from "./renderPage";
import edit from "./images/edit.svg";
import delete2 from "./images/delete.svg";
import check from "./images/check.svg";

class toDo {
  constructor(name, steps, priority) {
    (this.name = name), (this.steps = steps), (this.priority = priority);
  }

  CreateDomElement = () => {
    const toDoCard = createNewElement("div", "to-do-display", "");
    const steps = this.stepArrayToLi();
    toDoCard.appendChild(steps);
    const toDoName = createNewElement("h1", "to-do-name", `${this.name}`);
    toDoCard.appendChild(toDoName);

    const priorityIcons = createNewElement(
      "div",
      "priority-icons",
      `<div class="priority">Priority - ${this.priority}</div>`
    );
    const images = createNewElement("div", "images", "");
    images.appendChild(this.addImages(check));
    images.appendChild(this.addImages(edit));
    images.appendChild(this.addImages(delete2));
    priorityIcons.appendChild(images);
    toDoCard.appendChild(priorityIcons);

    const toDoDisplay = document.querySelector(".display-to-do-display");
    toDoDisplay.appendChild(toDoCard);
  };

  addImages = (IMAGE) => {
    const newImage = new Image();
    newImage.src = IMAGE;
    return newImage;
  };

  stepArrayToLi = () => {
    const allSteps = createNewElement("ol", "to-do-steps", "");
    this.steps.forEach((step) => {
      const thisStep = createNewElement("li", "listItem", step);
      allSteps.appendChild(thisStep);
    });
    return allSteps;
  };
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

/***************************************************************
 * functions for projects and todos
 **************************************************************/

/***************************************************************
 * currently this is just for building site
 ***********************************************************/
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
