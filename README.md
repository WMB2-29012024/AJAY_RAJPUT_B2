**Question: Using Promise.any to Fetch Data Concurrently**

_Task:_  You are required to modify the provided code to call three promises concurrently using Promise.any syntax. Each promise represents a separate asynchronous operation, such as fetching data from different API endpoints. Once all promises are resolved, log the combined result to the console.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 rejected');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 3000);
});

// Output: Promise 1 resolved
```

**Question: Using Promise.any to Fetch Data Concurrently**

_Task:_ You are required to modify the provided code to call three promises concurrently using Promise.any syntax. Each promise represents a separate asynchronous operation, such as fetching data from different API endpoints. Once all promises are resolved, log the combined result to the console.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 1 rejected');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 rejected');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 3 rejected');
  }, 3000);
});

// Output
// Error: [AggregateError: All promises were rejected] {
//  [errors]: [ 'Promise 1 rejected', 'Promise 2 rejected', // 'Promise 3 rejected' ]
}
```
**Question: Using Promise.all to Fetch Data Concurrently**

_Task:_ You are required to modify the provided code to call three promises concurrently using Promise.all syntax. Each promise represents a separate asynchronous operation, such as fetching data from different API endpoints. Once all promises are resolved, log the combined result to the console.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 3000);
});

//Output:
// [ 'Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]
```
**Question: Using Promise.all to Fetch Data Concurrently**

_Task:_ You are required to modify the provided code to call three promises concurrently using Promise.all syntax. Each promise represents a separate asynchronous operation, Once all promises are resolved, log the combined result to the console.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 3 reject');
  }, 3000);
});

// Output: Promise 3 reject
```
**Question: Using Promise.all to Fetch Data Concurrently**

_Task:_ You are required to modify the provided code to call three promises concurrently using Promise.all syntax. Each promise represents a separate asynchronous operation, Once all promises are resolved, log the combined result to the console.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 1 rejected');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 rejected');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 3 reject');
  }, 3000);
});

// Output: Promise 1 rejected
```
**Question: Using Promise.race to Fetch Data Concurrently**

_Task:_ You are required to modify the provided code to call three promises concurrently using Promise.race syntax. Each promise represents a separate asynchronous operation, Once all promises log the combined result to the console.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 3 rejected');
  }, 3000);
});

// Output: Promise 2 resolved
```
**Question: Using Promise.allSettled to Fetch Data Concurrently**

_Task:_ You are required to modify the provided code to call three promises concurrently using Promise.allSettled syntax. Each promise represents a separate asynchronous operation, Once all promises log the combined result to the console.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 rejected');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 3000);
});

// Output: [
//  { status: 'fulfilled', value: 'Promise 1 resolved' },
//  { status: 'rejected', reason: 'Promise 2 rejected' },
//  { status: 'fulfilled', value: 'Promise 3 resolved' }
//]
```
---

**Question: Fetching Posts and Comments Based on User Selection**

Task: You are required to create a `<select>` tag with options ranging from 1 to 10. When a user selects a number from the dropdown, fetch posts associated with that user and comments associated with one of those posts from two different API endpoints. Utilize the .then.catch chaining syntax to handle asynchronous operations and error scenarios.

**Instructions:**

1.  Create a `<select>` tag with options ranging from 1 to 10 representing different user IDs.
2.  Add an event listener to the `<select>` tag to detect changes in the selected option.
3.  Inside the event listener function, extract the selected user ID from the dropdown.
4.  Use the selected user ID to construct the URL for fetching posts associated with that user from the API endpoint "[https://jsonplaceholder.typicode.com/posts?userId={userID}](https://jsonplaceholder.typicode.com/posts?userId={userID})".
5.  Fetch posts associated with the selected user using the constructed URL.
6.  Chain a `.then` method to handle the successful response from fetching posts and parse the JSON data.
7.  Use the parsed data to extract a post ID (e.g., the first post in the list).
8.  Use the extracted post ID to construct the URL for fetching comments associated with that post from the API endpoint "[https://jsonplaceholder.typicode.com/comments?postId={postID}](https://jsonplaceholder.typicode.com/comments?postId={postID})".
9.  Fetch comments associated with the selected post using the constructed URL.
10.  Chain a `.then` method to handle the successful response from fetching comments and parse the JSON data.
11.  Display both the fetched posts and comments in the UI.
12.  Chain a `.catch` method to handle any errors that occur during the asynchronous operations and display an error message in the UI.

---

**Question: Searching and Displaying Posts**

Task: You are required to implement a feature that allows users to search for posts by title using a search input field. Upon entering a search query, the UI should dynamically update to display only the filtered posts.

**Instructions:**

1.  You need to create a search input field (`searchInput`) and a container (`postsContainer`) to display posts.
2.  Add an event listener to the `searchInput` field to detect changes in the input value.
3.  Inside the event listener function, implement a debounce mechanism to delay the search operation by 500 milliseconds after the user stops typing.
4.  When the debounce timer expires, retrieve the search value from the input field, convert it to lowercase, and trim any leading or trailing whitespace.
5.  Call the `fetchPosts()` function with the search value as an argument to fetch posts from the API.
6.  Inside the `fetchPosts()` function, fetch posts data from the provided API endpoint "[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)".
7.  Chain a `.then` method to handle the successful response from fetching posts and parse the JSON data  and filter data through the search value.
8.  Call the `displayPosts()` function with the filtered posts data.
9.  Inside the `displayPosts()` function, iterate through the posts array and create HTML elements for each post that matches the search criteria.
10.  Append the created HTML elements to the `postsContainer` to display them in the UI.
11.  If any error occurs during the fetching process, log the error to the console.