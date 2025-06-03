console.log("fx check");
//todo has a property for which project it is, and then we arrange it that way.
import './styles.css';
// import  './application.js';
import {projectManager, Todo, Project, update, TodoElement, domManager, todoManager, uiManager} from './application.js';


console.log(localStorage);

function makeTemplate() {
	//to initialize cat and rat;
	let cat;
	let rat;
	console.log(Todo.array[0]);
	if (Todo.array[0] === undefined) {
		// if (Todo.array[0].title !== "cat") {
		cat = new Todo("cat","","2025-05-07","17:53",'Trivial',"General");
		rat = new Todo("rat","","2025-05-25","17:53",'Trivial',"General");
		// } else {
		//   cat = null;
		//   rat = null;
		// }
	} else {
			cat = null;
			rat = null;
	}

	let catEl, ratEl;
	if (cat !== null && rat !== null) {
			catEl = new TodoElement(cat);
			ratEl = new TodoElement(rat);
			domManager.appendTodoInAll(Todo.array);
	} else {
			catEl = null;
			ratEl = null;
	}

	if (catEl !== null && ratEl !== null) {
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
	}
}

window.addEventListener('load', () => {
	console.log(localStorage.getItem("projects"));
	let rawProjArr = JSON.parse(localStorage.getItem("projects"));
	console.log(rawProjArr);
	rawProjArr.forEach((proj) => {
		Project.array.push(proj); // it doesnt need to be classed because im dumb and wrote the Proj class w/o a constructor or any instance methods anyway
		console.log(Project.array);
		
		const testProj = document.querySelector(`[data-project="${proj.title}"]`);
		if (testProj !== null) {
			console.log(testProj);
			return;
		}
		const projTab = Project.createProject(proj.title,Project.array);
		domManager.appendProjOptions("createDia",projTab.getAttribute("data-project"));
		domManager.appendProjOptions("editDia",projTab.getAttribute("data-project"));
		projTab.addEventListener("click", () => {
			let currentTab = document.querySelector(".selected");
			if (currentTab === projTab.getAttribute("data-project")) {
					return;
			}
			uiManager.switchMainTab(`${projTab.getAttribute("data-project")}`); 
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
					
				})

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
                            projectManager.setEdited(true);
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
							projectManager.setEdited(true);
                            projectManager.makeProject(editProj,prevProjValue,e);
                        })
		})
	})	
	let rawTodoArr =  JSON.parse(localStorage.getItem("todos"));
	console.log(rawTodoArr);
	rawTodoArr.forEach((obj) => {
		let classedObj = Object.assign(new Todo(), obj);
	})

	makeTemplate();

	rawTodoArr.forEach((obj) => {  
		let domEl = new TodoElement(obj);
		domManager.appendTodoInAll(Todo.array);
		const objEditBtn = domEl.querySelector(".editBtn");
		const objDeleteBtn = domEl.querySelector(".deleteBtn");
		todoManager.addEditEvent(objEditBtn);
		todoManager.addDeleteEvent(objDeleteBtn);
		todoManager.addCheckMarkEvent(domEl);
	});

	

	console.log(Todo.array);
	console.log(Project.array);
	
});




window.addEventListener('beforeunload',(e) => {
		update();
		Todo.array = [];
		Project.array = [];
		console.log("hi");
});