import './todo.js';

let clickState = true;

const todoBtn = document.querySelector('#newTodoBtn');
const dialog = document.querySelector('dialog');
console.log("d");

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
const trivial = document.querySelector("#trivialBtn");
const standard = document.querySelector("#standardBtn");
const impt = document.querySelector("#imptBtn");

// console.log(priorityBtns);
priorityBtns.forEach(btn => {
    btn.addEventListener("click",(e) => {
        console.log(e.target);
        btn.classList.add("selected");
        priorityBtns.forEach(otherBtn => {
            if (otherBtn !== e.target) {
                otherBtn.classList.remove("selected");
            }
        })
    })
})



