console.log("dom check");
const main = document.querySelector("#main");


class TodoElement {
    constructor(todo) {
        const todoElem = document.createElement("div");
        todoElem.setAttribute("class","todo");
        todoElem.setAttribute("name","done");
        
        
        const row1 = document.createElement("div");
        row1.setAttribute("class","row1");
        const row2 = document.createElement("div");
        row2.setAttribute("class","row2");
        todoElem.appendChild(row1);
        todoElem.appendChild(row2);


        const checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        row1.appendChild(checkbox);
        const titleDiv = document.createElement("div");
        titleDiv.textContent = todo.title;
        row1.appendChild(titleDiv);
        const projDiv = document.createElement("div");
        projDiv.textContent = todo.project;
        row2.appendChild(projDiv);
        const dateDiv = document.createElement("div");
        dateDiv.textContent = todo.dueDate;
        row2.appendChild(dateDiv);
        const timeDiv = document.createElement("div");
        timeDiv.textContent = todo.dueTime;
        row2.appendChild(timeDiv);
        main.appendChild(todoElem);
    }
}

const domManager = (function() {
    const appendTodo = function(todo) {
        let todo1 = new TodoElement(todo);
    }
    
    
    return { appendTodo };
})();


export { domManager, TodoElement };