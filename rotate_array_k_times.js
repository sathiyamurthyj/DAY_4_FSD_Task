// Rotate an array by k times
//  Anonymous

var arr1 = [1,2,3,4,5];
var k = 2;

var rotateArrayK = function(arr, r) {
    console.log("Array rotation using Anonymous");
    if(arr.length == r || r == 0){
        return arr;
    }

    r = r%arr.length;
    for(var i=0; i<r; i++){
        arr.unshift(arr.pop());
    }
    return arr;
}

console.log("Rotated Array is: ", rotateArrayK(arr1, k));

// iife
(function(arr2, k) {
    console.log("Array rotation using iife");
    if(arr2.length == k || k == 0){
        return arr2;
    }

    k = k%arr2.length;
    for(var i=0; i<k; i++){
        arr2.unshift(arr2.pop());
    }
    console.log("Rotated Array is: ", arr2);
})(["Apple","Banana",3,4,"Lemon", 6], 3);