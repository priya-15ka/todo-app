let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(){

let input = document.getElementById("taskInput");
let deadlineInput = document.getElementById("deadline");

let text = input.value;
let deadline = deadlineInput ? deadlineInput.value : "";

if(text === "") return;

tasks.push({
text: text,
deadline: deadline,
completed:false
});

input.value="";
if(deadlineInput) deadlineInput.value="";

saveTasks();
displayTasks();

}

function displayTasks(){

let list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

let li = document.createElement("li");

li.innerHTML = `
<input type="checkbox" ${task.completed ? "checked" : ""} 
onclick="toggleComplete(${index})">

<span style="${task.completed ? 'text-decoration:line-through' : ''}">
${task.text} ${task.deadline ? "- " + task.deadline : ""}
</span>

<button onclick="editTask(${index})">Edit</button>
<button onclick="deleteTask(${index})">Delete</button>
`;

list.appendChild(li);

});

}

function toggleComplete(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();
displayTasks();

}

function editTask(index){

let newTask = prompt("Edit your task:", tasks[index].text);

if(newTask !== null && newTask !== ""){
tasks[index].text = newTask;
saveTasks();
displayTasks();
}

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
displayTasks();

}

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

displayTasks();