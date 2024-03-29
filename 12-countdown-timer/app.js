const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items);

// let date = new Date();    // this gives current date

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


// let futureDate = new Date(2022, 11, 20, 15, 44, 0);
// console.log(futureDate);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
// console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60mins
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  // days

  let days = Math.floor(t/oneDay);
  
  //hours
  let hours = (t % oneDay) /oneHour;
  hours = Math.floor(hours)
  
  // minutes
  let minutes = Math.floor((t % oneHour) / oneMinute)

  // seconds
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array;
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if(item < 10) {
      return item = `0${item}`;
    }
    return item; 
  }

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  })
  if(t < 0) {      // when time out call clearInterval
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Sorry, this giveaway has expired</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();





