import { allListeners, cancelBtn } from "./eventListeners,js";
import { projects, general } from "./projectsTodos";

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

//creates footer and adds text
function createFooter() {
  const footer = createNewElement(
    "div",
    "footer",
    "&copy The Daver gets to move to CostaRica project 2022"
  );
  return footer;
}

//makes New Project module
function newProjectModule() {
  const body = document.querySelector("body");
  body.appendChild(createNewElement("div", "module-background", ""));

  const module = createNewElement("div", "module", "");
  body.appendChild(module);
  module.appendChild(
    createNewElement(
      "div",
      "module-name",
      '<label for="name">Project Name:</label>  <input type="text" name="name" id="name" />'
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
}

//renders the page, export this function to index to render page
function renderPage() {
  const container = createNewElement("div", "container", "");
  document.querySelector("body").appendChild(container);
  container.appendChild(createHeader());
  container.appendChild(createFooter());
  container.appendChild(createNav());
  allListeners();
  loopProjects();
}

function loopProjects() {
  const allProjects = projects;
  allProjects.push(general);
  console.log(allProjects);
}

export { renderPage, newProjectModule };
//render page used in index.html
//newProjectModule used in eventListeners

/* FOR MODULE

<div class="module-name">
  <label for="name">Project Name:</label>
  <input type="text" name="name" id="name" />
</div>
<div class="module-steps">
  <label for="steps">To-Do Steps: (separate steps by line break)</label>
  <textarea name="steps" id="steps" cols="30" rows="10"></textarea>
</div>
<div class="module-priority">
  <label for="priority">Priority: (0-9)</label>
  <input type="number" name="priority" id="priority" min="0" max="9" />
</div>
<div class="module-buttons">
  <button id="ok">OK</button>
  <button id="cancel">cancel</button>
</div>

*/
