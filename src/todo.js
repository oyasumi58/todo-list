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
        const sortArr = arr.sort(function(el1,el2) {
            if (!el1.dueDate && !el2.dueDate) {
                console.log(1);
                return 0
            } else if (el1.dueDate && !el2.dueDate) {
                console.log(2);
                return -1
            } else if (!el1.dueDate && el2.dueDate) {
                console.log(3);
                return 1
            } else {
                console.log(4);
                let date1 = new Date(`${el1.dueDate} ${el1.dueTime}`);
                let date2 = new Date(`${el2.dueDate} ${el2.dueTime}`);
                console.log(date1);
                console.log(date2);
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
}



export { Todo };