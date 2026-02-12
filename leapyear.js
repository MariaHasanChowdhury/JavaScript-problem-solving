function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
}
const isYear1 = isLeapYear(2100);
const isYear2 = isLeapYear(2400);
const isYear3 = isLeapYear(1900);
const isYear4 = isLeapYear(2052);
console.log(isYear1, isYear2, isYear3, isYear4);
