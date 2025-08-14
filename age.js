const age = "10 / 5 / 18";

const today = new Date();
const birthday = new Date(year, month - 1, day);

const currentDate = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

console.log(today, currentDate, currentMonth, currentYear);
