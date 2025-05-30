import { formatManager, c } from "./date.js"
export { formatManager, c } 
console.log("todo check");

class Todo {
    static array = [];

    constructor(title,desc,dueDate,dueTime,priority = 'Trivial',project = "General") {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.project = project;
        this.unique = crypto.randomUUID();
        Todo.array.push(this);
    }   

    static sortArrayInAll = function(arr) {
        console.log(arr);
        if (arr === undefined) {console.log("failed"); return}
        const sortArr = arr.sort(function(el1,el2) {
            if (!el1.dueDate && !el2.dueDate) {
                return 0
            } else if (el1.dueDate && !el2.dueDate) {
                return -1
            } else if (!el1.dueDate && el2.dueDate) {
                return 1
            } else {
                let date1 = new Date(`${el1.dueDate} ${el1.dueTime}`);
                let date2 = new Date(`${el2.dueDate} ${el2.dueTime}`);
                //console.log(date1);
                //console.log(date2);
                if (date1 > date2) {
                    return 1;
                } else if (date1 < date2) {
                    return -1;
                } else {
                    return 0;
                }
            }
        })
        console.log(sortArr);
        return sortArr; 
    }

    static filterArrayinToday = function(arr) {
        console.log(arr);
        return arr.filter(dateFilter);
    }

    static filterArrayForProj = function(arr,projName) {
        console.log(arr);
        
        return arr.filter((elem) => {
            return projFilter(elem,projName);
        });
    }
}

const cat = new Todo("cat","","2025-05-25","17:53",'Trivial',"General");
const rat = new Todo("rat","","2025-05-07","17:53",'Trivial',"General");

function dateFilter(todoObj) {
    c(todoObj.dueDate);
    const today = formatManager.formatToday();
    const todoDate = formatManager.formatDateY(todoObj.dueDate);
   
    console.log(today);
    console.log(todoDate);
    return todoDate === today;
}

function projFilter(elem,projName) {
    console.log(elem.project.toLowerCase());
    console.log(projName);
    return elem.project.toLowerCase() === projName;
}

export { Todo, cat, rat };