// - CHAR COUNT
const charCount = str => {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
};
// console.log(charCount('hello'));

// - FREQUENCY COUNTING
const same = (arr1, arr2) => {
    // edge case: check if same len, if not, false
    if (arr1.length !== arr2.length) {
        return false;
    }
    // create two new objects
    let counter1 = {};
    let counter2 = {};
    // loop arrays and create keys for each value in array and add 1 or initialize it
    // ex/if it's not already there, add 1 to zero of new key, or just add one to existing value
    for (let val of arr1) {
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1;
    }
    console.log(counter1);
    console.log(counter2);
    // loop counter1
    for (let key in counter1) {
        // check if key from counter1 squared is NOT a key in counter2
        if (!(key ** 2 in counter2)) {
            return false;
        }
        // check if the values correspond
        if (counter2[key ** 2] !== counter1[key]) {
            return false;
        }
    }
    return true;
};

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// Anagrams challenge
// create obj that represents occurrence of each letter in one of the strings
// loop over the other string, compare it, and update the object
const anagrams = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let counter = {};

    for (let value of str1) {
        counter[value] = (counter[value] || 0) + 1;
    }

    for (let value of str2) {
        if (value in counter) {
            counter[value] += 1;
        } else {
            return false;
        }
    }
    return true;
};

// console.log(anagrams('car', 'rac'));

const anagrams2 = (str1, str2) => {
    // compare lengths, if not equal, return false
    if (str1.length !== str2.length) {
        return false;
    }

    // create obj to keep track of frequency
    let counter = {};

    // loop str1 to populate the object
    for (let char of str1) {
        counter[char] ? (counter[char] += 1) : (counter[char] = 1);
    }
    console.log(counter);

    // loop str2
    for (let char of str2) {
        // check that char is in obj. if we ever encounter 0, return false
        if (!counter[char]) {
            return false;
        } else {
            // reduce key value by one
            counter[char] -= 1;
        }
    }
    return true;
};

// console.log(anagrams2('anagram', 'nagaram'));

// MULTIPLE POINTERS PATTERN
const sumZero = arr => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
};

// console.log(sumZero([-2, -1, 0, 1, 2]));
// console.log(sumZero([-2, -1, 0, 5]));

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

// console.log(countUniqueValues([1, 1, 1, 2]) + ' 2');
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) + ' 7');
// console.log(countUniqueValues([]) + ' 0');
// console.log(countUniqueValues([-2, -1, -1, 0, 1]) + ' 4');

// SLIDING WINDOW, max sum of given number of consecutive numbers in arr
const slidingWindow = (arr, num) => {
    let maxSum = 0;
    let temp = 0;
    // edge case
    if (arr.length < num) return null;
    // loop first amount of n numbers and add to sum
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    // make temp = maxSum
    temp = maxSum;
    // loop through whole thing once, shifting the window over one at a time
    for (let i = num; i < arr.length; i++) {
        // subtract value of index position that's num times to the left, and add current index value, essentially shifting the window over
        temp = temp - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, temp);
    }
    return maxSum;
};

// console.log(slidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// - DIVIDE AND CONQUER
// divide larger data set into smaller chunks

// - RECURSION
// a function that calls itself until it gets to base case
// goes over and over until the data gets smaller and smaller each time

const countDown = num => {
    // base case
    if (num <= 0) {
        console.log('Done');
        return;
    }
    console.log(num);
    // action on param (important)
    num--;
    // recursive call
    countDown(num);
};

// countDown(5);

const sumRange = num => {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
};

// console.log(sumRange(3));

// sR(3) returns 3 + sR(2)*
// sR(2) returns 2 + sR(1) **
// sR(1) returns 1***
// so, we go back up:
// sR(1) = 1*
// sR(2) = 2 + 1 = 3**
// ~ sR(3) = 3 + 3 = 6***

// Factorial
// ex/4! = 4*3*2*1

// iteratively
const factIt = num => {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
};

// console.log(factIt(4));
// 24

// recursively
// write recursive call first, then write base case
// make sure to include return statements, return the right things
const factR = num => {
    // base case
    if (num === 1) return 1;
    // recursive call
    return num * factR(num - 1);
};

// console.log(factR(5));
// 120

// helper method recursion
const collectOddValues = arr => {
    let result = [];

    const helper = input => {
        // base case
        if (input.length === 0) return;
        // check if first element is odd. if so, push to result arr
        if (input[0] % 2 !== 0) result.push(input[0]);
        // recursive method called on rest of arr from index 1, basically shortening the arr
        helper(input.slice(1));
    };

    helper(arr);
    return result;
};

// console.log(collectOddValues([1, 2, 3, 4, 5]));

// pure recursion version
const PR = arr => {
    let newArr = [];

    // base case
    if (arr.length === 0) return newArr;

    // check if first item odd, push to newArr
    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    // recursive call. newArr concats the value of RC with arr minus first item
    newArr = newArr.concat(PR(arr.slice(1)));
    return newArr;
};

// console.log(PR([1, 2, 3, 4, 5]));

const fib = num => {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
};

// console.log(fib(4));

// bases cases: look for lowest iterable/possible point to reach. is the lowest possible point 1 or 0?
// don't forget, BCs are where the function stops and comes back. it's not the end of it
