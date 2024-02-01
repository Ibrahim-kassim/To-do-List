const inputTask = document.getElementById("inputTask");
const TodoList = document.getElementById("Todo-List");

function addTask() {
    if (inputTask.value == "") {
        alert("Please enter the task for today");
    } else {
        let li = document.createElement("li");
        li.textContent = inputTask.value;
        
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        
        li.appendChild(span);
        TodoList.appendChild(li);

    }
    inputTask.value = "";
    saveData();
}

TodoList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData(){
    localStorage.setItem("data",TodoList.innerHTML)
}


function showTask(){
    TodoList.innerHTML = localStorage.getItem('data')
}
showTask();