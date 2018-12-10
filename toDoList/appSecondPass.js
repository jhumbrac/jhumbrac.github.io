// 1. capture elements in question
// 2. when add task is clicked/submitted:
//     prevent default reload
//     create list item
//        append span and delete button
//     append to parent ul 
//     clear field 
//     focus on input 
//     return false if field is empty
// 3. add delete button to li/task

const form = document.querySelector('form');
const task = document.querySelector('#task');
const addBtn = document.querySelector('#addButton');
const list = document.querySelector('.list ul');

form.addEventListener('submit', function(){
    event.preventDefault();
    if(task.value == ''){
        alert('please enter a task');
        resetField();
        return false;
    } else {
        console.log('working so far');
        const newItem = createItem(task.value);
        list.appendChild(newItem);
        resetField();
    }
})

function createItem(val) {
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');

    listItem.appendChild(span);
    span.textContent = val;
    listItem.appendChild(delBtn);
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delBtn');

    delBtn.addEventListener('click', function(){
        listItem.parentNode.removeChild(listItem);
    });

    return listItem;
}

function resetField(){
    task.value = '';
    task.focus();
}