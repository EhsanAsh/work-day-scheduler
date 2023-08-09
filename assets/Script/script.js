$(document).ready(function () {

  let timeBlock = $(".timeBlock");
  let currentDay = $("#currentDay");
  let textDiv = $(".textDiv");
  let saveBtn = $(".saveBtn");
  let clearBtn = $("#clearBtn");
  
  // Displaying current date and time.
  const timeCounter = function () {
    let today = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
    currentDay.text(today);
  };

  // Setting color for time blocks based on current time.
  const allTimeBls = function () {

    let currentHour = dayjs().hour();
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

  // Here I'm trying to change the text area to an input field when clicked and vice versa to get user input, and make a bettter UX.
  // Used(https://learn.jquery.com/events/event-basics/), (https://learn.jquery.com/using-jquery-core/attributes/) as a reference.
  const txtToInput = function () {

    let userTxt = $(this).val().trim();
    let txtInput = $("<input>").addClass("description form-control").val(userTxt).attr("type", "text");
    $(this).replaceWith(txtInput);
    txtInput.trigger("focus");

  }

  const inputToTxt = function () {

    let inputValue = $(this).val().trim();
    let newTxtArea = $("<textarea>").addClass("description form-control").val(inputValue).attr({ "rows": "3", "placeholder": "Write your notes here."});
    $(this).replaceWith(newTxtArea);
    allTimeBls();

  }

  // Used(https://learn.jquery.com/using-jquery-core/traversing/) as a reference.
  const storeData = function (event) {

    event.stopPropagation();
    let time = $(this).parent().attr("id");
    let currentTxt = $(this).siblings(".textDiv").children(".description").val().trim();
    localStorage.setItem(time, currentTxt);

  };

   // Defining a function to load saved data from local storage.
  const loadSavedData = function () {
      
    const returnVal = function () {
  
      let time = $(this).attr("id");
      let savedData = localStorage.getItem(time);
      let textArea = $(this).find("textarea");
      textArea.val(savedData);

    };
    timeBlock.each(returnVal);
  
  };

  // Defining a function to clear all data from local storage.
  // Used(https://www.w3schools.com/jsref/met_loc_reload.asp) as a reference.
  const clearStorage = function () {
      localStorage.clear();
      location.reload();
  };

  // Set interval to update time every second by using timeCounter function
  setInterval(timeCounter, 1000);
  
  allTimeBls();

  // Event listener for time blocks to change text area to input field and vice versa.
  textDiv.on("click", "textarea", txtToInput);
  textDiv.on("blur", "input", inputToTxt);

  // Setting an event listener for save button to store data in local storage.
  saveBtn.click(storeData);

  loadSavedData();

  // Setting an event listener for clear button to clear all data from local storage.
  clearBtn.click(clearStorage);

});