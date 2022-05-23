import "./style.css";
import { general, addToDo } from "./projectsTodos";

console.log(general);
console.log(addToDo);

addToDo(
  "Mow Lawn",
  ["Prep Lawn Mower", "Mow Lawn", "Dispose of Grass", "Clean Up"],
  6
);

let test = general;
console.log(test);

export { general, test };
