const sameFrequency = (num1, num2) => {
    if (num1.toString().length !== num2.toString().length) {
        return false;
    }

    let counter1 = {};
    let counter2 = {};

    for (let i = 0; i < num1; i++) {
        counter1[i] ? counter1[i]++ : (counter1[i] = 1);
    }

    for (let i = 0; i < num2; i++) {
        counter2[i] ? counter2[i]++ : (counter2[i] = 1);
    }

    // console.log(counter1);
    // console.log(counter2);

    for (let key in counter1) {
        if (!(key in counter2)) {
            return false;
        }

        if (counter1[key] === counter2[key]) {
            counter2[key]--;
        }
    }

    return true;
};

// check if same length
// create two obj
// loop i of num1 to populate obj1
// loop i of num2 to populate obj2
// loop key in obj1
// check if key is in counter2, if not, return false
// else check if values are the same, if so, __
// return true after loop

// console.log(sameFrequency(182, 281) + ' true');
// console.log(sameFrequency(34, 14) + ' false');
// console.log(sameFrequency(3589578, 5879385) + ' true');
// console.log(sameFrequency(22, 222) + ' false');

const areThereDuplicates = (...arr) => {
    if (arr === null) {
        return false;
    }

    let counter = {};

    for (let i of arr) {
        counter[i] ? counter[i]++ : (counter[i] = 1);
    }

    for (let key in counter) {
        if (!(key in counter)) {
            return false;
        }

        if (counter[key] >= 2) {
            return true;
        }
    }
    return false;
};

// create obj
// loop ...arr to populate obj
// loop obj, if key isn't in counter return false. If counter[key] >= 2, return true

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates('a', 'b', 'c', 'a'));
// false
// true
// true

const averagePair = (arr, target) => {
    let start = 0,
        end = arr.length - 1;

    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === target) return true;
        else if (avg < target) start++;
        else end--;
    }
    return false;
};

// pointers at start and end that increment conditionally based on avg compared to target
// while loop: if avg = target, return true. if avg < target, start++, less, end--

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));

const isSubsequence = (str1, str2) => {
    let i = 0,
        j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
};

// vars i and j = 0
// while loop of str2
// if match, increment i
// if after that i = str1 length, return true
// otherwise, move on to the next j letter and finish loop

// console.log(isSubsequence('abc', 'abcd'));

// j < 4 || i === 3
// i | j | str[i] | str[j] | action

// 0 | 0 | a | a | i++
// 1 | 0 | b | a | j++
// 1 | 1 | b | b | i++
// 2 | 1 | c | a | j++
// 2 | 2 | c | c | i++
// 3 |

// TODO: come back
const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null;

    let total = 0;

    for (let i = 0; i < num; i++) {
        total += arr[i];
    }

    let currentTotal = total;

    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        console.log(currentTotal);
        total = Math.max(total, currentTotal);
        console.log(total);
    }
    return total;
};

// loop through num amount in arr
// loop from num amount and subtract the first element, and add the current one
// add edge cases

// console.log(maxSubarraySum([100, 200, 300, 400], 2));

// total = 300, cT = 300.
// cT = 300 - 100
