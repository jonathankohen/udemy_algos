// ~ .sort
// comparator function to config sort
// ex/
const numCompare = (a, b) => {
    // ascending order:
    return a - b;
    // desc order
    // return b - a;
};

// console.log([6, 4, 15, 10].sort(numCompare));

// ~ bubble sort
// compare pairs. if first is larger then second, swap.
// do this until it's sorted
// really good for almost sorted arrays
const bubbleSort = arr => {
    let len = arr.length,
        swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};
// create swapped boolean
// do/while loop that goes on repeatedly until no swaps are made
// at the beginning of each loop, swapped = false
// check in loop if curVal and nextVal are equal. if so, swap
// make swapped true
// this restarts the loop

// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

// ~ selection sort
// similar to bubbleSort. accumulating at beg instead
// find min, put it in the front
// performs poorly for almost sorted arrays
// simple to understand, which is p much only positive
const selectionSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
};

// console.log(selectionSort([5, 3, 8, 2]));

// nested loops
// outer loop arr.length - 1, because the next loop will be jumping ahead 1, so outer loop is stopping at second to last
// initialize minIndex to i (first element) within outer loop
// inner loop i + 1. check all items of arr to see if arr[j] < arr[minIndex]
// if so, minIndex = j
// once back to outer loop, swap arr[i] and arr[minIndex]
// assign [] of curVal and min to [] min, curVal
// return arr

// ~insertion sort
// gradually builds up left of arr with sorted portion
// like sorting playing cards in your hand
// really good for almost sorted arrays

// You’d scan the set from left to right, grabbing each card as you go and moving it to the position where the card to it’s left would be smaller or equal to the current card’s value.
// After you move the card furthest to the right, you’ll be left with a set of cards that has been sorted in ascending order.
// Insertion sort will use the current item as a “key”, and then search through the items to the left of that item in the input list for the place that the key should go. This means that the sub-list to the left of the current “key” will already be sorted, and

// starting with the item at the key (index 1), compare to sub-array on the left, right now just one number
// initiate key var
// inner loop starts at element to the left of i
// if key > index 0, swap
// after first iteration, key moves on to index 2
// process repeats until key reaches last item
// return arr

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i],
            j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = key;
    }
    return arr;
};

// create key var at index 1, j var one to the left of key
// while loop to the left while left element is > key
// swap two if greater
// set new key
// return

// console.log(insertionSort([2, 1, 9, 76, 4]));

// ~ merge sort
// splitting up, sorting, and merging
// takes advantage of single element arrays
// faster, but less intuitive
// past three sorts don't scale well

// split until single el arrs
// merge in pairs and sort them by comparison
// keep merging until one arr again
const merge = (arr1, arr2) => {
    let newArr = [],
        i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
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
};

const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

// console.log(mergeSort([5, 2, 8, 4, 1, 4, 7, 9, 13, 90]));

// part I
// the goal is to create various loops to merge two arrs, and push them to a new one
// we're going to loop through both arrs at once while both of them can loop at the same time
// within that loop we check if the first element in arr2 is greater than the first in arr1
// if greater, push arr1[i] to newArr, i++. else, the opposite.
// keeps going until one of the two, or both arrs become empty
// two more while loops to iterate through anything left in either arr, and push it to newArr
// return newArr

// part II the reckoning
// recursive merge sort
// takes in newArr?
// write base case
// def mid, left, and right
// L & R are recursive calls
// return merge(left, right)

// ~ quick sort
// recursive, fast
// split arr until we hit arrs with 0 or 1 items
// select a single element (key)
// move lower values left, greater right, not sorted yet. only key is in the right spot
// repeat process on left side and right side

// part I: pivot helper function
// given arr, designates key, moves less to the left, greater to the right in place. no new arr
// order doesn't matter

const pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };

    // set pivot to start val, set swap index to start index
    let pivot = arr[start],
        swapIndex = start;

    // start loop after pivot. check for elements with less value. for each, increase swap index, then call swap()
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    // Swap the pivot from the start to the swapIndex, putting it to the right of all lesser values
    swap(arr, start, swapIndex);
    return swapIndex;
};

// create quicksort with arr, left, and right params. defaults 0 and arr.length - 1 respectively. - 1 due to pivot
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    // base case: left and right will become equal when done, so that's when to stop & return
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // recursive call for everything left of pivot until left = right
        quickSort(arr, left, pivotIndex - 1);
        // recursive call for right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};

// console.log(quickSort([5, 4, 3, 6, 7, 1, 2]));
// console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// ~ radix sorts
// take adv of diff properties of the data, not comparisons
// only works on arrs of numbers
// sorts by looping through values of digits from the right side of numbers to the left, sorts them into boxes 0 - 9
// single digit numbers, numbers with 0, or numbers that don't have any digits left go to 0 box
// repeat until sorted
// const radixSort = arr => {

// };

// console.log(radixSort([100, 250, 30, 55, 1, ]));
