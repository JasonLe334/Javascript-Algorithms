//Basic sort: Bubble Sort, Selection Sort, Insertion Sort

function selectionSort(arr){
    let min;
    for(let i = 0; i < arr.length; i++){
        min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(i !== min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

//5, 3, 2, 4, 6, 1
function insertionSort(arr){
    let temp;
    for(let i = 1; i < arr.length; i++){
        temp = arr[i];
        for(var j = i -1; arr[j] > temp &&  j > -1; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

function mergedFn(arr1, arr2){
    let combined = [];
    let i, j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            combined.push(arr1[i]);
            i++;
        }else{
            combined.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
         combined.push(arr1[i]);
         i++;
    }

    while(j < arr2.length){
        combined.push(arr2[j]);
        j++;
    }

    return combined;
}

function mergeSort(arr){
    if(arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return mergedFn(mergeSort(left), mergeSort(right));
}

function swap(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
function pivot(array, pivotIndex = 0, endIndex = array.length - 1){
    let swapIndex = pivotIndex;
    for(let i = pivotIndex + 1; i <= endIndex; i++){
        if(array[i] < array[pivotIndex]){
            swapIndex++;
            swap(array, swapIndex, i);

        }
    }
    swap(array, pivotIndex, swapIndex);
    return pivotIndex;
}

function quickSort(array, left = 0, right = array.length - 1){
    //O(n log n)
    if(left < right){
        let pivotIndex = pivot(array, left, right);
        quickSort(array,left, pivotIndex - 1);
        quickSort(array,pivotIndex + 1,right);
    }
    return array;
}
let arr = [5, 3, 14, 50, 43, 2, 13, 6, 1, 8, 9 , 10 , 4];
quickSort(arr);
console.log(arr);
//insertionSort(arr);