// Your challenge is to build out this age calculator app
//  and get it looking as close to the design as possible.

// You can use any tools you like to help you complete the
//  challenge. So if you've got something you'd like to practice,
//   feel free to give it a go.

// View an age in years, months,
//  and days after submitting a valid date through the form
// Receive validation errors if:
// Any field is empty when the form is submitted
// The day number is not between 1-31
// The month number is not between 1-12
// The year is in the future
// The date is invalid, e.g. 31/04/1991 (there are 30 days in April)
// View the optimal layout for the interface
// depending on their device's screen size
// See hover and focus states for all interactive elements
// on the page

// Bonus: See the age numbers animate to their final number
//  when the form is submitted
// Download the project and go through the README.md file.
//  This will provide further details about the project and help
//  you get set up.

const inputYear = document.getElementById("year");
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");

inputYear.addEventListener("input", update);
inputDay.addEventListener("input", update);
inputMonth.addEventListener("input", update);

function update() {
  let month = inputMonth.value - 1;
  let day = inputDay.value;
  let year = inputYear.value;

  const today = new Date();
  const selectedDate = new Date(year, month, day);

  const callDate = today.getTime() - selectedDate.getTime();

  let years = Math.floor(callDate / (1000 * 60 * 60 * 24 * 365.25));
  let months = Math.floor(
    (callDate % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  let days = Math.floor(
    (callDate % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );

  document.getElementById("countd").textContent = days;
  document.getElementById("countm").textContent = months;
  document.getElementById("county").textContent = years;

  const daySpan = document.createElement("span");
  daySpan.textContent = "days";
  document.getElementById("countd").append(daySpan);

  const monthSpan = document.createElement("span");
  monthSpan.textContent = "months";
  document.getElementById("countm").append(monthSpan);

  const yearSpan = document.createElement("span");
  yearSpan.textContent = "years";
  document.getElementById("county").append(yearSpan);
}

// function checkAge() {}

// function ageError() {
//   if (day.value < 1 || day > 31) {
//     return "Must be a valid day";
//   } else if (month.value < 1 || month > 12) {
//     return "Must be a valid month";
//   } else if (year.value < 1900 || year > 2023) {
//     return "Must be a valid year";
//   }
// }
