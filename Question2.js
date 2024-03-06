// Branch Name: B2_W6_D3
      
/* Question 2: You are given an array of objects representing transactions, each with a type ('income' or 'expense') and a amount property. Write a function that returns an integer representing the final balance after all transactions, i.e, if the type is 'income', add the amount to balance, and if the type is 'expense, subtract the amount from balance. You need to do this using only the reduce method.
*/


// Input:
const transactions = [
  { type: 'expense', amount: 100 },
  { type: 'income', amount: 200 },
  { type: 'expense', amount: 50 },
  { type: 'expense', amount: 70 },
  { type: 'income', amount: 150 },
  { type: 'income', amount: 300 }
];

