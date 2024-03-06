// Branch Name: B2_W6_D3
      
/* Question 4: Suppose you have an array of objects representing students, each with name and grades properties. Write a function which takes name as parameter, finds it in the array, using the find method. If the name is found, check if the students has passed all the exams using every method, where passing is defined as having grades greater than or equal to 60 in all subjects. Then, finally return a new array having percentage of each grade out of 150 total marks in each subject, using map method.
Note: the percentages in the final array should not have more than 2 digits after decimal. And they must have the '%' sign appended.
*/


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

