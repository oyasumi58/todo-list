console.log("deydwe");

class Todo {
    static array = [];

    constructor(title,desc,dueDate,dueTime,priority = 'Trivial',project = "General") {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.project = project;
        Todo.array.push(this);
    }   
}

console.log(Todo.array);

export { Todo };