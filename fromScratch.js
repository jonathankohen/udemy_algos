const countUniqueValues = arr => {
    let counter = 0;
    let left = 0;
    let right = 1;

    while (left < arr.length) {
        if (arr[left] !== arr[right]) {
            counter++;
        }
        left++;
        right++;
    }
    return counter;
};

// create counter starting at 0
// two staggered points
// compare values
// if different, counter++

console.log(countUniqueValues([1, 1, 1, 2]) + ' 2');
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) + ' 7');
console.log(countUniqueValues([]) + ' 0');
console.log(countUniqueValues([-2, -1, -1, 0, 1]) + ' 4');
