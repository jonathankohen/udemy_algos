const print = () => {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
};

// print();

const odd = () => {
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
};

// odd();

const oddSum = () => {
    let sum = 0;
    for (let i = 1; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
};

// console.log(oddSum());

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

const loopArr = arr => {
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
};

// loopArr([1, 3, 5, 7, 9, 13]);

const findMax = arr => {
    let max = arr[0];
    let i;
    for (i of arr) {
        if (i > max) {
            max = i;
        }
    }
    return max;
};

// console.log(findMax([-3, 3, 5, 7]));

const findAvg = arr => {
    let sum = 0;
    let i;
    for (i of arr) {
        sum += i;
    }
    return sum / arr.length;
};

// console.log(findAvg([1, 3, 5, 7, 20]));

const pushOdd = arr => {
    let newArr = [];
    for (let i = 1; i <= 255; i++) {
        if (i % 2 != 0) {
            newArr.push(i);
        }
    }
    return newArr;
};

// console.log(pushOdd([1, 3, 5, 7, 20]));

const greaterThan = arr => {
    const x = 3;
    let counter = 0,
        i;
    for (i of arr) {
        if (i > x) {
            counter++;
        }
    }
    return counter;
};

// console.log(greaterThan([1, 3, 5, 7, 20]));

const squareArr = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
};

// console.log(squareArr([1, 5, 10, -2]));

const noNeg = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
};

// console.log(noNeg([1, 5, 10, -2]));

const maxMinAvg = arr => {
    let max = arr[0],
        min = arr[0],
        sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    return `Max = ${max}, min = ${min}, Average = ${sum / arr.length}`;
};

// console.log(maxMinAvg([1, 5, 10, -2]));

const shiftArr = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
};

// console.log(shiftArr([1, 5, 10, 7, -2]));

const negDojo = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
};

// console.log(negDojo([1, 5, 10, 7, -2]));

const randomArr = () => {
    let newArr = [];
    for (let i = 0; i < 10; i++) {
        let r = Math.floor(Math.random() * 101);
        newArr.push(r);
    }
    return newArr;
};

// console.log(randomArr());

const swap = arr => {
    let temp = 0;
    if (arr[0] == null) {
        console.log('Nothing here.');
        return;
    } else {
        temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
    }
    return arr;
};

// console.log(swap([1, 2, 3]));
// TODO: why not working
const reverse = arr => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
};

// console.log(reverse([-3, 5, 1, 7, 3, 2, 10]));

// arr.splice(index, # to remove, item)
const insert = arr => {
    const x = 2,
        y = 1;

    arr.splice(y, 0, x);
    return arr;
};

// console.log(insert([1, 3, 4]));

// pop() only
const removeNeg = arr => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter++;
        } else {
            arr[i - counter] = arr[i];
        }
    }
    while (counter--) {
        arr.pop();
    }
    return arr;
};

console.log(removeNeg([0, -1, 2, -3, 4, -5, 6]));
// TODO: understand it
// items will either stay put or move forward
// neg overwritten, posi move forward
// loop through, while we are on an item we move it to wherever it needs to go. only one iteration
// posi ignored, neg counted w/counter
// next posi number needs to overwrite by moving counter amount of spaces
// then pop() counter amount of times
