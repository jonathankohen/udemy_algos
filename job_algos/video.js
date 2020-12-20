// is palindrome

const pal = str => {
    return str.split('').reverse().join('');
};

// console.log(pal('level'));

// return amt of char in str

const strCheck = (str, key) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == key) {
            counter++;
        }
    }
    return counter;
};

// console.log(strCheck('strings', 's'));

// - given arr 1-100. one num in arr is dup

// nested loop. second loop checks for dup for each in first loop

// i | newArr
// 0 |
// 1 |

const findDups = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
};

// console.log(findDups([1, 2, 2, 3]));

// CHAR COUNT

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
console.log(charCount('hello'));
