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
const 
