// LINEAR SEARCH

// loop
// is current number = key?
// if yes, return 1
// if not, return false

const linearSearch = (key, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
};
// const arr = [24, 8, 23, 3];
// console.log(linearSearch(8, arr));
// console.log(linearSearch(-99, arr));

// RECURSION

// rSum(5) = 5+4+3+2+1... etc.
// loops over itself until at base case, 1 in this case

function rSum(n) {
    if (n === 1) {
        return 1;
    } else {
        return rSum(n - 1) + n;
    }
}
// console.log(rSum(2));

// iteration
// loop from 1 to n
// for each, add the num before it to itself

// i | result
// 1 | 1 + (1 + 1) = 3
// 2 | 2 + ()
//

const iSum = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
// console.log(iSum(3));

// i | sum
// 1 | 1 * 1 = 1
// 2 | 2 * 1 = 2
// 3 | 3 * 2 = 6
// 4 | 4 * 6 = 24

const factorial = num => {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
};
// console.log(factorial(4));

const rFact = num => {
    if (num === 1) {
        return 1;
    } else {
        return rFact(num - 1) * num;
    }
};
// console.log(rFact(4));

// FIB
const fib = n => {
    let arr = [0, 1];
    for (let i = 0; i < n; i++) {
        arr.push(arr[0] + arr[1]);
        arr.shift();
    }
    return arr[0];
};
// console.log(fib(3));

// fib(1) = 1
// fib(2) = 1
// fib(3) = 2, fib(2) + fib(1)
// fib(4) = 3, fib(3) + fib(2)
// fib(5) = 5, fib(4) + fib(3)

const rFib = n => {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return rFib(n - 1) + rFib(n - 2);
    }
};
// console.log(rFib(5));
// answer is 2

// TODO: try again
const findMid = (min, max) => {
    return Math.floor((min + max) / 2);
};

const rBS = (key, arr, min, max) => {
    if (max < min) {
        return -1;
    } else {
        var mid = findMid(min, max);
        // var mid = Math.floor(arr.length / 2);
    }

    if (arr[mid] < key) {
        rBS(key, arr, mid + 1, max);
    } else if (arr[mid] > key) {
        rBS(key, arr, min, mid - 1);
    } else {
        return mid;
    }
};

// const bsArr = [-90, -19, 0, 2, 12, 29, 33, 190, 320]
// console.log(rBS(arr, 12));
// 4
// rBS(arr, 0)              => 2
// rBS(arr, 190)            => 7

// BINARY SEARCH TREES
// left subtree only contains values that are less than or qu to node's va;
// right opposite
// both are also BST

// when deleting and there are children, we connect from the subtree up to the new parent
//
