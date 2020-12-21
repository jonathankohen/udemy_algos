function wordArray(str) {
    let array = [];
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ' && str[i + 1] !== ' ') {
            array.push(newStr);
            newStr = '';
        } else {
            newStr += str[i];
        }
    }
    array.push(newStr);
    return array;
}

function wordReverse(str) {
    let word = wordArray(str);
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i] + ' ';
    }
    return reversed;
}

console.log(wordReverse('super cool word splitting thing'));

// rotate string
const rotateStr = (str, steps = 1, direction = 'right') => {
    // convert to array
    let arr = [...str],
        letter;

    // loop
    for (let i = 0, len = steps; i < len; i++) {
        // go right
        if (direction === 'right') {
            // remove letter from end
            letter = arr.pop();

            // place it in front of arr
            arr.unshift(letter);

            //go left
        } else {
            // remove letter from front
            letter = arr.shift();

            // add letter to back of array
            arr.push(letter);
        }
    }

    // join
    str = arr.join('');

    // return
    return str;
};

// check if string is rotation
const isRotation = (org, str) => {
    // init
    const orgLen = org.length,
        strLen = str.length;

    // forst check if length is same or not
    if (orgLen !== strLen) {
        // return false
        return false;
    }

    // init
    const tiledString = org + str;

    // check for sub string inside string
    if (tiledString.indexOf(org) > -1) {
        // return true
        return true;
    } else {
        // return false
        return false;
    }
};

console.log(rotateStr('Boris Godunov', 5));
console.log(isRotation('Boris Godunov', 'dunovBoris Go'));
