export { Todo } from './todo.js';
import { formatManager } from "./date.js";


console.log("dom check");
const main = document.querySelector("#main");


class TodoElement {

    static dispArray = [];

    constructor(todo) {
        const todoElem = document.createElement("div");
        todoElem.setAttribute("class","todo");
        todoElem.setAttribute("name","done");
        todoElem.setAttribute("data-unique",`${todo.unique}`);
        
        const row1 = document.createElement("div");
        row1.setAttribute("class","row1");
        const row2 = document.createElement("div");
        row2.setAttribute("class","row2");
        todoElem.appendChild(row1);
        todoElem.appendChild(row2);

        const checkCon = document.createElement("label");
        checkCon.setAttribute("class","checkCon");
        row1.appendChild(checkCon);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkCon.appendChild(checkbox);
        const checkmark = document.createElement("span");
        checkmark.setAttribute("class","checkmark");
        checkCon.appendChild(checkmark);


        const titleDiv = document.createElement("div");
        titleDiv.setAttribute("class","todoTitle");
        titleDiv.textContent = todo.title;
        row1.appendChild(titleDiv);
        const projDiv = document.createElement("div");
        projDiv.setAttribute("class","todoProj");
        projDiv.textContent = todo.project;
        row2.appendChild(projDiv);

        const dateGrp = document.createElement("div");
        dateGrp.setAttribute("class","todoDateGrp");
        let rawDate, formattedDate;

        if (todo.dueTime && todo.dueDate) {
            rawDate = `${todo.dueDate} ${todo.dueTime}`;
            formattedDate = formatManager.formatDateAndTime(rawDate)
        } else if (todo.dueDate && !todo.dueTime) {
            rawDate = `${todo.dueDate}`;
            formattedDate = formatManager.formatDate(rawDate)
        }
        
        dateGrp.textContent = formattedDate;
        row2.appendChild(dateGrp);
        TodoElement.dispArray.push(todoElem);
       return todoElem;
        //main.appendChild(todoElem);
    }
}

const domManager = (function() {
    const appendTodoInAll = function(sortArr) {
        wipe();
        let sortedArray = [];
         sortArr.forEach((todo) => { //in order of todo obj
            TodoElement.dispArray.forEach((todoEl) => {
                if (todo.unique === todoEl.getAttribute("data-unique")) {
                    sortedArray.push(todoEl);
                    return
                }
            })
            console.log(sortedArray);
            sortedArray.forEach((sortedTodo) => {
                main.appendChild(sortedTodo);
            })
        })
    }
    
    const wipe = function() {
        const main = document.querySelector("#main");
        main.innerHTML = "";
        const title = document.createElement('h2');
        title.setAttribute("id","maintitle");
        title.textContent = "Todos";
        main.appendChild(title);
    }

    const dispSelectedTab = function(tab) {
        const prevSelTab = document.querySelector(".selected");
        prevSelTab.classList.remove("selected");
        const selTab =  document.querySelector(`#${tab}`);
        console.log(selTab);
        selTab.classList.add("selected");
    }
    return { appendTodoInAll, wipe, dispSelectedTab, };
})();


export { domManager, TodoElement };