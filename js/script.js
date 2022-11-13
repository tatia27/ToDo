const body = document.querySelector("body"),
    sidebar = body.querySelector(".cont"),
    icon = body.querySelector(".sidebar-nav"),
    toggleSwicth = body.querySelector(".toggle-swicth"),
    data = body.querySelector(".data");

let  currentData, ar, month;

const daysOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const allMonthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const daysOfTheWeekEn = ['Sunday', 'Monday ', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const allMonthesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'October', 'November', 'December']
let dat = new Date();

icon.addEventListener("click", () => {
    sidebar.classList.toggle("cont_hide");
    // e.preventDefault();
})

if (window.location.hash.substring(1) === 'ru') {
    currentData = daysOfTheWeek[dat.getDay()];
    ar = dat.getDate();
    month = allMonthes[dat.getMonth()];
    }
    else {
    currentData = daysOfTheWeekEn[dat.getDay()];
    ar = dat.getDate();
    month = allMonthesEn[dat.getMonth()];
    }

toggleSwicth.addEventListener("click", () => {
    body.classList.toggle("dark");
})

document.getElementById("ff").innerHTML = `${currentData}, ${ar} ${month}`;

