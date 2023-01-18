const counterContainer = document.querySelector(".counter-container");
const days = [
  "Empty",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela ",
];
const closeHour = 19;
const closeMinutes = 59;
const closeSeconds = 60;
const clock = () => {
  const dateTime = new Date();

  let day = dateTime.getDay();
  for (let i = 0; i < days.length; i++) {
    if (day == i) {
      day = days[i];
    }
  }
  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();
  document.querySelector(".day").innerHTML = day;
  document.querySelector(".hours").innerHTML = closeHour - hours;
  document.querySelector(".minutes").innerHTML = closeMinutes - minutes;
  document.querySelector(".seconds").innerHTML = closeSeconds - seconds;
};
setInterval(clock, 10);
