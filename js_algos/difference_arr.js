// remove all values from list a which are present in list b

function arrayDiff(a, b) {
    let result = a.filter(num => indexOf(num));
    return result;
}

var filtered = [1, 2, 3, 4].filter(
    function (e) {
        return this.indexOf(e) < 0;
    },
    [2, 4],
);
console.log(filtered);

// console.log(a.filter(arrayDiff));

// console.log(
//     arrayDiff(
//         [-6, -13, -4, 9, -18, -2, -19, 5],
//         [-4, -18, 5, -6, -19, -2, -13],
//     ),
// );
// [9]

// console.log(arrayDiff([], [4, 5]));
// []

console.log(arrayDiff([3, 4], [3]));
// [4]

// console.log(arrayDiff([1, 8, 2], []));
// [1,8,2]
