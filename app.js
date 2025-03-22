const form = document.querySelector('form');
const textInput = document.getElementById('text-input');
const listContainer = document.getElementById('list-container');

let tasks = [];

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(textInput.value === ""){
        alert("Please Write something to add..");
    }
    else{
        const li = document.createElement('li');
        const check = document.createElement('input');
        check.type="checkbox";
        const span = document.createElement('span');
        span.textContent = textInput.value.trim();
        const del = document.createElement('button');
        del.innerHTML= 'Del';
        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(del);
        listContainer.appendChild(li);
    }
    textInput.value = "";
})
