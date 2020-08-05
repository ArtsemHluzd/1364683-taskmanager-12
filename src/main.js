import {returnMarkupMenu} from "./view/markupMenu.js";
import {returnMarkupFilters} from "./view/markupFilters.js";
import {returnMarkupSort} from "./view/markupSort.js";
import {returnMarkupEditTaskForm} from "./view/markupEditTaskForm.js";
import {returnMarkupTaskCard} from "./view/markupTaskCard.js";
import {returnMarkupBtnLoad} from "./view/markupBtnLoad.js";


let renderComponent = function (conteiner, component) {
  conteiner.insertAdjacentHTML(`beforeend`, component);
};

let main = document.querySelector(`.main`);
let mainConteiner = main.querySelector(`.main__control`);

renderComponent(mainConteiner, returnMarkupMenu());
renderComponent(main, returnMarkupFilters());
renderComponent(main, returnMarkupSort());

let boardElement = main.querySelector(`.board`);
let taskListElement = boardElement.querySelector(`.board__tasks`);

renderComponent(taskListElement, returnMarkupEditTaskForm());
renderComponent(taskListElement, returnMarkupTaskCard());
renderComponent(taskListElement, returnMarkupTaskCard());
renderComponent(taskListElement, returnMarkupTaskCard());

renderComponent(boardElement, returnMarkupBtnLoad());
