const numbers = [42, 13, 58, 65, 81, 96, 7, 5, 0, 31, 25, 77];
let sum = 0;
let avg = 0;
function oddAverage(numbers) {
    console.log('Numbers Array:', numbers);
    const oddNumber = [];
    for (const number of numbers) {
        // console.log('Numbers Array: ' , number);
        if (number % 2 === 1) {
            oddNumber.push(number);
            sum = sum + number;
        }
    }
    console.log('Odd Numbers Array: ', oddNumber);
    console.log('Odd numbers summation:', sum);

    const count = oddNumber.length;
    console.log('Odd numbers array length is:', count);

    avg = sum / count;
    return avg;
}
const average = oddAverage(numbers);
console.log('Odd numbers average is:', average);