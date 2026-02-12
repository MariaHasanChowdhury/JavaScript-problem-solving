let num1 = 3;
let num2 = 7;

console.log('Before swaping:');
console.log('num1 = ' + num1 + ' num2 = ' + num2);

num1 = num1 + num2; // 3 + 7 = 10
num2 = num1 - num2; // 10 - 7 = 3
num1 = num1 - num2; // 10 - 3 = 7
console.log('After swaping:');
console.log('num1 = ', num1);
console.log('num2 = ', num2);