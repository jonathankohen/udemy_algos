// BUBBLE SORT
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                // swap
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// INSERTION SORT
function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let value = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = value;
    }
    return arr;
}

console.log(insertionSort([2, 9, 1, 4, 3, 6, 5, 8, 7]));

// Time complexities
// Quadratic Time - Big O(n^2) => nested loop
// Linear Time - Big O(n) => nearly sorted data

// Space complexitiy
// Big O(1)

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        console.log(arr);
        arr[j + 1] = current;
    }
    return arr;
}
console.log(insertionSort([8, 5, 6, 2, 7, 4]));

// ERIC
function insertionSort(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            min = arr[i];
            for (var j = i; j >= 0; j--) {
                if (min < arr[j]) {
                    var temp = arr[j];
                    arr[j] = min;
                    arr[j + 1] = temp;
                    console.log(arr[j]);
                }
            }
        }
    }
    return arr;
}

let new_arr = [5, 3, 4, 2, 1];

console.log(insertionSort(new_arr));

// MERGE SORT
// Merge Sort
// Big O  => O(n*Log n)
// Set result varible for the combined array
// set to iterator starting at 0
// start looping until the length of both iterators
// Set a condition if one is less than the other push it into results
// else push the other
// start looping both iterator to add the remaining values
//return result arr

function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// set base case
// set a variable to mid point
// set a left variable to recursively split the array for the left side
// do the same for the right side
// return a call of merge to combine left and right after reaching base case

function supaSlice(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = supaSlice(arr.slice(0, mid));
    let right = supaSlice(arr.slice(mid));
    return merge(left, right);
}

console.log(supaSlice([5, 3, 4, 2, 2, 5, 1, 3]));

// shawn
// Combine Arrays
// Create function combineArrs(arr1, arr2) that sorts two already separately sorted arrays,
// placing the result back into the first provided array. Can you work completely in -place ?

function combineArrs(arr1, arr2) {
    let combined = [];
    let i = 0;
    let j = 0;

    // two already separately sorted arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            combined.push(arr1[i]);
            i++;
        } else {
            combined.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        combined.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        combined.push(arr2[j]);
        j++;
    }
    return combined;
}

// console.log(combineArrs([6, 10], [5, 7, 8, 9]));

// Merge Sort
// Use the combineArrs() function above to construct mergeSortArr() for an unsorted array.
// What are the run - time and space complexities of your mergeSortArr solution ?

// break an array into halves until we have empty arr OR single element in an array
// once we the small arrays merge and sort
// return the merge and sorted array

function mergeSortArr(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let right = mergeSortArr(arr.slice(mid));
    let left = mergeSortArr(arr.slice(0, mid));
    return combineArrs(left, right);
}

console.log(mergeSortArr([5, 4, 7, 3, 9, 8, 2, 1, 6]));

// PARTITION
testArr = [5, 4, 5, 2, 9, 3];

function partition(arr, p) {
    for (var j = 0, i = -1, piviot = arr[p]; j < arr.length; j++) {
        if (arr[j] <= piviot) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    [arr[p], arr[i]] = [arr[i], arr[p]];
    console.log(arr);
    return i;
}

var index = partition(testArr, 0);
console.log(index);

testArr = [5, 4, 5, 2, 9, 3];

function partition(arr, p) {
    for (var j = 0, i = -1, piviot = arr[p]; j < arr.length; j++) {
        if (arr[j] <= piviot) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    [arr[p], arr[i]] = [arr[i], arr[p]];
    console.log(arr);
    return i;
}

var index = partition(testArr, 0);
console.log(index);


// QUICK SORT
    let pivotVal = arr[start];
    index = start;
    for (let i = start + 1; i < arr.length; i++)
        if (pivotVal > arr[i]) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            index++;
        }
    return start;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivot = partition(arr, left, right);
        //left
        quicksort(arr, left, pivot - 1);
        //right

        quicksort(arr, pivot + 1, right);
    }
    return arr;
}

console.log(quicksort([2, 1, 5, 7, 4, 8, 9, 6, 10, 13, 15]));

const partitionArray = (arr) => {
    let i=-1
    const pivot = arr[arr.length -1];
    for(let j=0; j<=arr.length; j++){
        if(arr[j]<=pivot){
            i++
            [arr[j], arr[i]] = [arr[i], arr[j]]
        }
    }
    return i;
}

const quickSort = (arr) => {
    let arrCopy = [...arr]
    if(arrCopy.length > 1){
        let pi = partitionArray(arrCopy);
        arrCopy = [...quickSort(arrCopy.slice(0, pi)), arrCopy[pi], ...quickSort(arrCopy.slice(pi+1, arrCopy.length))]
    }
    return arrCopy;
}

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr.length -1;
    for(var j =0, i = j-1; j < pivot; j++){
        if(arr[j] <= arr[pivot]){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }   
    }
    [arr[pivot],arr[i+1]] = [arr[i+1],arr[pivot]]
    pivot = i+1;
    let left = arr.slice(0,pivot);
    let right = arr.slice(pivot);
    return quickSort(left).concat(quickSort(right));
}  

