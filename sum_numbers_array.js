// Sum of all numbers in an array
// anonymous 
var arr1 = [3,6,2,18,27,43];
var sumNums = function(arr) {
    console.log("Sum of array members using Anonymous");
    var total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
};
console.log(sumNums(arr1));

// iife

(function(arr_iife){
    console.log("Sum of array members using iife");
    var total_iife = 0;
    arr_iife.forEach(element => {
        total_iife += element;
    });
    console.log(total_iife);
})(arr1);

// arrow function

var sumNumsArrow = (arr) => {
    console.log("Sum of array members using Arrow");
    var total_arrow = 0;
    arr.forEach(element => {
        total_arrow += element;
        });
    return total_arrow;
};
console.log(sumNumsArrow(arr1));