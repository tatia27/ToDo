// window.addEventListener('load', () => {
//     const form = document.querySelector("#task-form");
//     const input = document.querySelector("#task-input");
//     const tasksList = document.querySelector("#tasks");

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const task = input.value;

//         if (!task) {
//             alert("Введите задачу!")
//         }

//         const taskElem = document.createElement("div");
//         taskElem.classList.add("task");

//         const taskContentElem = document.createElement("div");
//         taskContentElem.classList.add("content");

//         taskElem.appendChild(taskContentElem);

//         const taskInputElem = document.createElement("input");
//         taskInputElem.classList.add("task-content");
//         taskInputElem.type = "text";
//         taskInputElem.value = task;
//         taskInputElem.setAttribute("readonly", "readonly");
//         taskContentElem.appendChild(taskInputElem);

//         const taskActionElem = document.createElement("div");
//         taskActionElem.classList.add("actions");

//         const taskEditElem = document.createElement("button");
//         taskEditElem.classList.add("edit");
//         taskEditElem.innerHTML = 'Добавить';

//         const taskDeletElem = document.createElement("button");
//         taskDeletElem.classList.add("delete");
//         taskDeletElem.innerHTML = 'Удалить';
//         taskActionElem.appendChild(taskEditElem);
//         taskActionElem.appendChild(taskDeletElem);
//         taskElem.appendChild(taskActionElem);


//         tasksList.appendChild(taskElem);
//     })


// })




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



