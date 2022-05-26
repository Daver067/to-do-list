import { createNewElement } from "./renderPage";

/*******************************************************************
 * This part for making modules
 ******************************************************************/

//creates popup module
function moduleMaker() {
  const body = document.querySelector("body");
  body.appendChild(createNewElement("div", "module-background", ""));
  const module = createNewElement("div", "module", "");
  body.appendChild(module);
  return module;
}

//makes New ToDo popup module
function newToDoModule() {
  const module = moduleMaker();
  module.appendChild(
    createNewElement(
      "div",
      "module-name",
      '<label for="name">To-Do Name:</label>  <input type="text" name="name" id="name" placeholder="Mow Lawn"/>'
    )
  );
  module.appendChild(
    createNewElement(
      "div",
      "module-steps",
      '<label for="steps">To-Do Steps: (separate steps by line break)</label><textarea name="steps" id="steps" cols="30" rows="10" placeholder="step one &#10step two &#10step three &#10etc.."></textarea>'
    )
  );
  module.appendChild(
    createNewElement(
      "div",
      "module-priority",
      '  <label for="priority">Priority: (0-9)</label><input type="number" name="priority" id="priority" min="0" max="9" />'
    )
  );
  module.appendChild(
    createNewElement(
      "div",
      "module-buttons",
      '<button id="ok">OK</button><div></div><button id="cancel">CANCEL</button>'
    )
  );
}

//makes New Project popup module
function newProjectModule() {
  const module = moduleMaker();

  module.appendChild(
    createNewElement(
      "div",
      "module-name",
      '<label for="name">Project Name:</label>  <input type="text" name="name" id="name" placeholder="General">'
    )
  );
  module.appendChild(
    createNewElement(
      "div",
      "module-buttons",
      '<button id="ok">OK</button><div></div><button id="cancel">CANCEL</button>'
    )
  );
}

export { newProjectModule, newToDoModule };
/**
 * newProjectsModule exports to eventListeners
 * newToDoModule exports to eventListeners
 */
