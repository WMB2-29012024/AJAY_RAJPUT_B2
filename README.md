Branch Name: B2_W10_D4
**Question:** Show input value

1.  Create an HTML file with an <input> element and a <p> element.
2.  Add an event listener to the <input> element to detect changes in its value.
3.  When the value of the <input> changes, update the text content of the <p> element with the new value.
---

**Question:** Create a webpage with a form containing two input fields that accept numbers. When the user types numbers into both input fields and clicks a submit button, display the sum of the two numbers in a paragraph below the form.

*Task breakdown:*

1.  Set up an HTML file with a form containing two input fields that accept numbers and a submit button.
2.  Add an event listener to the form to detect when it is submitted.
3.  When the form is submitted, prevent the default form submission behavior.
4.  Retrieve the values entered in both input fields.
5.  Convert the values to numbers and calculate their sum.
6.  Display the sum of the two numbers in a paragraph below the form.
---

**Question:** You have a <select> tag (dropdown) with the following options:

-   *Apple*
-   *Mango*
-   *Orange*

Create a <p> tag to display the currently selected value from the dropdown. Update the text inside the <p> tag dynamically whenever the selection in the dropdown changes.
---

**Question:** Create a webpage with two radio buttons labeled "Male" and "Female" for selecting gender. When a user selects one of the radio buttons, display the selected gender below the radio buttons.

*Task breakdown:*

1.  Set up an HTML file with two radio buttons, one for "Male" and one for "Female", each with a unique value and the same name attribute.
2.  Use JavaScript to add event listeners to each radio button to detect when they are clicked.
3.  When a radio button is clicked, update the text content of a paragraph element below the radio buttons with the selected gender.
---

**Question:** Create a webpage with an <input type="file"> element and a paragraph below it. When the user selects a file using the file input and clicks a submit button, display the name and size of the selected file in the paragraph below.

*Task breakdown:*

1.  Set up an HTML file with an <input type="file"> element and a submit button.
2.  Add an event listener to the submit button to detect when it is clicked.
3.  When the submit button is clicked, retrieve the file selected using the file input.
4.  Display the name and size of the selected file in the paragraph below.
---

**Question:** Create a webpage with an input field that allows users to search for fruits in a list. Below the input field, display a list of 8 fruits. When the user types in the input field, dynamically filter the list to show only the fruits that match the search query.

*Task breakdown:*

1.  Set up an HTML file with an input field and an unordered list containing 8 list items with different fruit names.
2.  Add an event listener to the input field to detect changes in its value.
3.  When the input value changes, filter the list items based on the input value.
4.  Display only the list items that match the search query.
---

**Question:** Create a webpage with a dropdown menu (select element) containing two options: "Dark" and "Light". When the user selects "Dark", change the background color of the body to black and the text color to white. When the user selects "Light", revert the background color to white and the text color to black. Additionally, include a paragraph element with some sample text.

*Task breakdown:*

1.  Set up an HTML file with a select element containing two options: "Dark" and "Light".
2.  Add an event listener to the select element to detect changes in its value.
3.  When the value changes, check which option is selected.
4.  If "Dark" is selected, change the background color of the body to black and the text color to white.
5.  If "Light" is selected, revert the background color to white and the text color to black.
6.  Include a paragraph element with some sample text and style it accordingly based on the selected theme.
---

**Question:** Create a webpage with a table containing dummy data. Use JavaScript to dynamically generate the table and populate it with dummy data.
```javascript
const dummyData = [ 
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Alice', age: 25, city: 'Los Angeles' }, 
  { name: 'Bob', age: 35, city: 'Chicago' }, 
  { name: 'Emma', age: 28, city: 'Houston' }, 
  { name: 'Michael', age: 32, city: 'San Francisco' } 
];
```

*Task breakdown:*

1.  Set up an HTML file with an empty table element.
2.  Use JavaScript to create an array of dummy data, such as a list of names, ages, and cities.
3.  Iterate through the array to generate table rows (TR) and table data cells (TD) for each item in the array.
4.  Append the table rows to the table element to display the dummy data.
---
**  
Question:** Create a webpage with two input fields labeled "Minimum" and "Maximum". When the user types in two numbers representing the minimum and maximum values and clicks a "Generate" button, generate a random number between the specified minimum and maximum values and display it in a paragraph below the button.

