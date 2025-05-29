import { cat,rat,Todo, formatManager,c } from './todo.js';
export { Todo, formatManager,c } 
import editImg from "./asset/square-edit-outline.svg";
import { EventEmitter } from 'events';
const emitter = new EventEmitter();

console.log("dom check");
const main = document.querySelector("#main");


class TodoElement {

    static dispArray = [];

    constructor(todo) {
        const todoElem = document.createElement("div");
        todoElem.setAttribute("class","todo");
        todoElem.setAttribute("name","done");
        todoElem.setAttribute("data-unique",`${todo.unique}`);
        todoElem.setAttribute("data-priority",`${todo.priority}`);
        
        domManager.stylePriority(todoElem);

        const row1 = document.createElement("div");
        row1.setAttribute("class","row1");
        const row2 = document.createElement("div");
        row2.setAttribute("class","row2");
        todoElem.appendChild(row1);
        todoElem.appendChild(row2);

        const titleDiv = document.createElement("div");
        titleDiv.setAttribute("class","todoTitle");
        titleDiv.textContent = todo.title;
        row1.appendChild(titleDiv);

        const checkCon = document.createElement("label");
        checkCon.setAttribute("class","checkCon");
        row1.appendChild(checkCon);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkCon.appendChild(checkbox);
        const checkmark = document.createElement("span");
        checkmark.setAttribute("class","checkmark");
        checkCon.appendChild(checkmark);


        // const editBtn = document.createElement("button");
        // editBtn.setAttribute("class","editBtn");
        // editBtn.setAttribute("type","button");
        // editBtn.textContent = "View and Edit"
        // row1.appendChild(editBtn);

        const editBtn = document.createElement("input");
        editBtn.setAttribute("class","editBtn");
        editBtn.setAttribute("type","image");
        editBtn.setAttribute("src",editImg);
        //editBtn.textContent = "View and Edit"
        row1.appendChild(editBtn);

        const projDiv = document.createElement("div");
        projDiv.setAttribute("class","todoProj");
        projDiv.textContent = todo.project;
        row2.appendChild(projDiv);

        const flexCon = document.createElement("div");
        flexCon.setAttribute("class","flexCon");
        row2.appendChild(flexCon);

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

        
        flexCon.appendChild(dateGrp);

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class","deleteBtn");
        deleteBtn.setAttribute("type","button");
        deleteBtn.textContent = "🗑️"
        flexCon.appendChild(deleteBtn);
        
        const todoData = {
            title: todo.title,
            desc: todo.desc,
            dueDate: todo.dueDate,
            dueTime: todo.dueTime,
            project: todo.project,
            priority: todo.priority
        }

        signalAddEvent(editBtn,deleteBtn,todoData,todo);

        TodoElement.dispArray.push(todoElem);
       return todoElem;
        //main.appendChild(todoElem);
    }
}



const domManager = (function() {
    const appendTodoInAll = function(sortArr) {
        if (sortArr === undefined) {console.log("failed"); return}
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

    const stylePriority = function(todoEl) {
        switch (todoEl.getAttribute("data-priority")) {
            case "Trivial":
                if (!todoEl.classList.contains("trivial")) {
                  todoEl.classList.add("trivial");  
                }
                break;
            case "Standard":
                if (!todoEl.classList.contains("standard")) {
                  todoEl.classList.add("standard");  
                }
                break;
            case "Important":
                if (!todoEl.classList.contains("important")) {
                  todoEl.classList.add("important");  
                }
                break;
            default:
                console.log(todoEl.getAttribute("data-priority"));
                break;
        }
    }

    const fillModal = function(todoEl) {

    }

    const editTodo = function(unique,todoObj) {
        const todoEl = document.querySelector(`[data-unique="${unique}"]`);
        console.log(todoObj);

        // todoElem.setAttribute("class","todo");
        // todoElem.setAttribute("name","done");
        // todoElem.setAttribute("data-unique",`${todo.unique}`);
        todoEl.setAttribute("data-priority",`${todoObj.priority}`);
        
        domManager.stylePriority(todoEl);

        const row1 = todoEl.querySelector(".row1");
        // row1.setAttribute("class","row1");
        console.log(row1);

        const row2 = todoEl.querySelector(".row2");
        // row2.setAttribute("class","row2");
        console.log(row2);

        // todoEl.appendChild(row1);
        // todoEl.appendChild(row2);

        const titleDiv = todoEl.querySelector(".todoTitle");
        titleDiv.textContent = todoObj.title;
        // row1.appendChild(titleDiv);

        // const checkCon = document.createElement("label");
        // checkCon.setAttribute("class","checkCon");
        // row1.appendChild(checkCon);

        // const checkbox = document.createElement("input");
        // checkbox.setAttribute("type","checkbox");
        // checkCon.appendChild(checkbox);
        // const checkmark = document.createElement("span");
        // checkmark.setAttribute("class","checkmark");
        // checkCon.appendChild(checkmark);

        // const editBtn = document.createElement("input");
        // editBtn.setAttribute("class","editBtn");
        // editBtn.setAttribute("type","image");
        // editBtn.setAttribute("src",editImg);
        //editBtn.textContent = "View and Edit"
        // row1.appendChild(editBtn);

        const projDiv = todoEl.querySelector(".todoProj");
        // projDiv.setAttribute("class","todoProj");
        projDiv.textContent = todoObj.project;
        // row2.appendChild(projDiv);

        const flexCon = todoEl.querySelector(".flexCon");
        // flexCon.setAttribute("class","flexCon");
        // row2.appendChild(flexCon);

        const dateGrp = todoEl.querySelector(".todoDateGrp");
        // dateGrp.setAttribute("class","todoDateGrp");
        let rawDate, formattedDate;

      

        if (todoObj.dueTime && todoObj.dueDate) {
            rawDate = `${todoObj.dueDate} ${todoObj.dueTime}`;
            formattedDate = formatManager.formatDateAndTime(rawDate)
        } else if (todoObj.dueDate && !todoObj.dueTime) {
            rawDate = `${todoObj.dueDate}`;
            formattedDate = formatManager.formatDate(rawDate)
        }
        
        dateGrp.textContent = formattedDate;

        
        // flexCon.appendChild(dateGrp);

        // const deleteBtn = document.createElement("button");
        // deleteBtn.setAttribute("class","deleteBtn");
        // deleteBtn.setAttribute("type","button");
        // deleteBtn.textContent = "🗑️"
        // flexCon.appendChild(deleteBtn);
    }


    return { editTodo, fillModal, appendTodoInAll, wipe, dispSelectedTab, stylePriority, };
})();

new TodoElement(cat);
new TodoElement(rat);
domManager.appendTodoInAll(Todo.array);

function signalAddEvent(editBtn,deleteBtn,todoData,todoObj) {
    emitter.emit('actionDone',editBtn,deleteBtn,todoData,todoObj);
}


export { domManager, TodoElement, emitter, signalAddEvent };