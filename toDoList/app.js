
const form = document.querySelector('form');
const addButton = document.querySelector('#addButton');
const task = document.querySelector('#task');
const list = document.querySelector('.list ul');

form.addEventListener('submit', function() {
    event.preventDefault();
    console.log(task.value);
    if (task.value == '') {
        task.focus();
        alert('Please enter a task');
        return false;
        
    } else {
        const newItem = createItem(task.value);
        list.appendChild(newItem);
        task.value = '';
        task.focus();
    }
});

function createItem(val) {
    const item = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');

    item.appendChild(span);
    item.appendChild(delBtn);

    span.textContent = val;
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delBtn');

    delBtn.addEventListener('click', function() {
        item.parentNode.removeChild(item);
    });

    return item;
}

// add remove from array "delete" button

