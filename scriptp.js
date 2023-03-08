//DOM
const form = document.getElementById('form');
const list = document.getElementById('list');
const input = document.getElementById('newTask');
const orderedList = document.getElementById('orderedList');
const container = document.getElementById('todoContainer');

let newBullet = '';

//in case of change, get the value of the new event in the targeted area
input.addEventListener('change', (e)=> {
    newBullet = e.target.value;
});

//creating the handleInput function that is used at the end.
const handleInput = (e)=> {
    e.preventDefault();

    //create todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.innerText = newDiv;
    todoContainer.appendChild(todoDiv);

    //add the new list item to ordered list
    const addBulletToList = document.createElement('li');
    addBulletToList.innerText = newBullet;
    orderedList.appendChild(addBulletToList);

    //checkbox 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'Todo';
    list.appendChild(checkbox);
    ul.appendChild(list);

    //clean the submit area after submitting the last list item
    input.value = '';

    //Edit button
    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.name = 'Edit';
    orderedList.appendChild(editBtn);

    //Delete button
    orderedList.addEventListener('click', deleteTodo)
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteBtn.classList.add("trash-btn");
    todoDiv.appendChild(deleteBtn);

    //Save to local
    saveLocalTodos(input.value);
}

form.addEventListener('submit', handleInput);





