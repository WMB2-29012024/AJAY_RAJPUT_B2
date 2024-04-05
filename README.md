## Branch Name: B2_W10_D5

**Question:** Make a API call using fetch method that fetches data from the URL "[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)" asynchronously using async/await and logs the retrieved data to the console.

_Task breakdown:_

1.  Use the async/await syntax to make an asynchronous request to the specified URL.
2.  Await the response from the URL and store it in a variable.
3.  Parse the response data as JSON.
4.  Log the parsed data to the console.

---

**Question:** Develop a JavaScript program that fetches data from the URL "[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)" asynchronously using the Fetch API with .then() and .catch() methods, and logs the retrieved data to the console.

_Task breakdown:_

1.  Use the Fetch API to make an asynchronous request to the specified URL.
2.  Handle the promise returned by the fetch function using the .then() method.
3.  Parse the response data as JSON in the first .then() callback.
4.  Log the parsed data to the console.
5.  Handle errors by adding a .catch() method to the promise chain and log any errors to the console.

---

**Question:** Develop a JavaScript program that makes an API call using the Fetch API to fetch data from the URL "[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)" asynchronously. The API call should be triggered by clicking a button. Use async/await syntax to handle the asynchronous request and log the retrieved data to the console.

_Task breakdown:_

1.  Set up a button in the HTML document that will trigger the API call.
2.  Use the async/await syntax to make an asynchronous request to the specified URL.
3.  Await the response from the URL and store it in a variable.
4.  Parse the response data as JSON.
5.  Log the parsed data to the console.

---

**Question:** Develop a JavaScript program that fetches data from the URL "[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)" asynchronously using async/await. Display a paragraph element containing the text "Loading" until the data is fetched. After fetching the data, display "Data fetched" if successful or "Failed to fetch Data" if the API call fails.

_Task breakdown:_

1.  Initialize a paragraph element with the text "Loading".
2.  Use the async/await syntax to make an asynchronous request to the specified URL.
3.  Await the response from the URL and store it in a variable.
4.  Parse the response data as JSON.
5.  If the data is fetched successfully, replace the text in the paragraph element with "Data fetched".
6.  If the API call fails, replace the text in the paragraph element with "Failed to fetch Data".

---

**Question:** Develop a loader using CSS animations.

_Explanation:_

Create a loader with a spinning animation effect using CSS. Follow these steps to implement the loader:

![Cloudinary](https://res.cloudinary.com/dzzysrpcm/image/upload/v1712298122/ezgif.com-video-to-gif-converter_vwvguc.gif)

1.  **Create a Container Div:**
    
    -   Create a <div> element to contain the loader.
    -   Assign a class name to the div, for example, .loader-container.
2.  **Set Width and Height:**
    
    -   Apply the width and height properties to the container div to define its dimensions.
3.  **Add Border:**
    
    -   Add a border to the container div using the border property.
    -   Set the border width to 5px.
    -   Choose the color of the border, for example, blue.
4.  **Set Border Radius:**
    
    -   Apply a border radius to the container div using the border-radius property.
    -   Set the border radius to 50% to create a circular shape.
5.  **Define CSS Animation:**
    
    -   Define a CSS animation using @keyframes.
    -   Name the animation, for example, spin.
    -   Specify the starting and ending points of the animation using percentages.
    -   Use the transform property to rotate the div.
    -   Rotate the div by 360deg to complete a full circle.
    -   Set the duration of the animation to 1s for a one-second rotation.
    -   Use infinite to loop the animation indefinitely.

---

**Question:** Develop a JavaScript program that fetches data from the URL "[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)" asynchronously using async/await. Display "No data" until the data is fetched. After clicking a button initiate the API call and update the loader image accordingly - display a "Data fetched" message if successful or a "Failed to fetch Data" message if the API call fails.

_Task breakdown:_

1.  Initialize an image element with the loader GIF URL provided.
2.  Create a button in the HTML document that will trigger the API call.
3.  Add an event listener to the button to handle the click event.
4.  Inside the event listener function, replace the loader image with the fetched data or an error message based on the API call's result.
5.  Use the async/await syntax to make an asynchronous request to the specified URL.
6.  Await the response from the URL and store it in a variable.
7.  Parse the response data as JSON.
8.  If the data is fetched successfully, replace the loader image with a "Data fetched" message.
9.  If the API call fails, replace the loader image with a "Failed to fetch Data" message.

---

**Question:** Develop a JavaScript program that fetches data from the URL "[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)" asynchronously using async/await. Display a "No Data" until the data is fetched. After clicking a button, initiate the API call and update the loader image accordingly - display a "Total Results: {{data.length}}" message if successful or a "Failed to fetch Data" message if the API call fails. Additionally, loop through the fetched data and display it in a list format.

_Task breakdown:_

1.  Initialize an image element with the loader GIF URL provided.
2.  Create an unordered list element to display the fetched data.
3.  Create a button in the HTML document that will trigger the API call.
4.  Add an event listener to the button to handle the click event.
5.  Inside the event listener function, replace the loader image with the fetched data or an error message based on the API call's result.
6.  Use the async/await syntax to make an asynchronous request to the specified URL.
7.  Await the response from the URL and store it in a variable.
8.  Parse the response data as JSON.
9.  If the data is fetched successfully, replace the loader image with a "Data fetched" message and loop through the data to create list items.
10.  If the API call fails, replace the loader image with a "Failed to fetch Data" message.

---

**Question:** Develop a JavaScript program that fetches data from the API endpoint "[https://jsonplaceholder.typicode.com/todos/](https://jsonplaceholder.typicode.com/todos/)" asynchronously when the user clicks a button with the text "Get Data". Upon clicking the button, change its text to a loader and initiate the API call. Upon receiving a response, update the button text to Get Data again and change p tag text to either "Data fetched" or "Failed to fetch data" based on the API call's success or failure.

_Task breakdown:_

1.  Create a button with the text "Get Data" in the HTML document.
2.  Add an event listener to the button to handle the click event.
3.  Inside the event listener function, change the button text to a loader.
4.  Use the async/await syntax to make an asynchronous request to the specified URL.
5.  Upon receiving the response, update the button text and p tag text to "Data fetched" if successful or "Failed to fetch data" if the API call fails.

---

**Question:** Develop a JavaScript program that fetches data from the URL "[https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)" asynchronously using async/await. Display the fetched data in the UI. Implement a "Next" button that, when clicked, updates the number in the URL to fetch the next set of data from the API endpoint ("[https://jsonplaceholder.typicode.com/todos/2](https://jsonplaceholder.typicode.com/todos/2)", "https://jsonplaceholder.typicode.com/todos/3", and so on) and displays it in the UI.

_Task breakdown:_

1.  Initialize an unordered list element to display the fetched data.
2.  Create a "Next" button in the HTML document.
3.  Add an event listener to the "Next" button to handle the click event.
4.  Inside the event listener function, update the URL to fetch the next set of data.
5.  Use the async/await syntax to make an asynchronous request to the updated URL.
6.  Await the response from the URL and store it in a variable.
7.  Parse the response data as JSON.
8.  Update the UI with the fetched data.          
            