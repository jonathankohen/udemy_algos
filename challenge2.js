const power = (base, exp) => {
    // base case
    if (exp === 0) return 1;

    // recursive call
    return base * power(base, exp - 1);
};

// power(2,2) = 2 * 2
// power(2,1) = 2 * 1 = 2

// base case
// recursive call

// console.log(power(2, 0));
// console.log(power(2, 2));
// console.log(power(2, 4));

// 1
// 4
// 16

const factorial = num => {
    // base case
    if (num === 1) return 1;

    // recursive call
    return num * factorial(num - 1);
};

// 2 * 1
//
//

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(7));

// 1
// 2
// 24
// 5040

const prodArr = arr => {
    if (arr.length === 0) return 1;
    return arr[0] * prodArr(arr.slice(1));
};

// RC = first item of arr * function removing first item
// BC = if there are no more items in arr, return 1

const recursiveRange = num => {
    // base case
    if (num === 0) return 0;
    // RC
    return num + recursiveRange(num - 1);
};

//

// console.log(recursiveRange(6));
// console.log(recursiveRange(10));

const fib = num => {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
};

// console.log(fib(4));

// num = 4 = fib(3) + fib(2)
// num = 3

// fib(1) = 1
// fib(2) = 0 + 1 = 1
// fib(3) = 1 + 1 = 2
// fib(4) = 1 + 2 = 3
// fib(5) = 2 + 3 = 5
// fib(6) = 3 + 5 = 8
//

// fib(4) = fib(3) + fib(2)
// 3. fib(2) + fib(1)

const reverse = str => {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
};

// RC: reduce all the way down to the last letter by returning str without first letter each time, and adding first letter to the end of it.
// once you get to the last letter, it will be removed, and concatenated
// then it'll start concatenating backwards b/c witchcraft, idk fuck this

console.log(reverse('jonathan'));

const reverseString = str => {
    return str.split('').reverse().join('');
};

// console.log(reverseString('jonathan'));

// split into chars
// reverse
// join into a string again

const binarySearch = (arr, val) => {
    let start = 0,
        end = arr.length - 1,
        middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start < end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
};

// find start, end, and middle of arr
// loop while middle !equal val, and start is less than end
// if val is less than middle, make end middle - 1 (getting rid of half)
// else the opposite
// if value equals the middle, return middle, otherwise, -1

// console.log(binarySearch([1, 2, 3], 3));
