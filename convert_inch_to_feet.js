function inchToFeet(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction); 
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;
}

const height = inchToFeet(75);
console.log(height);