// date and time 
const dateElement = document.querySelector(".date");
const timeElement = document.querySelector(".time");

/* 
    @param{Date} date
*/
function formatTime(date){
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAm = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}${isAm ? "AM" : "PM"}`;
}

/* 
    @param{Date} date
*/
function formatDate(date){
    const DAYS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDay()} ${date.getFullyYear()}`;
}

setInterval(() => {
    const now = new Date();

    timeElement.textContent = formatTime(now);
    timeElement.textContent = formatDate(now);
}, 200)