//Retrieve todo from local storage and initialize and empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput")


const todoList = document.getElementById("todoList");


const todoCount = document.getElementById("todoCount");

const addButton = document.querySelector(".btn");


const deleteButton = document.getElementById("deleteButton")


// Initialize 
document.addEventListener("DOMContentLoaded",function(){
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener('keydown', function(event){
        if (event.key === 'enter'){
            event.preventDefault();
            addTask();
        }
    })
    deleteButton.addEventListener("click", deleteAllTask);
    displayTasks();
})

function addTask(){
    const newTask = todoInput.value.trim();
    if (newTask !== "" ){
        todo.push({
            text: newTask, 
            disabled: false,
        });
        saveToLocalStorage();
        todoInput.value ="";
        displayTasks();
    }

}

function deleteAllTask(){

}


function displayTasks(){}


function  saveToLocalStorage(){
    localStorage.setItem("todo", JSON.stringify(todo))
}

