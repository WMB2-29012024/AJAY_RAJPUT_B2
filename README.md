## Branch Name: B2_W6_D3
Question 1: Given an array of objects representing students, each with name and age properties, write a function to filter out students who are teenagers (age between 13 and 19) and whose names contain the letter 'a', but only if their names are not more than 6 characters long. Implement the solution using the filter method of arrays.
  ```javascript
  
// Input:
const students = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 14 },
  { name: "David", age: 18 },
  { name: "Ella", age: 17 },
  { name: "Frank", age: 15 },
  { name: "Grace", age: 13 },
  { name: "Henry", age: 19 },
  { name: "Isabella", age: 16 },
  { name: "Jacob", age: 18 }
];

  ```
      
Question 2: You are given an array of objects representing transactions, each with a type ('income' or 'expense') and a amount property. Write a function that returns an integer representing the final balance after all transactions, i.e, if the type is 'income', add the amount to balance, and if the type is 'expense, subtract the amount from balance. You need to do this using only the reduce method.
  ```javascript
  
// Input:
const transactions = [
  { type: 'expense', amount: 100 },
  { type: 'income', amount: 200 },
  { type: 'expense', amount: 50 },
  { type: 'expense', amount: 70 },
  { type: 'income', amount: 150 },
  { type: 'income', amount: 300 }
];

  ```
      
Question 3: You're given a sorted array of integers. Write a function to replace all even numbers from the array with their squared values, using splice method. And then return all the numbers from the array which are greater than 6, in a new array using findIndex and slice method.
  ```javascript
  
// Input:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Output:
// [16, 36, 64, 100]

  ```
      
Question 4: Suppose you have an array of objects representing students, each with name and grades properties. Write a function which takes name as parameter, finds it in the array, using the find method. If the name is found, check if the students has passed all the exams using every method, where passing is defined as having grades greater than or equal to 60 in all subjects. Then, finally return a new array having percentage of each grade out of 150 total marks in each subject, using map method.
Note: the percentages in the final array should not have more than 2 digits after decimal. And they must have the '%' sign appended.
  ```javascript
  
// Input:
const students = [
    { name: "Alice", grades: [80, 75, 90] },
    { name: "Bob", grades: [55, 60, 65] },
    { name: "Charlie", grades: [70, 65, 75] },
    { name: "David", grades: [85, 90, 95] },
    { name: "Ella", grades: [60, 55, 70] }
];

// Output:
// [56.67%, 60%, 63.34%]

  ```
      