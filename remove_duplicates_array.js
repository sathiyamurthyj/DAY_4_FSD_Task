// Remove duplicates from an array
// Anonymous

var arr1 = [1, 3, "apple", 1, "mango", "apple", 5];
var removeDuplicate = function(arr) {
    console.log("Duplicate array entry removal using Anonymous");
    var noDup = [];
    for (var i=0; i< arr.length;i++){
        if(noDup.indexOf(arr[i]) === -1){
            noDup.push(arr[i]);
        }
    }
    return noDup;
};

console.log(removeDuplicate(arr1));

// iife
(function(arr_iife) {
    console.log("Duplicate array entry removal using iife");
    var noDupIife = [];
    for (var i=0; i< arr_iife.length;i++){
        if(noDupIife.indexOf(arr_iife[i]) === -1){
            noDupIife.push(arr_iife[i]);
        }
    }
    console.log(noDupIife);
})(arr1);