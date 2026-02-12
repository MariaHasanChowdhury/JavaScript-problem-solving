let num1 = 6;
let num2 = 9;

console.log('Before swaping:');
console.log('num1 = ' + num1 + ' num2 = ' + num2);

[num1, num2] = [num2, num1];

console.log('After swaping:');
console.log('num1 = ', num1);
console.log('num2 = ', num2);