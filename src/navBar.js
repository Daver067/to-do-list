import { checkForActiveProject, projects } from "./projectsTodos";
import { createNewElement } from "./renderPage";
import { allImages } from "./imageLoaderAndListener";

//creates a new DOM element for a Project and gives it n image... and adds event listeners... yeah it does a lot
function createNewProjectNav(project) {
  const thisImage = new Image();
  thisImage.onclick = "event.stopPropagation()";
  thisImage.src = minMaxImageLoader(project);

  thisImage.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleExpandedProject(project);
    const changeImage = new Image();
    changeImage.src = minMaxImageLoader(project);
  });

  const newProject = createNewElement(
    "ul",
    "project-shortcut",
    `<div id=nameAndImage>${project.name}</div>`
  );
  newProject.firstElementChild.appendChild(thisImage);
  newProject.addEventListener("click", () => {
    project.toggleActive();
    if (!project.expanded) {
      project.toggleExpanded(project);
    }
    checkForActiveProject();
  });
  return newProject;
}

//creates Dom elements for each toDo in the project and appends them to the project dom
function appendToDoElementsToProject(project, parentNode) {
  project.toDos.forEach((todo) => {
    if (project.expanded) {
      let newTodoNavDom = createNewElement(
        "li",
        `to-do-shortcut`,
        `${todo.name.toUpperCase()}`
      );
      newTodoNavDom = backgroundColorPriority(todo, newTodoNavDom);
      if (todo.completed) {
        newTodoNavDom.classList.add("strikeThrough");
        const check = new Image();
        check.src = allImages.checkGreen;
        newTodoNavDom.appendChild(check);
      }
      parentNode.appendChild(newTodoNavDom);
    } else parentNode.append(".");
  });
}

function backgroundColorPriority(todo, todoDom) {
  if (todo.priority >= 0 && todo.priority <= 3) {
    todoDom.style.backgroundColor = "rgba(0,255,0,0.3";
  }
  if (todo.priority >= 4 && todo.priority <= 6) {
    todoDom.style.backgroundColor = "rgba(255,165,0,0.3";
  }
  if (todo.priority >= 7) {
    todoDom.style.backgroundColor = "rgba(255,0,0,0.3";
  }
  return todoDom;
}

//if the project is active makes a minimize and vice versa
function minMaxImageLoader(project) {
  return project.expanded ? allImages.minimize : allImages.maximize;
}

//clears the Nav so the newly appended items dont overlap
function clearNav() {
  const nav = document.querySelector(".project-nav-bar");
  while (nav.firstElementChild) {
    nav.removeChild(nav.firstElementChild);
  }
}

//renders the nav bar with all current project with all toDos
function renderNav() {
  clearNav();
  const NavBar = document.querySelector(".project-nav-bar");
  projects.forEach((project) => {
    const DomElement = createNewProjectNav(project);
    appendToDoElementsToProject(project, DomElement);
    NavBar.appendChild(DomElement);
  });
}

//event listener for expanding and minimizing the navbar projects
function toggleExpandedProject(project) {
  project.toggleExpanded();
  checkForActiveProject();
}

export { renderNav };
