let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(){

let input = document.getElementById("taskInput");

let task = input.value;

if(task === "") return;

tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));

input.value="";

displayTasks();

}

function displayTasks(){

let list = document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

let li = document.createElement("li");

li.innerHTML = `
${task}
<button onclick="deleteTask(${index})">Delete</button>
`;

list.appendChild(li);

});

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

displayTasks();