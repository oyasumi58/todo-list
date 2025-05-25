import { Todo, TodoElement, domManager } from "./dom.js";

console.log("appl check");

function giveBtnsEvent() {
    let clickState = true;
    const todoBtn = document.querySelector('#newTodoBtn');
    const dialog = document.querySelector('dialog');

    todoBtn.addEventListener("click",() => { 
        if (clickState) {
            dialog.showModal();
        }
    })

    //close dialog with background
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) { //dialog element is the bg, rest is children
            dialog.close();
            e.stopPropagation(); //to prevent it from bubbling to dialog if clicked on child
        }
    })


    //priority buttons
    const priorityBtns = document.querySelectorAll(".priorityBtn");
    let priorityInfo = "";
    // console.log(priorityBtns);
    priorityBtns.forEach(btn => {
        btn.addEventListener("click",(e) => {
            if (!btn.classList.contains("selected")) {
                btn.classList.add("selected");
                priorityInfo = btn.getAttribute("data-name");
                priorityBtns.forEach(otherBtn => {
                if (otherBtn !== e.target) {
                    otherBtn.classList.remove("selected");
                }
            })
            }     
        })
    })

    //information stuff:
    const titleInput = document.querySelector("#title");
    const descInput = document.querySelector("#desc");
    const dateInput = document.querySelector("#dueDate");
    const timeInput = document.querySelector("#dueTime");
    const projInput = document.querySelector("#projSelect");

    //to actually create todo:
    const createBtn = document.querySelector(".submit");
    createBtn.addEventListener("click",() => {
        const form = document.querySelector("form"); 
        if (form.checkValidity()) {
            let titleInfo = titleInput.value;
            let descInfo = descInput.value;
            let dateInfo = dateInput.value;
            let timeInfo = timeInput.value;
            let projectInfo = projInput.value;
            console.log(projectInfo);
            //title,desc = '',dueDate = 'none',dueTime = 'none',priority = 'Trivial',project = "General"
            let todo = new Todo(titleInfo,descInfo,dateInfo,timeInfo,priorityInfo,projectInfo);
            console.log(Todo.array);
            dialog.close();

            setTimeout(() => {refreshModule()},10); //to avoid dumb error
            let todoEl = new TodoElement(todo);
            const sortArr = Todo.sortArrayInAll(Todo.array);
            domManager.appendTodoInAll(sortArr);
        } else {
            form.reportValidity();
        }
        
    })

    //to refresh module
    function refreshModule() {
        titleInput.value = "";
        descInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
        projInput.value = "General";
        priorityInfo = "Trivial";
        priorityBtns.forEach(btn => {
            if (btn.getAttribute("data-name") !== "Trivial") {
                btn.classList.remove("selected");
            } else if (!btn.classList.contains("selected")) {
                btn.classList.add("selected");
            }
        })
        // console.log(priorityBtns);
    }

    return refreshModule;
}


const sortManager = (function() {
    


    return
})();

const manager = giveBtnsEvent();



