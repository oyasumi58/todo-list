// import { format, parseISO } from "date-fns";
import { format } from "date-fns";
import { formatManager, Project, catEl, ratEl, Todo, TodoElement, domManager,c, signalAddEvent, emitter } from "./dom.js";

console.log("appl check");
let currentTab = "all";
const editDia = document.querySelector("#editDia");

let priorityInfo = "Trivial";

function giveBtnsEvent() {
    let clickState = true;
    const todoBtn = document.querySelector('#newTodoBtn');
    const dialog = document.querySelector('#createDia');

    todoBtn.addEventListener("click",() => { 
        if (clickState) {
            dialog.showModal();
            let selectedTab = document.querySelector(".selected");
            if (selectedTab.getAttribute("id")) {
                todoManager.autoFillInfo(selectedTab.getAttribute("id")); 
            } else {
                todoManager.autoFillInfo(selectedTab.getAttribute("data-project")); 
            }
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
    //priorityInfo = "Trivial";
    dialog.addEventListener("open",() => {
        refreshModule();
    });
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
    
    timeInput.style.visibility = "hidden";
    //to actually create todo:
    const createBtn = document.querySelector(".submit");
    createBtn.addEventListener("click",() => {
        const form = document.querySelector("#formCreate"); 
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
            todoManager.addCheckMarkEvent(todoEl);
            // todoEl.addEventListener("click",(e) => {
            //     editDia.showModal();
            //     console.log(e.target);
            //     domManager.fillModal(e.target);
            // });
            // let sortArr;
            // if (currentTab === "all") {
            //     sortArr = Todo.sortArrayInAll(Todo.array);
            // } else if (currentTab === "today") {
            //     sortArr = Todo.sortArrayInAll(Todo.filterArrayinToday(Todo.array));
            // }
            let selectedTab = document.querySelector(".selected");
            if (selectedTab.getAttribute("id")) {
                console.log(selectedTab.getAttribute("id"));
                setTimeout(() => {uiManager.switchMainTab(selectedTab.getAttribute("id"))}, 100);
            } else {
                console.log(selectedTab.getAttribute("data-project)"));
                setTimeout(()=> {uiManager.switchMainTab(selectedTab.getAttribute("data-project"))},100);
            }
            //domManager.appendTodoInAll(sortArr);
        } else {
            form.reportValidity();
        }
        
    })
    
    //to make timeInput not exist
    dateInput.addEventListener('input', (e) => {
        const inputValue = dateInput.value.trim();

        if (inputValue === "") {
            console.log("hullo");
            timeInput.style.visibility = "hidden";
            timeInput.value = "";
        } else {
            timeInput.style.visibility = "visible";
        };
    });

    //ui tab button events:
    const todayTab = document.querySelector("#today");
    const allTab = document.querySelector("#all");
    const thisWeekTab = document.querySelector("#thisWeek");
    const generalTab = document.querySelector(`[data-project="General"]`);
    console.log(todayTab)
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
        if (currentTab === "General") {
            return;
        }
        uiManager.switchMainTab("General");
        //c//onsole.log(currentTab);
    });
    thisWeekTab.addEventListener("click", () => {
        if (currentTab === "thisWeek") {
            return;
        }
        uiManager.switchMainTab("thisWeek");
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
    const filterAndSort = function(tab) {
        switch (tab) {
            case "today":
                const filteredArr = Todo.filterArrayinToday(Todo.array);
                const sortArr = Todo.sortArrayInAll(filteredArr);
                domManager.appendTodoInAll(sortArr);
            
                case "all":
                
                const sortArr2 = Todo.sortArrayInAll(Todo.array);
                domManager.wipe();
                domManager.appendTodoInAll(sortArr2);
                break;

            case "thisWeek":
               

                const sortArr4 = Todo.filterArrayInWeek(Todo.array);
                domManager.wipe();
                domManager.appendTodoInAll(sortArr4);
                break;

            case "General":
                
                const filteredArr3 = Todo.filterArrayForProj(Todo.array,"General");
                const sortArr3 = Todo.sortArrayInAll(filteredArr3);
                domManager.wipe();
                domManager.appendTodoInAll(sortArr3);
                break;

            default: 
                const filteredArr5 = Todo.filterArrayForProj(Todo.array,tab);
                const sortArr5 = Todo.sortArrayInAll(filteredArr5);
                domManager.wipe();
                domManager.appendTodoInAll(sortArr5);
                break;
        }
    };

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
                domManager.appendTodoInAll(sortArr2);
                break;

            case "thisWeek":
                currentTab = "thisWeek";
                domManager.dispSelectedTab("thisWeek");

                const filteredArr4 = Todo.filterArrayInWeek(Todo.array);
                const sortArr4 = Todo.sortArrayInAll(filteredArr4);
                domManager.wipe();
                domManager.appendTodoInAll(sortArr4);
                break;

            case "General":
                currentTab = "General";
                domManager.dispSelectedTab("General");
                const filteredArr3 = Todo.filterArrayForProj(Todo.array,"General");
                const sortArr3 = Todo.sortArrayInAll(filteredArr3);
                domManager.wipe();
                domManager.appendTodoInAll(sortArr3);
                break;

            default: 
                currentTab = tab;
                console.log(tab);
                domManager.dispSelectedTab(tab);
                const filteredArr5 = Todo.filterArrayForProj(Todo.array,tab);
                const sortArr5 = Todo.sortArrayInAll(filteredArr5);
                domManager.wipe();
                domManager.appendTodoInAll(sortArr5);
                break;
        }
    }


    return {filterAndSort, currentTab,switchMainTab};
})();

