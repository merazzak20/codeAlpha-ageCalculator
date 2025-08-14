// console.log(year);

const calculateAge = () => {
  const year = document.querySelector("#year").value;
  const month = document.querySelector("#month").value;
  const day = document.querySelector("#day").value;

  const today = new Date();
  const birthday = new Date(year, month - 1, day);

  const currentDate = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  const ageYear = currentYear - birthday.getFullYear();
  const ageMonth = currentMonth - birthday.getMonth();
  const ageDay = currentDate - birthday.getDate();

  console.log(ageYear, ageMonth, ageDay);
};
