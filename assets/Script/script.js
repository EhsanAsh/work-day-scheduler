$(document).ready(function () {

  let currentDay = $("#currentDay");

  const timeCounter = function () {
    let today = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
    currentDay.text(today);
  }

  // Set interval to update time every second by using timeCounter function
  setInterval(timeCounter, 1000);
  
});