const todoManager = (function() {
    let currentTodoBeingEdited = null;

    //edit stuff that show only occur once:
    const editDueDate = document.querySelector("#editDueDate");
    const editDueTime = document.querySelector("#editDueTime");
    editDueTime.style.visibility = "hidden";
    editDueDate.addEventListener('input', () => {
        const inputValue = editDueDate.value.trim();
        if (inputValue === "") {
            console.log(inputValue);
            console.log("hullo");
            editDueTime.style.visibility = "hidden";
            editDueTime.value = "";
        } else {
            editDueTime.style.visibility = "visible";
        };
    });



    function autoFillInfo(tab) {
        const createDia = document.querySelector("#createDia");
        const dueDate = createDia.querySelector("#dueDate");
        if (tab === "today" || tab === "thisWeek") {
            const today = formatManager.formatForDateInput();
            console.log(today);
            dueDate.value = today;
            const projSelect = document.querySelector("#projSelect");
            projSelect.value = "General";
            const createDia = document.querySelector("#createDia");
            const timeInput = createDia.querySelector("#dueTime");
            timeInput.style.visibility = "visible";
        } else if (tab === "all") {
            dueDate.value = "";
            const projSelect = document.querySelector("#projSelect");
            projSelect.value = "General";
            const createDia = document.querySelector("#createDia");
            const timeInput = createDia.querySelector("#dueTime");
            timeInput.style.visibility = "hidden";
        } else { //proj tab
            console.log(tab);
            dueDate.value = "";
            const projSelect = document.querySelector("#projSelect");
            const selOption = projSelect.querySelector(`[value="${tab}"]`);
            console.log(selOption);
            projSelect.value = selOption.value;
            const createDia = document.querySelector("#createDia");
            const timeInput = createDia.querySelector("#dueTime");
            timeInput.style.visibility = "hidden";
        }
    }

    function addEditEvent(editBtn,data,todoObj) {editBtn.addEventListener("click", (e)=> {
        const todoEl = e.target.parentElement.parentElement;
        console.log(todoEl);

        for (let todo of Todo.array) {
            if (todo.unique === todoEl.getAttribute("data-unique")) {
                currentTodoBeingEdited = todo;
                console.log("it has been founded");
            }
        }

        console.log(currentTodoBeingEdited);

        const editTitle = document.querySelector("#editTitle");
        editTitle.value = currentTodoBeingEdited.title;
        const editDesc = document.querySelector("#editDesc");
        editDesc.value = currentTodoBeingEdited.desc;
        const editDueDate = document.querySelector("#editDueDate");
        editDueDate.value = currentTodoBeingEdited.dueDate;
        const editDueTime = document.querySelector("#editDueTime");
        editDueTime.value = currentTodoBeingEdited.dueTime;
        const editProjSelect = document.querySelector("#editProjSelect");
        editProjSelect.value = currentTodoBeingEdited.project;
        


        const buttons = document.querySelectorAll(".priorityBtn");
        buttons.forEach((button) => {
            if (button.classList.contains("selected")) {
                button.classList.remove("selected");
            }
        });
        buttons.forEach((button) => {
            if (button.getAttribute("data-name") === currentTodoBeingEdited.priority) {
                button.classList.add("selected");
            }
        })
            editDia.showModal();
        })  
    
        const appendEditBtn = document.querySelector(".edit");
        appendEditBtn.addEventListener("click", () => {   
            console.log(currentTodoBeingEdited.unique);
            const todoEl = document.querySelector(`[data-unique='${currentTodoBeingEdited.unique}']`);
          
            const form = document.querySelector("#formEdit"); 
            if (form.checkValidity()) {
                currentTodoBeingEdited.title = editTitle.value;
                currentTodoBeingEdited.desc = editDesc.value;
                currentTodoBeingEdited.dueDate = editDueDate.value;
                currentTodoBeingEdited.dueTime = editDueTime.value;
                currentTodoBeingEdited.project = editProjSelect.value;
                currentTodoBeingEdited.priority = priorityInfo;
  
          
                domManager.stylePriority(todoEl);
                editDia.close();

                const editedTodo = domManager.editTodo(currentTodoBeingEdited.unique,currentTodoBeingEdited);
                console.log(editedTodo);

                let selectedTab = document.querySelector(".selected");
                console.log(selectedTab);
                if (selectedTab.getAttribute("id")) {
                    console.log(selectedTab.getAttribute("id"));
                    setTimeout(() => {uiManager.switchMainTab(selectedTab.getAttribute("id"))}, 100);
                } else {
                    console.log(selectedTab.getAttribute("data-project)"));
                    setTimeout(()=> {uiManager.switchMainTab(selectedTab.getAttribute("data-project"))},100);
                }
                // if (currentTab === "all") {
                //     sortArr = Todo.sortArrayInAll(Todo.array);
                // } else if (currentTab === "today") {
                //     sortArr = Todo.sortArrayInAll(Todo.filterArrayinToday(Todo.array));
                // }
                // domManager.appendTodoInAll(sortArr);
            } else {
                form.reportValidity();
            }
        })
    }

    function addDeleteEvent(deleteBtn) {
        console.log(deleteBtn);
        deleteBtn.addEventListener("click",(e) => {
            const todoEl = e.target.parentElement.parentElement.parentElement;
            // console.log(todoEl);
             for (let todo of Todo.array) {
                // console.log(todo);
                // console.log(todoEl)
                if (todo.unique === todoEl.getAttribute("data-unique")) {
                    currentTodoBeingEdited = todo;
                    // console.log(currentTodoBeingEdited);
                    console.log("it has been founded");
                }
            }
            // console.log(currentTodoBeingEdited);
        
            const response = confirm("Are you sure you want to delete this?");
            if (!response) { return; };
                Todo.array.forEach((todo) => {
                    console.log(todo);
                    console.log(currentTodoBeingEdited);
                    if (todo.unique === currentTodoBeingEdited.unique) {
                        Todo.array.splice(Todo.array.indexOf(todo),1);
                        todoEl.remove();
                        console.log(Todo.array);
                    } else {
                        console.log("todo delete error");
                    }
                })
            
        })
    }

    function addCheckMarkEvent(todoEl) {
        const checkmark = todoEl.querySelector(`[type="checkbox"]`);
        console.log(checkmark.checked);
        checkmark.addEventListener("change", (e) => {
            console.log(checkmark.checked);
            e.preventDefault();
            let todo = e.target.parentElement.parentElement.parentElement;
            let todoObj;
            Todo.array.forEach((obj) => {
                if (obj.unique === todo.getAttribute("data-unique")) {
                    todoObj = obj;
                    console.log(todoObj);
                    return;
                }
            })
            const tab = document.querySelector(".selected");
            console.log(tab);
            if (checkmark.checked === true) {
                console.log(todo);
                if (!todo.classList.contains("complete")) {
                    todo.classList.add("complete");
                    todoObj.complete = true;
                    if (tab.getAttribute("id") !== null) {
                        uiManager.switchMainTab(tab.getAttribute("id"));
                    } else {
                        uiManager.switchMainTab(tab.getAttribute("data-project"));
                    }
                }
            } else {
                todo.classList.remove("complete");
                todoObj.complete = false;
                if (tab.getAttribute("id") !== null) {
                    setTimeout(() => {uiManager.switchMainTab(tab.getAttribute("id"))},100);
                    //fails in this week and general
                    //when it switches it doesnt get the checkmar???
                } else {
                    setTimeout(() => {uiManager.switchMainTab(tab.getAttribute("data-project"))},100);
                }
            }
        })
    }

    return {autoFillInfo, addCheckMarkEvent, addEditEvent, addDeleteEvent};
})();

