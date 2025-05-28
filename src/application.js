// import { format, parseISO } from "date-fns";
import { Todo, TodoElement, domManager,c, signalAddEvent, emitter } from "./dom.js";

console.log("appl check");
let currentTab = "all";
const editDia = document.querySelector("#editDia");

function giveBtnsEvent() {
    let clickState = true;
    const todoBtn = document.querySelector('#newTodoBtn');
    const dialog = document.querySelector('#createDia');

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
    editDia.addEventListener("click", (e) => {
        if (e.target === editDia) { //dialog element is the bg, rest is children
            editDia.close();
            e.stopPropagation(); //to prevent it from bubbling to dialog if clicked on child
        }
    })


    //priority buttons
    const priorityBtns = document.querySelectorAll(".priorityBtn");
    let priorityInfo = "Trivial";
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
            // console.log(priorityInfo);
            //title,desc = '',dueDate = 'none',dueTime = 'none',priority = 'Trivial',project = "General"
            let todo = new Todo(titleInfo,descInfo,dateInfo,timeInfo,priorityInfo,projectInfo);
            console.log(Todo.array);
            dialog.close();

            setTimeout(() => {refreshModule()},10); //to avoid dumb error
            let todoEl = new TodoElement(todo);
            // todoEl.addEventListener("click",(e) => {
            //     editDia.showModal();
            //     console.log(e.target);
            //     domManager.fillModal(e.target);
            // });

            let sortArr;
            if (currentTab === "all") {
                sortArr = Todo.sortArrayInAll(Todo.array);
            } else if (currentTab === "today") {
                sortArr = Todo.sortArrayInAll(Todo.filterArrayinToday(Todo.array));
            }
            domManager.appendTodoInAll(sortArr);
        } else {
            form.reportValidity();
        }
        
    })

    //ui tab button events:
    const todayTab = document.querySelector("#today");
    const allTab = document.querySelector("#all");
    const generalTab = document.querySelector("#general");
    todayTab.addEventListener("click", () => {
        if (currentTab === "today") {
            return;
        }
        uiManager.switchMainTab("today");
        //console.log(currentTab);
    });
    allTab.addEventListener("click", () => {
        if (currentTab === "all") {
            return;
        }
        uiManager.switchMainTab("all");
        //c//onsole.log(currentTab);
    });
    generalTab.addEventListener("click", () => {
        if (currentTab === "general") {
            return;
        }
        uiManager.switchMainTab("general");
        //c//onsole.log(currentTab);
    });


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

const uiManager = (function() {
    const switchMainTab = function(tab) {
        switch (tab) {
            case "today":
                currentTab = "today";
                //console.log(currentTab);
                domManager.dispSelectedTab("today");
                //console.log(Todo.array);
                const filteredArr = Todo.filterArrayinToday(Todo.array);
                //console.log(filteredArr);
                const sortArr1 = Todo.sortArrayInAll(filteredArr);
                domManager.appendTodoInAll(sortArr1);
                break;
            case "all":
                currentTab = "all";
                domManager.dispSelectedTab("all");
                const sortArr2 = Todo.sortArrayInAll(Todo.array);
                domManager.wipe();
                domManager.appendTodoInAll(sortArr2)
                break;

            case "general":
                currentTab = "general";
                domManager.dispSelectedTab("general");
                const filteredArr3 = Todo.filterArrayForProj(Todo.array,"general");
                const sortArr3 = Todo.sortArrayInAll(filteredArr3);
                domManager.wipe();
                domManager.appendTodoInAll(sortArr3)
                break;
        }
    }


    return {currentTab,switchMainTab};
})();

emitter.on('actionDone', (editBtn,deleteBtn,data) => {
    console.log(editBtn,deleteBtn,data);
    editBtn.addEventListener("click", ()=> {
        const editTitle = document.querySelector("#editTitle");
        editTitle.value = data.title;
        const editDesc = document.querySelector("#editDesc");
        editDesc.value = data.desc;
        const editDueDate = document.querySelector("#editDueDate");
        editDueDate.value = data.dueDate;
        const editDueTime = document.querySelector("#editDueTime");
        editDueTime.value = data.dueTime;
        const editProjSelect = document.querySelector("#editProjSelect");
        editProjSelect.value = data.project;
        
        const buttons = document.querySelectorAll(".priorityBtn");
        buttons.forEach((button) => {
            if (button.classList.contains("selected")) {
                button.classList.remove("selected");
            }
        });
        buttons.forEach((button) => {
            if (button.getAttribute("data-name") === data.priority) {
                button.classList.add("selected");
            }
        })
            editDia.showModal();
        })  
})

editDia.addEventListener("close", () => {
    const btn = document.querySelector("#trivialBtn");
    if (!btn.classList.contains("selected")) {
        btn.classList.add("selected");    
    }
})



const manager = giveBtnsEvent();



