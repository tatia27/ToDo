let addMessage = document.querySelector("#task-input"),
    addButton = document.querySelector("#new-task-input"),
    toDo = document.querySelector(".actions-todo");

let toDoList = [];

if (localStorage.getItem('todo')) {
    toDoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (!addMessage.value) {
        alert("Введите задачу!");
    }

    let newToDo = {
        todo: addMessage.value,
        checked: false,
        important: false
    }

    toDoList.push(newToDo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(toDoList));
});

function displayMessages() {
    let displayMessage = '';
    toDoList.forEach(function (item, i) {
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? "checked" : ""}>
            <label for='item_${i}'>${item.todo}</label>
        </li>`;
        toDo.innerHTML = displayMessage;
    })
}

toDo.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    toDoList.forEach(function (item, i) {
        if (item.todo === event.target.innerHTML) {
            toDoList.splice(i, 1);
        };
        displayMessages();
        localStorage.setItem('todo', JSON.stringify(toDoList));
    });
}
);

document.addEventListener("DOMContentLoaded", () => {
    debugger;
    setAvatar();
});

function setAvatar() {
    debugger;
    const userStr = window.localStorage.getItem('toDoUser');
    const user = userStr ? JSON.parse(userStr) : null;
    const logoPhotoElement = document.getElementById('logo-photo');
    if (user) {
        logoPhotoElement.style.display = 'block';
    } else {
        logoPhotoElement.style.display = 'none';
    }
}

const logoPhoto = document.getElementById('logo-photo');

logoPhoto.addEventListener('click', () => {
    window.localStorage.clear();
    logoPhoto.style.display = 'none';

});