const catEditBtn = catEl.querySelector(".editBtn");
const catDeleteBtn = catEl.querySelector(".deleteBtn");
todoManager.addEditEvent(catEditBtn);
todoManager.addDeleteEvent(catDeleteBtn);

const ratEditBtn = ratEl.querySelector(".editBtn");
const ratDeleteBtn = ratEl.querySelector(".deleteBtn");
todoManager.addEditEvent(ratEditBtn);
todoManager.addDeleteEvent(ratDeleteBtn);

todoManager.addCheckMarkEvent(catEl);
todoManager.addCheckMarkEvent(ratEl);

emitter.on('actionDone', (editBtn,deleteBtn,data,todoObj) => {
    console.log(deleteBtn);
    todoManager.addEditEvent(editBtn,data,todoObj);
    todoManager.addDeleteEvent(deleteBtn);
    console.log(deleteBtn);
})

editDia.addEventListener("close", () => {
    const imptBtn = document.querySelector("#imptBtn");
    const sBtn = document.querySelector("#standardBtn");
    const tBtn = document.querySelector("#trivialBtn");
    console.log("editDia clsoed!");
    if (!tBtn.classList.contains("selected")) {
        sBtn.classList.remove("selected");
        imptBtn.classList.remove("selected");
        tBtn.classList.add("selected");    
    }
})

