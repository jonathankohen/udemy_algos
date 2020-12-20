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
        while (j >= 0; && arr[j > key]) {
            arr[j + 1] = arr[j]
            j -= 1
        }
        arr[j + 1] = key
    }
    return arr
}


console.log(insertionSort([2, 1, 9, 76, 4]));
