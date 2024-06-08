const textInputField = document.querySelector('.todo-input');
const form = document.getElementById('todo-form');
const todoContainer = document.querySelector('.todo-container');

form.onsubmit = function(event) {
    event.preventDefault(); 
    
    if(textInputField.value.trim().length === 0)
        return;
    else{
        console.log(textInputField.value);
        addTodoItem(textInputField.value);
        textInputField.value = ''; 
    }
};

function addTodoItem(textInputField) {
    const todoItemContainer = document.createElement('div');
    todoItemContainer.className = 'todo-item-container';

    const todoText = document.createElement('p');
    todoText.textContent = textInputField;
    todoText.className = 'todo-text';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

        
    todoText.addEventListener('click', function(){
        todoText.classList.toggle('completed');
    });

    editButton.addEventListener('click', function() {
        const newText = prompt('Edit your todo: ');
        if (newText !== null && newText.trim() !== '') {
            todoText.textContent = newText;
        }
    });

    deleteButton.addEventListener('click', function() {
        todoContainer.removeChild(todoItemContainer);
    });

    todoItemContainer.appendChild(todoText);
    todoItemContainer.appendChild(editButton);
    todoItemContainer.appendChild(deleteButton);
    todoContainer.appendChild(todoItemContainer);
}

