// check if str1 is anagram of str2. return true if so, if not, return false
const anagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let counter = {};

    for (let i of str1) {
        counter[i] ? (counter[i] += 1) : (counter[i] = 1);
    }

    for (let i of str2) {
        if (!counter[i]) {
            return false;
        } else {
            counter[i]--;
        }
    }
    return true;
};

console.log(anagram('', '') + '. answer should be true');
console.log(anagram('aaz', 'zza') + '. answer should be false');
console.log(anagram('anagram', 'nagaram') + '. answer should be true');
console.log(anagram('rat', 'car') + '. answer should be false');
console.log(anagram('awesome', 'awesom') + '. answer should be false');
console.log(
    anagram('amanaplanacanalpanama', 'acanalmanplanpanama') +
        '. answer should be false',
);
console.log(anagram('qwerty', 'qeywrt') + '. answer should be true');
console.log(
    anagram('texttwisttime', 'timetwisttext') + '. answer should be true',
);

// check if same length
// create obj to count
// loop str1 to populate obj
// loop str2, compare, manipulate obj
