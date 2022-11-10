const body = document.querySelector("body"),
    sidebar = body.querySelector(".cont"),
    icon = body.querySelector(".sidebar-nav"),
    toggleSwicth = body.querySelector(".toggle-swicth"),
    data = body.querySelector(".data");

const daysOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const allMonthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let dat = new Date();

icon.addEventListener("click", () => {
    sidebar.classList.toggle("cont_hide");
    // e.preventDefault();
})


toggleSwicth.addEventListener("click", () => {
    body.classList.toggle("dark");
})

let currentData = daysOfTheWeek[dat.getDay()];
let ar = dat.getDate();
let month = allMonthes[dat.getMonth()];
document.getElementById("ff").innerHTML = `${currentData}, ${ar} ${month}`;

