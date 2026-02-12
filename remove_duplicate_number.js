const number = [23, 15, 29, 33, 23, 62, 62, 45, 29, 32, 29, 50, 50];

function removeDuplicate(array) {
    console.log('Number array with duplicate number:', array);
    const noDuplicates = [];
    for(const num of array){
        // console.log(num);
        if (noDuplicates.includes(num) === false) {
            noDuplicates.push(num);
        }
    }
    return noDuplicates;
}

const newArray = removeDuplicate(number);
console.log('New array without duplicate number:', newArray);