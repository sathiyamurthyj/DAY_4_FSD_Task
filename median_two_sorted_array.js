// Return median of two sorted arrays of the same size.
// Anonymous

var arr1 = [1, 3, 6];
var arr2 = [2, 8, 12];

function mergeArray(arr_1, arr_2) {
    var i =0,j =0 ,k = 0;
    var n = arr_1.length;
    var mergedArray = new Array(2*n);
    while(i<n && j<n){
        if(arr_1[i] < arr_2[j]){
            mergedArray[k] = arr_1[i];
            i++;
            k++;
        } else {
            mergedArray[k] = arr_2[j];
            j++;
            k++;
        }
    }
    while(i<n){
        mergedArray[k] = arr_1[i];
        i++;
        k++;
    }
    while(j<n){        
        mergedArray[k] = arr_2[j];
        j++;
        k++;
    }
    return mergedArray;
}

var medianSortedArray = function(arr1, arr2) {
    console.log("Median of 2 sorted array of same size using Anonymous");
    console.log("Array1: "+ arr1 +", Array2: "+ arr2);
    var arr = mergeArray(arr1, arr2);
    console.log("Merged array : ", arr);
    var mid_left_index = (arr.length/2)-1;
    console.log("Median is " + (arr[mid_left_index]+arr[mid_left_index+1])/2);
}

medianSortedArray(arr1, arr2);

// iife

(function(arr1, arr2) {
    console.log("Median of 2 sorted array of same size using iife");
    console.log("Array1: "+ arr1 +", Array2: "+ arr2);
    var arr = mergeArray(arr1, arr2);
    console.log("Merged array : ", arr);
    var mid_left_index = (arr.length/2)-1;
    console.log("Median is " + (arr[mid_left_index]+arr[mid_left_index+1])/2);
})([1,3,4,6,9],[2,5,7,8,10]);
