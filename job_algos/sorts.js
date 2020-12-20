// - BUBBLE SORT

const bubbleSort = arr => {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};
// console.log(bubbleSort([4, 3, 6, 2, 1, 10]));

// - SELECTION SORT

const selectionSort = arr => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
};

// console.log(selectionSort([4, 3, 6, 2, 1, 10]));

// INSERTION SORT

const insertionSort = arr => {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
};
// console.log(insertionSort([4, 3, 6, 2, 1, 10]));

// MERGE SORT

// console.log(mergeSort([4, 3, 6, 2, 1, 10]));
