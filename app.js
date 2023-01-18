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
let closeHour = 0;
let closeMinutes = 0;
let closeSeconds = 0;
const clock = () => {
  const dateTime = new Date();
  let day = dateTime.getDay();
  let currentDay;
  for (let i = 0; i < days.length; i++) {
    if (day == i) {
      currentDay = days[i];
    }
  }
  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();
  if (day < 6) {
    closeHour = 19;
    closeMinutes = 59;
    closeSeconds = 59;
  } else if (day == 6) {
    closeHour = 14;
    closeMinutes = 59;
    closeSeconds = 59;
  }
  let currentHour = closeHour - hours;
  let currentMinute = closeMinutes - minutes;
  let currentSecond = closeSeconds - seconds;
  document.querySelector(".day").innerHTML = currentDay;
  document.querySelector(".hours").innerHTML = currentHour;
  document.querySelector(".minutes").innerHTML = currentMinute;
  document.querySelector(".seconds").innerHTML = currentSecond;
  if (day == 7) {
    document.querySelector(".day").innerHTML = currentDay;
    document.querySelector(".hours").innerHTML = "Zamknięte";
    document.querySelector(".minutes").innerHTML = "";
    document.querySelector(".seconds").innerHTML = "";
  }
};
setInterval(clock, 10);
