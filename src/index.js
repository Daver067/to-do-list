import "./style.css";
import { renderPage } from "./renderPage";
import { allListeners } from "./eventListeners,js";
import { checkForActiveProject, General } from "./projectsTodos";

//renders general page layout
renderPage();
allListeners();

//using this for pageload for now.
General.toggleActive();
checkForActiveProject();
