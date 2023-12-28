window.addEventListener("load", ()=>{
const form= document.querySelector("#new-task-form");
const input= document.querySelector("#new-task-input");
const lister= document.querySelector("#tasks"); 

form.addEventListener("submit", (e) =>{
e.preventDefault();

const task= input.value;
if(!task) {
    alert("please fill the form");
    return;
} 
 else{
    alert("success");
}

const taskli = document.createElement("div");
taskli.classList.add("task");

const contentli= document.createElement("div");
contentli.classList.add("content");
//contentli.innerText=task;

taskli.appendChild(contentli);
lister.appendChild(taskli);

const taskInput = document.createElement("input");
taskInput.classList.add("text");
taskInput.type= "text";
taskInput.value= task;
taskInput.setAttribute("readonly", "readonly");

contentli.appendChild(taskInput);

const taskActions= document.createElement("div");
taskActions.classList.add("actions");

const taskEdit= document.createElement("button");
taskEdit.classList.add("edit");
taskEdit.innerHTML="Edit";

const taskDelete= document.createElement("button");
taskDelete.classList.add("delete");
taskDelete.innerHTML= "Delete";

taskActions.appendChild(taskEdit);
taskActions.appendChild(taskDelete);

contentli.appendChild(taskActions);
taskli.appendChild(contentli);
input.value="";

taskEdit.addEventListener('click', ()=>{
if(taskEdit.innerText.toLowerCase()== "edit"){    
taskInput.removeAttribute("readonly");
taskInput.focus();
taskEdit.innerText= "save";}
else{  
 taskInput.setAttribute("readonly", "readonly");
 taskInput.innerText="Edit";  
}

});
 
taskDelete.addEventListener("click", ()=>{
lister.removeChild(taskli);

});

})






})