const biriyaniLover = ['mita', 'rita', 'gita', 'mita', 'abul', 'babul', 'rita', 'abul'];

function removeDuplicate(array) {
    console.log('Biriyani Lovers name:', array);
    const noDuplicates = [];
    for(const name of array){
        // console.log(name);
        if (noDuplicates.includes(name) === false) {
            noDuplicates.push(name);
        }
    }
    return noDuplicates;
}

const nameList = removeDuplicate(biriyaniLover);
console.log('New name list without duplicate name:', nameList);