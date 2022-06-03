import { createNewElement } from "./renderPage";
import { allImages } from "./imageLoaderAndListener";
import {
  checkMarkListener,
  deleteListener,
  editListener,
} from "./eventListeners,js";
import { renderNav } from "./navBar";

/***************************************************************
 * TODO CLASS
 **************************************************************/
class toDo {
  constructor(name, steps, priority, project) {
    (this.name = name),
      (this.steps = steps),
      (this.priority = priority),
      (this.completed = false),
      (this.delete = false),
      (this.parentProject = project),
      (this.edit = false);
  }

  //for clicking individual checkmark in toDo. makes completed status true
  clickedCheckmark = () => {
    this.completed ? (this.completed = false) : (this.completed = true);
  };

  clickedDelete = () => {
    this.delete = true;
  };

  clickedEdit = () => {
    this.edit = true;
  };

  //creates Dom element "to-do-display" with all children according to this classes keys
  CreateDomElement = () => {
    let toDoCard = createNewElement("div", "to-do-display", "");
    if (this.completed) {
      toDoCard.appendChild(createNewElement("div", "completed", "COMPLETED"));
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
    toDoCard = this.#priorityColorChange(toDoCard);
    const images = createNewElement("div", "images", "");

    //changes checkmark to uncheck
    if (this.completed) {
      const unCheckMark = this.#addImages(allImages.uncheck);
      unCheckMark.addEventListener("click", () => {
        checkMarkListener(this);
      });
      images.appendChild(unCheckMark);
    } else {
      const checkMark = this.#addImages(allImages.check);
      checkMark.addEventListener("click", () => {
        checkMarkListener(this);
      });
      images.appendChild(checkMark);
    }
    // end of this big function

    const editButton = this.#addImages(allImages.edit);
    editButton.addEventListener("click", () => {
      editListener(this);
    });
    images.appendChild(editButton);

    const deleteBuitton = this.#addImages(allImages.delete);
    deleteBuitton.addEventListener("click", () => {
      deleteListener(this);
    });
    images.appendChild(deleteBuitton);

    priorityIcons.appendChild(images);
    toDoCard.appendChild(priorityIcons);

    return toDoCard;
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
  #priorityColorChange = (toDoCard) => {
    if (this.priority >= 0 && this.priority <= 3) {
      toDoCard.style.borderColor = "green";
    }
    if (this.priority >= 4 && this.priority <= 6) {
      toDoCard.style.borderColor = "orange";
    }
    if (this.priority >= 7) {
      toDoCard.style.borderColor = "red";
    }
    return toDoCard;
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
    this.expanded = true;
  }

  toggleExpanded = () => {
    this.expanded == true ? (this.expanded = false) : (this.expanded = true);
  };
  toggleInactive = () => {
    this.active = false;
  };
  toggleActive = () => {
    projects.forEach((project) => {
      project.toggleInactive();
    });
    this.active = true;
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
    renderNav();
  };

  deleteToDo = () => {
    let index = 0;
    this.toDos.forEach((todo) => {
      if (todo.delete) {
        this.toDos.splice(index, 1);
        index--;
      }
      index++;
    });
  };

  editToDo = (newToDo) => {
    let index = 0;
    let moved = true;
    this.toDos.forEach((todo) => {
      if (todo.edit) {
        let checkedOrNot = todo.completed;
        newToDo.completed = checkedOrNot;
        this.toDos[index] = newToDo;
        moved = false;
      }
      index++;
    });
    if (moved) {
      this.toDos.push(newToDo);
    }
  };
}

/***************************************************************
 * functions for projects and todos
 **************************************************************/
function checkForActiveProject() {
  const projectHeader = document.querySelector(".project-display-header");
  let anyActive = false;
  projects.forEach((project) => {
    if (project.active == true) {
      project.deleteToDo();
      project.turnToDosIntoDoms();
      project.renderDoms();
      projectHeader.textContent = project.name;
      anyActive = true;
    }
  });
  //makes first project active after deleting if there is a first projecct
  if (!anyActive && projects[0]) {
    projects[0].toggleActive();
    checkForActiveProject();
  }
  if (!anyActive && !projects[0]) {
    let emptyProject = new Project("General");
    projects.push(emptyProject);
    emptyProject.toggleActive();
    checkForActiveProject();
  }

  renderNav();
}

/***************************************************************
 * currently this is just for building site
 ***********************************************************/
let mowLawn = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  6,
  "General"
);
let mowLawn2 = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  8,
  "General"
);
let mowLawn3 = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  1,
  "General"
);
let mowLawn4 = new toDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  1,
  "General"
);
let anotherToDo = new toDo(
  "stuff",
  ["thing", "another thing", "ok this is it"],
  5,
  "Random"
);

let Random = new Project("Random");
Random.addToDo(anotherToDo);
Random.addToDo(mowLawn4);
let general = new Project("General");
let General = new Project("General");
General.addToDo(mowLawn);
General.addToDo(mowLawn2);
General.addToDo(mowLawn3);

let projects = [General];
projects.push(Random);

export { General, projects, toDo, Project, checkForActiveProject };
/*
toDo goes to eventListeners
Project goes to eventListeners
general to renderPage
*/
