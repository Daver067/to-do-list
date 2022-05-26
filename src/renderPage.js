import { allListeners } from "./eventListeners,js";

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
    `<div class="project-buttons"><button id="newProject">New Project</button><button id="newToDo">New To-Do</button></div>`
  );
  return nav;
}

//creates Display
function createDisplay() {
  const display = createNewElement(
    "div",
    "display",
    '<div class="project-display"><h1 class="project-display-header">General</h1><button id="rmProject">Delete Project</button></div><div class="display-to-do-display"><div class="to-do-display"><h1 class="to-do-name">Mow Lawn</h1><ol class="to-do-steps"><li>Prep Lawn Mower</li><li>Mow Lawn</li><li>Dispose of grass</li><li>Clean Up</li></ol><div class="priority-icons"><div class="priority">Priority - 6</div><div class="images"><img src="../src/images/check.svg" alt="check" /><img src="../src/images/edit.svg" alt="edit" /><img src="../src/images/delete.svg" alt="delete" /></div></div></div>'
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

//renders the page, export this function to index to render page
function renderPage() {
  const container = createNewElement("div", "container", "");
  document.querySelector("body").appendChild(container);
  container.appendChild(createHeader());
  container.appendChild(createDisplay());
  container.appendChild(createFooter());
  container.appendChild(createNav());
  allListeners();
}

export { renderPage, createNewElement };
//render page used in index.html
