const langArr = {
    "title": {
        'ru': 'Мой день',
        'en': 'My day'
    },
    "tasks": {
        'ru': 'Задачи',
        'en': 'Tasks'
    },
    "theme": {
        'ru': 'Тема',
        'en': 'Theme'
    },
    "registration": {
        'ru': 'Регистрация',
        'en': 'Register'
    },
    "button": {
        'ru': 'Добавить',
        'en': 'Add'
    },
    "tasklist": {
        'ru': 'Список дел',
        'en': 'Task list'
    },
    "add": {
        'ru': 'Добавить',
        'en': 'Add'
    },
    "addTask": {
        'ru': 'Введите задачу',
        'en': 'Add task'
    },
    "go" : {
        'ru':'Войти',
        'en': 'Come in'
    }
}

const select = document.querySelector('.menu-language');
const allLang = ['ru', 'en'];


select.addEventListener('change', changeUrlLanguage);

function changeUrlLanguage() {
    let lang = select.value;
    location.href = `${window.location.pathname}#${lang}`;
    location.reload();

};

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = `${window.location.pathname}#ru`;
        location.reload();
    }
    select.value = hash;
    document.querySelector('.logout__link').innerHTML = langArr['registration'][hash];
    document.querySelector('.login-href').innerHTML = langArr['go'][hash];
    document.querySelector('#new-task-input').value = langArr['add'][hash];
    let a = document.querySelector('#task-input');
    a.setAttribute('placeholder', langArr['addTask'][hash]);

    for (let key in langArr) {
        let elem = document.querySelector('#lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }

}

changeLanguage();