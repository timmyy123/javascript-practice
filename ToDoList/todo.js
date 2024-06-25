function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    let li = document.createElement('li');
    li.className = 'task-item';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = toggleComplete;

    let span = document.createElement('span');
    span.innerText = taskText;

    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.onclick = removeTask;

    li.append(checkbox, span, removeButton);
    document.getElementById('taskList').prepend(li); // Add new task at the start of the list

    taskInput.value = '';
}

function toggleComplete(event) {
    let checkbox = event.target;
    let task = checkbox.nextSibling;
    if (checkbox.checked) {
        task.classList.add('completed');
    } else {
        task.classList.remove('completed');
    }
}

function removeTask(event) {
    let removeButton = event.target;
    let li = removeButton.parentElement;
    li.remove();
}

