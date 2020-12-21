// Remove array duplicates. Do not alter the original array
// return the new array with the results 'stable', in the original order
// Given: [1, 2, 1, 3, 4, 2] return [1, 2, 3, 4]
// const arr = [1, 2, 1, 3, 4, 2];
// function removeDuplicates1(arr) {
//     var newArr = [arr[0]];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[0]) {
//             newArr.push(arr[i]);
//         }

//         for (let j = 0; j < newArr.length; j++) {
//             console.log(i);
//         }
//     }
//     return newArr;
// }

// console.log(removeDuplicates1(arr));

const arr = [1, 2, 1, 3, 4, 2];
function removeDuplicates1(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        var isUnique = false;
        for (var j = 0; j < newArr.length; j++) {
            if (arr[i] === arr[j]) {
                isUnique = true;
                break;
            }
        }
        if (isUnique) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicates1(arr));

// Part 2: work 'in place' (alter the original array)
// alter the order if necessary
// Ex. [1, 2, 1, 3, 4, 2] could become [1, 2, 4, 3]
// function removeDuplicates2(arr) {
// TODO: implement remove duplicates here
// return arr;
// }

// Part 3: make the remove duplicates both
// 'in place' and 'stable'
// function removeDuplicates3(arr) {
// TODO: implement remove duplicates here
// return arr;
// }