_Task breakdown:_

1.  Set up an HTML file with two input fields for "Minimum" and "Maximum", a button labeled "Generate", and a paragraph element below the button.
2.  Add an event listener to the "Generate" button to detect when it is clicked.
3.  When the button is clicked, retrieve the values entered in the "Minimum" and "Maximum" input fields.
4.  Generate a random number between the specified minimum and maximum values.
5.  Display the generated random number in the paragraph below the button.
----------

**Question:** Create a webpage with two input fields labeled "Lower Limit" and "Upper Limit". When the user enters two numbers representing the lower and upper limits and presses the "Generate Random Number" button, generate a random integer within the specified range and display it in a paragraph below the button.

_Task breakdown:_

1.  Set up an HTML file with two input fields for "Lower Limit" and "Upper Limit", a button labeled "Generate Random Number", and a paragraph element below the button.
2.  Add an event listener to the "Generate Random Number" button to detect when it is clicked.
3.  Retrieve the values entered in the "Lower Limit" and "Upper Limit" input fields when the button is clicked.
4.  Generate a random integer within the range specified by the lower and upper limits.
5.  Display the generated random number in the paragraph below the button.
----------

**Question:** Create a webpage with two input fields labeled "Start" and "End". When the user inputs two numbers representing the start and end values of a range and clicks a "Generate Number" button, generate a random number within that range and display it in a paragraph below the button.

_Task breakdown:_

1.  Set up an HTML file with two input fields for "Start" and "End", a button labeled "Generate Number", and a paragraph element below the button.
2.  Add an event listener to the "Generate Number" button to detect when it is clicked.
3.  Retrieve the values entered in the "Start" and "End" input fields when the button is clicked.
4.  Generate a random number within the range specified by the start and end values.
5.  Display the generated random number in the paragraph below the button.
---
**Question:** Create a webpage with a button labeled "Generate Random String". When the user clicks the button, generate a random string of 8 digits (numbers) and display it in a paragraph below the button.

_Task breakdown:_

1.  Set up an HTML file with a button labeled "Generate Random String" and a paragraph element below the button.
2.  Add an event listener to the button to detect when it is clicked.
3.  When the button is clicked, generate a random string of 8 digits.
4.  Display the generated random string in the paragraph below the button.
----------

**Question:** Create a webpage with two input fields labeled "Min" and "Max". When the user enters two numbers representing the minimum and maximum values of a range and clicks a "Generate" button, generate a random number within that range and display it in a paragraph below the button.

_Task breakdown:_

1.  Set up an HTML file with two input fields for "Min" and "Max", a button labeled "Generate", and a paragraph element below the button.
2.  Add an event listener to the "Generate" button to detect when it is clicked.
3.  Retrieve the values entered in the "Min" and "Max" input fields when the button is clicked.
4.  Generate a random number within the range specified by the minimum and maximum values.
5.  Display the generated random number in the paragraph below the button.
---


**Question:** Develop a mobile menu with the following functionalities:
-   When a user clicks on any icon or link, the icon's color should be updated.
-   Adjust the background color of the menu upon selection.
-   Modify the text color to enhance readability and aesthetics.
![Cloudinary](https://res.cloudinary.com/dzzysrpcm/image/upload/v1712224183/Web%20Masters/Questions/Screenshot_2024-04-04_at_2.55.19_PM_rxfpvd.png)
---

**Question:** Develop a mobile menu with the following functionalities:
-   When a user clicks on any icon, the icon's color should be updated.
-   Adjust the background color of the menu upon selection.
-   Show text with the same color as icon to enhance readability and aesthetics.

![Cloudinary](https://res.cloudinary.com/dzzysrpcm/image/upload/v1712226600/Web%20Masters/Questions/Screenshot_2024-04-04_at_3.59.16_PM_jzrjhb.png)            
            