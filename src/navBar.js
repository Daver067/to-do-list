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
      parentNode.appendChild(
        createNewElement("li", `to-do-shortcut`, `${todo.name.toUpperCase()}`)
      );
    } else parentNode.append(".");
  });
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
