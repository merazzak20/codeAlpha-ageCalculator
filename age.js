const calculateAge = () => {
  const year = document.querySelector("#year").value;
  const month = document.querySelector("#month").value;
  const day = document.querySelector("#day").value;

  if (!day || !month || !year) {
    document.getElementById("result").innerText =
      "Please enter full date of birth!";
    return;
  }

  const today = new Date();
  const birthday = new Date(year, month - 1, day);

  let ageYears = today.getFullYear() - birthday.getFullYear();
  let ageMonths = today.getMonth() - birthday.getMonth();
  let ageDays = today.getDate() - birthday.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById(
    "result"
  ).innerText = `Your Age: ${ageYears} years, ${ageMonths} months, ${ageDays} days`;
};
