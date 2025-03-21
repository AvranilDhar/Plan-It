const taskForm = document.querySelector('form');
const taskInput = document.getElementById("task-input");
const taskInputBtn = document.getElementById("task-input-btn");
const taskListCheckbox = document.getElementById('task-list-checkbox');

const taskText = document.querySelector("li p");

taskForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(taskInput.value === ""){
        alert("Plese Write Something To add");
    }
    else{
        addTask(taskInput.value.trim());
        taskInput.value = "";
    }
})

function addTask(task){
    taskText.innerHTML = task;
}