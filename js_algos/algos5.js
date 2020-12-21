testArr = [1, 2, 2, 2, 7];
testArr1 = [2, 2, 6, 6, 7];

function intersectArr(a, b) {
    var newArr = [];
    while (a.length > 0 && b.length > 0) {
        if (a[0] < b[0]) {
            a.shift();
        } else if (a[0] > b[0]) {
            b.shift();
        } /* they're equal */ else {
            newArr.push(a.shift());
            b.shift();
        }
    }

    return newArr;
}

x = intersectArr(testArr, testArr1);
console.log(x);

// Intersect Sorted Array
// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two.
// Example: given and, return [2, 2, 7].

function intersectSortedArray(arr1, arr2) {
    var i = 0,
        j = 0,
        newArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else {
            i++;
        }
    }
    return newArr;
}

console.log(intersectSortedArray([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]));

// union

function union(arr1, arr2) {
    var i = 0,
        j = 0,
        newArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else {
            i++;
        }
    }

    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}

// Union Sorted Arrays
// Efficiently combine two already - sorted arrays into a new sorted result containing the multiset union.
// Example: given[1, 2, 2, 2, 7] and[2, 2, 6, 6, 7], return [1, 2, 2, 2, 6, 6, 7].

function unionArray(arr, arr2) {
    let result = [],
        i = 0,
        j = 0;
    while (i < arr.length || j < arr2.length) {
        if (arr[i] == arr2[j]) {
            result.push(arr[i]);
            i++;
            j++;
        } else if (arr[i] < arr2[j]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (arr[i]) {
        result.push(arr[i]);
        i++;
    }
    while (arr2[j]) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

console.log(unionArray([1, 2, 2, 2, 7, 7, 7], [2, 2, 6, 6, 7, 8]));
