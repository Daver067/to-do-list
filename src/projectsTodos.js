import { createNewElement } from "./renderPage";
import { allImages } from "./imageLoaderAndListener";

/***************************************************************
 * TODO CLASS
 **************************************************************/
class toDo {
  constructor(name, steps, priority) {
    (this.name = name), (this.steps = steps), (this.priority = priority);
  }

  CreateDomElement = () => {
    const toDoCard = createNewElement("div", "to-do-display", "");
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
    images.appendChild(this.#addImages(allImages.check));
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
  }

  addToDo = (newTodo) => {
    this.toDos.push(newTodo);
  };

  cleartoDoDoms = () => {
    this.toDoDoms = [];
  };

  turnToDosIntoDoms = () => {
    this.cleartoDoDoms;
    this.toDos.forEach((todo) => {
      this.toDoDoms.push(todo.CreateDomElement());
    });
  };

  renderDoms = () => {
    this.toDoDoms.forEach((dom) => {
      const toDoDisplay = document.querySelector(".display-to-do-display");
      toDoDisplay.appendChild(dom);
    });
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
let projects = [general];

export { general, projects, toDo, Project };
/*
toDo goes to eventListeners
Project goes to eventListeners
*/
