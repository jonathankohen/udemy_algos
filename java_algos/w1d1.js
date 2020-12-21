// T or F left and right equal
// const balancePoint = arr => {
//     let sum = 0;
//     let leftSum = 0;
//     let rightSum = sum - leftSum;
//     let newArr = [];

//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i];

//     }
//     return newArr;
// };

// const arr = [1, 2, 4, 4, -1, 4];
// balancePoint(arr);

function balancePoint(arr) {
    var left_sum = 0;
    var right_sum = 0;

    for (var i = 0; i < arr.length; i++) {
        right_sum += arr[i];
    }

    for (var i = 0; i < arr.length; i++) {
        if (left_sum === right_sum) {
            console.log(true);
            return true;
        }
        right_sum -= arr[i];
        left_sum += arr[i];
    }
    console.log(false);
    return false;
}

const arr = [1, 2, 4, 4, -1, 4];
balancePoint(arr);