const projectManager = (function() {
    let edited = false;
    let error = false;
    function makeProject(newProjTab,prevProjValue,e) {
        error = false;
     
        if (newProjTab.isConnected) {
                if (e) {
                    e.preventDefault();
                }
                console.log(newProjTab.value.length);
                console.log(testString(newProjTab.value));
                if (newProjTab.value.length >= 1 && newProjTab.value.length <= 20 && testString(newProjTab.value)) {
                    let projSame = false;
                    Project.array.forEach((proj) => {
                        if (newProjTab.value === proj.title) {
                            alert("Projects cannot have the same name"); 
                            projSame = true;
                        }
                    })
                if (newProjTab.value === "General") {alert("Projects cannot have the same name"); projSame = true};
                    if (projSame) {return};

                    const projTab = Project.createProject(newProjTab.value,Project.array);
                    domManager.appendProjOptions("createDia",projTab.getAttribute("data-project"));
                    domManager.appendProjOptions("editDia",projTab.getAttribute("data-project"));
                    if (edited === true) {
                        console.log("hi");
                        const tab = projTab;
                        setTimeout(() => {uiManager.switchMainTab(tab.getAttribute("data-project"))},100);

                        
                                    
                        let currentProj = projTab.getAttribute("data-project");
                        Todo.array.forEach((todoObj) => {
                                if (todoObj.project === prevProjValue) {
                                    todoObj.project = currentProj;
                                }
                            });

                        const todoEls = Array.from(document.querySelectorAll(`[data-todo-project="${prevProjValue}"]`));
                        todoEls.forEach((todoEl) => {
                            const projInput = todoEl.querySelector(".todoProj");
                            setTimeout(()=>{
                                    projInput.textContent = currentProj; 
                                    console.log(projInput);
                                    todoEl.setAttribute("data-todo-project",currentProj);
                                },100);
                        })
                        

                        
                        edited = false;
                    }

                    console.log(projTab);
                    projTab.addEventListener("click", () => {
                        if (currentTab === projTab.getAttribute("data-project")) {
                            return;
                        }
                        // console.log("Hi");
                        uiManager.switchMainTab(`${projTab.getAttribute("data-project")}`);
                        //c//onsole.log(currentTab);
                    })    
                    projTab.addEventListener("dblclick", (e) => {
                        console.log(e.target);
                        let editProj = domManager.createProjectEl();
                        editProj.removeAttribute("placeholder");
                        console.log(projTab.textContent);
                        editProj.value = projTab.textContent;
                        
                        const prevProjValue = projTab.getAttribute("data-project");
                        
                        projTab.remove();
                        domManager.removeOption("editDia",projTab.getAttribute("data-project"));
                        domManager.removeOption("createDia",projTab.getAttribute("data-project"));
                        
                        Project.array.forEach((projectObj) => {
                            console.log(projectObj);
                            console.log(editProj.value);
                            if (projectObj.title === prevProjValue) {
                                console.log(projectObj);
                                Project.removeProject(projectObj);
                            }
                        });

                        let enterPressed = false;
                        editProj.onblur = function() {
                            if (enterPressed) {
                                enterPressed = false;
                                return;
                            }

                            if (projectManager.error === true) {
                                return;
                            }
                            console.log(enterPressed);
                            edited = true;
                            projectManager.makeProject(editProj,prevProjValue);
                        }; 
                        editProj.addEventListener("keydown", (e) => {
                            if (e.key !== 'Enter') {
                                return;
                            }


                            enterPressed = true;
                            if (projectManager.error === true) {
                              return;
                            }
                            console.log(newProjTab.value);
                            edited = true;
                            projectManager.makeProject(editProj,prevProjValue,e);
                 
                        })
                     })


                    if (newProjTab.isConnected) {
                        newProjTab.remove();  
                    }
        } else {
            error = true;
            console.log(getError());
            alert("Project name must only contain numbers and letters");
        }

            }
    }

    function getError() {
        return error;
    }

    return { makeProject, getError };
})();

const createProjBtn = document.querySelector("#createProjBtn");

createProjBtn.addEventListener("click", () => {
    if (projectManager.getError() === true) {
        alert("User, please fix your error before proceeding");
        return;
    }
    const newProjTab = domManager.createProjectEl();

    let enterPressed = false;

    newProjTab.onblur = function() {
        if (enterPressed) {
            enterPressed = false;
            return;
        }        
        projectManager.makeProject(newProjTab);
    }; 

    newProjTab.addEventListener("keydown", (e) => {
        if (e.key !== 'Enter') {
            return;
        }
        enterPressed = true;
        console.log(newProjTab.value);
        projectManager.makeProject(newProjTab,null,e);
        
    })
    // thisWeekTab.addEventListener("click", () => {
    //     if (currentTab === "thisWeek") {
    //         return;
    //     }
    //     uiManager.switchMainTab("thisWeek");
           
    //     });
})



const manager = giveBtnsEvent();

function testString(str) {
    return /^[a-zA-Z0-9\s]+$/.test(str);
}

