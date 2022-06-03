import { deleteProjectListener } from "./eventListeners,js";

function createNewElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  return domElement;
}

//creates header and caption
function createHeader() {
  const header = createNewElement("div", "header", "");
  const caption = createNewElement(
    "div",
    "caption",
    '<h1 id="pageTitle">To-Do-Me</h1>'
  );
  header.appendChild(caption);
  return header;
}

//creates nav bar and buttons
function createNav() {
  const nav = createNewElement(
    "div",
    "nav",
    `<div class="project-buttons"><button id="newProject">New Project</button><button id="newToDo">New To-Do</button></div><div class="project-nav-bar"</div>`
  );
  return nav;
}

//creates Display
function createDisplay() {
  const display = createNewElement(
    "div",
    "display",
    '<div class="project-display"><h1 class="project-display-header">General</h1></div><div class="display-to-do-display"></div>'
  );
  return display;
}

//creates footer and adds text
function createFooter() {
  const footer = createNewElement(
    "div",
    "footer",
    "&copy The Daver gets to move to CostaRica project 2022"
  );
  return footer;
}
// adds project delete button to display
function projectDeleteBtn() {
  const btnHouse = document.querySelector(".project-display");
  const btn = document.createElement("button");
  btn.id = "rmProject";
  btn.innerHTML = "Delete Project";
  btn.addEventListener("click", deleteProjectListener);
  btnHouse.appendChild(btn);
}

//renders the page, export this function to index to render page
function renderPage() {
  const container = createNewElement("div", "container", "");
  document.querySelector("body").appendChild(container);
  container.appendChild(createHeader());
  container.appendChild(createNav());
  container.appendChild(createDisplay());
  container.appendChild(createFooter());
  projectDeleteBtn();
}

export { renderPage, createNewElement };
//render page used in index.html
