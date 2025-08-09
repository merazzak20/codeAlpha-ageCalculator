const age = "10 / 5 / 18";

const today = new Date();

const currentDate = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

console.log(today, currentDate, currentMonth, currentYear);
