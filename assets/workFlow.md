![Ehsan@sh](./image/logo/Favicon.ico)

# User Story

>AS AN employee with a busy schedule
>*I WANT* to add important events to a daily planner
>*SO THAT* I can manage my time effectively

---

# Acceptance Criteria

### GIVEN I am using a daily planner to create a schedule
- *WHEN* I open the planner
  *THEN* the current day is displayed at the top of the calendar
- *WHEN* I scroll down
  *THEN* I am presented with time blocks for standard business hours of 9am to 5pm.
- *WHEN* I view the time blocks for that day
  *THEN* each time block is color-coded to indicate whether it is in the past, present, or 
  future. 
- *WHEN* I click into a time block
  *THEN* I can enter an event 
- *WHEN* I click the save button for that time block
  *THEN* the text for that event is saved in local storage.
- *WHEN* I refresh the page
  *THEN* the saved events persist.

  ---
<!-- For the first time, I'm trying to add a decent and maybe a professional work flow and algorithm. So I have got some help from CHAT GPT to complete the final format.-->
# Algorithm:
>1. Initialize and display the planner.
>2. Create time blocks for standard business hours (9am to 5pm).
>3. Apply color coding to time blocks based on the time of the day.
>4. Load any previously saved events from local storage into their corresponding time blocks.
>5. Wait for user interaction.
>6. If a time block is clicked, enable text input to allow the user to enter an event.
>7. If the save button for a time block is clicked, save the entered event to local storage.
>8. If the page is refreshed, reload the page and repeat from step 1.

--- 
## Tasks:

### Development Phase:

1. Write the function to display the current day and time.
2. Create time blocks for each hour within the standard business hours (9am to 5pm).
3. Write the function to color code the time blocks based on whether the time of the day is in the past, present, or future.
4. Implement the functionality to load and display saved events from local storage into their corresponding time blocks.
5. Implement the user interaction handler to handle clicks into a time block and enable text input to allow the user to enter an event.
6. Implement the function to save entered events to local storage when the save button is clicked.

### Testing Phase:

1. Test the function that displays the current day and time to ensure it's accurate.
2. Test the creation of time blocks to ensure they correctly represent each hour within standard business hours.
3. Test the color-coding of time blocks to ensure they correctly indicate whether the time block is in the past, present, or future.
4. Test the loading and displaying of saved events to ensure the data is correctly retrieved and displayed within the appropriate time block.
5. Test the user interaction functionality to ensure the time blocks respond correctly to user clicks and enable text input.
6. Test the function that saves entered events to local storage to ensure the data is correctly saved and can be retrieved later.

### Deployment Phase:

1. Ensure that the persistence of data is maintained when the application is deployed. This means testing    that events saved to local storage on a user's device are still there when the user comes back to the application later.
2. Optimize the code for performance, if necessary, to ensure that the application runs smoothly on the deployment platform.
3. Implement any necessary error handling and logging so that any issues that arise during use can be addressed.
4. Prepare and maintain documentation for the deployed application, so users understand how to use it, and developers understand how to maintain it.
5. Continuously monitor the application for any potential issues or necessary updates.

---
## Pattern Recognition:

>This problem demonstrates a pattern of creating and interacting with dynamic elements based on time data. The pattern involves creating visual elements (time blocks) for a set range (business hours), manipulating their appearance based on certain conditions (time of the day), and storing user input for persistence. This pattern might be common in time management or scheduling applications.

---

## PseudoCode:

### Procedure for starting up the planner

`Procedure START_PLANNER
    DISPLAY current day at the top of the calendar
    FOR hour in range (9am to 5pm)
        CREATE time block for that hour
        IF hour is in the past
            SET color of time block to past color
        ELSE IF hour is the current hour
            SET color of time block to present color
        ELSE 
            SET color of time block to future color
        END IF
        LOAD saved event from local storage for this time block
        DISPLAY time block with color coding and saved event
    END FOR
End Procedure`

### Procedure for interacting with a time block

`Procedure INTERACT_TIME_BLOCK(time block)
    WHEN clicked into a time block
        ALLOW user to enter an event
End Procedure`

### Procedure for saving an event

`Procedure SAVE_EVENT(time block, event)
    WHEN clicked save button for that time block
        SAVE the text for that event in local storage
End Procedure`

### Procedure for refreshing the page

`Procedure REFRESH_PAGE
    WHEN page is refreshed
        CALL START_PLANNER
End Procedure`

### Main program

`CALL START_PLANNER
WHILE Planner is open
    IF user interacts with a time block
        CALL INTERACT_TIME_BLOCK(time block)
        IF user clicks save button for a time block
            CALL SAVE_EVENT(time block, event)
        END IF
    END IF
    IF user refreshes page
        CALL REFRESH_PAGE
    END IF
END WHILE`