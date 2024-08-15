let time = document.querySelector("#time");
let date = document.querySelector("#date");

setInterval(() => {
    today();
}, 1000);
function today() {
    let today = new Date();


const monthNums = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dayNames = ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri'];

let currentTime = `${today.getHours() < 9 ? '0' + today.getHours() : today.getHours()} : ${today.getMinutes() < 9 ? '0' + today.getMinutes() : today.getMinutes()} : ${today.getSeconds() < 9 ? '0' + today.getSeconds() : today.getSeconds()}`;


let currentDate = `${dayNames[today.getDay()+1]}, ${today.getDate()}, ${monthNums[today.getMonth()]} ${today.getFullYear()}`;

//console.log(today.getDate())

time.innerHTML = currentTime;
date.innerHTML = currentDate
}
