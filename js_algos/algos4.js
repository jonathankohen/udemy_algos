encode = (str) => {
    var newStr = '';
    var counter = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            counter++;
        } else {
            newStr += str[i];
            newStr += counter;
            counter = 1;
        }
    }
    console.log(newStr);

    return newStr;
};

let thing = 'aaaabbcddd';
encode(thing);

// function encode(str) {
//     var output = '';
//     let count = 0;
//     let char = str[0];
//     for (let i = 0; i <= str.length; i++) {
//         if (char === str[i]) {
//             count++;
//         } else if (char != str[i] || i === str.length) {
//             output += char + count;
//             count = 1;
//             char = str[i];
//         }
//     }
//     console.log(output);
//     return output;
// }

// let thing = 'aaaabbcddd';
// encode(thing);

// function decode(str) {
//     var char = '';
//     var count = '';
//     var output = '';
//     for (let i = 0; i < str.length; i++) {
//         // This gets multidigit numbers from the string
//         while (!isNaN(str[i])) {
//             count += str[i];
//             i++;
//         }

//         while (count > 0) {
//             output += char;
//             count--;
//         }
//         count = '';
//         char = str[i];
//     }
//     return output;
// }

// function stringEncode(str) {
//     var result = str.charAt(0);
//     var count = 1;
//     if (str.length == 1) {
//         result += count;
//         return result;
//     } else {
//         for (var i = 1; i < str.length; i++) {
//             if (str.charAt(i) != str.charAt(i - 1)) {
//                 result += count + str.charAt(i);
//                 count = 1;
//             } else {
//                 count++;
//             }
//             if (i == str.length - 1) {
//                 result += count;
//             }
//         }
//         return result;
//     }
// }

// console.log(stringEncode('aaaabbcddd'));

// Given an encoded string (see above), decode and return it. Given "a3b2c1d3", return "aaabbcddd".

// function stringDecode(str) {
//     let encoded = str.split('');
//     let decodedArr = [];

//     for (let i = 0; i < encoded.length; i++) {
//         if (isNaN(encoded[i])) {
//             continue;
//         } else {
//             let repeater = encoded[i];
//             for (let j = 0; j < repeater; j++) {
//                 decodedArr.push(encoded[i - 1]);
//             }
//         }
//     }
//     var decoded = decodedArr.join('');
//     console.log(decoded);
// }

// stringDecode('a3b2c1d3');
