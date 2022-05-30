import { projects } from "./projectsTodos";
import { createNewElement } from "./renderPage";
import { allImages } from "./imageLoaderAndListener";

//creates a new DOM element for a Project and gives it n image
function createNewProjectNav(project) {
  const thisImage = new Image();
  thisImage.src = minMaxImageLoader(project);
  thisImage.addEventListener("click", () => {
    toggleExpandedProject(project);
  });
  const newProject = createNewElement(
    "ul",
    "project-shortcut",
    `<div id=nameAndImage>${project.name}</div>`
  );
  newProject.firstElementChild.appendChild(thisImage);
  return newProject;
}

//creates Dom elements for each toDo in the project and appends them to the project dom
function appendToDoElementsToProject(project, parentNode) {
  project.toDos.forEach((todo) => {
    if (project.expanded) {
      parentNode.appendChild(
        createNewElement("li", `to-do-shortcut`, `${todo.name.toUpperCase()}`)
      );
    } else parentNode.append(".");
  });
}

//if the project is active makes a minimize and vice versa
function minMaxImageLoader(project) {
  return project.active ? allImages.minimize : allImages.maximize;
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
  const NavBar = document.querySelector(".project-nav-bar");
  clearNav();
  projects.forEach((project) => {
    const DomElement = createNewProjectNav(project);
    appendToDoElementsToProject(project, DomElement);
    NavBar.appendChild(DomElement);
  });
}

//event listener for expanding and minimizing the navbar projects
function toggleExpandedProject(project) {
  project.toggleExpanded();
  renderNav();
}

export { renderNav };
