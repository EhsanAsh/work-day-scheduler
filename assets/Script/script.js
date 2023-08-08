$(document).ready(function () {

  let currentDay = $("#currentDay");
  // Displaying current date and time.
  const timeCounter = function () {
    let today = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
    currentDay.text(today);
  };

  // Setting color for time blocks based on current time.
  const allTimeBls = function () {

    let currentHour = dayjs().hour();
    let timeBlock = $(".timeBlock");
    // I'm trying to loop through each time block, get each Time block's id, and compare it to the current hour.
    // Used (https://learn.jquery.com/using-jquery-core/iterating/) documentation as a reference.
    timeBlock.each(function () {

      let timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
      let textArea = $(this).find("textarea");
      if (timeBlockHour < currentHour) {
        textArea.addClass("past");
      } else if (timeBlockHour === currentHour) {
        textArea.addClass("present");
      } else {
        textArea.addClass("future");
      }

    });

  };
  allTimeBls();

  // Set interval to update time every second by using timeCounter function
  setInterval(timeCounter, 1000);
  
});