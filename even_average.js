const numbers = [23, 32, 18, 2, 10, 85, 100, 45, 69, 77, 53, 91, 105];
let sum = 0;
let avg = 0;

function evenAverage(numbers) {
    console.log('Numbers Array:', numbers);
    const evenNumber = [];
    for (const number of numbers){
        // console.log(number);
        if (number % 2 === 0) {
            evenNumber.push(number);
            sum = sum + number;
        }
    }
    console.log('Even Numbers Array: ', evenNumber);
    console.log('Even numbers summation is :', sum);

    const count = evenNumber.length;
    console.log('Even numbers array length is :', count);

    avg = sum / count;
    return avg;
}

const average = evenAverage(numbers);
console.log('Even numbers average is:', average);