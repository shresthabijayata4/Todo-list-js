//selectors
const todoInput = document.querySelector('.todo-input');
const todoSubmit = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoSubmit.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        const todo= item.parentElement;
        todo.classList.add('fall');
        // todo.addEventListener("transitionend", function(){
        //     todo.remove();
        // });
    }
    
    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.add('completed');
    }
}
