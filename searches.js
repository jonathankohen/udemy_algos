// - SEARCHES
// linear search. check all. not bad for unsorted.
// if sorted, there are other ways
// ex methods/indexOf, includes, find, findIndex

const linearSearch = (arr, val) => {
    if (arr === null) return false;
    for (let i of arr) {
        if (arr[i] === val) {
            return i;
        }
    }
    return false;
};

// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 7));

// needs to be sorted arr
const binarySearch = (arr, val) => {
    let start = 0,
        end = arr.length - 1,
        middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
};

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13));

// naive string search
// two strings
// search for substring from short in long
const nSS = (long, short) => {
    let counter = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) counter++;
        }
    }
    return counter;
};

// console.log(nSS('lorie loled', 'lo'));
