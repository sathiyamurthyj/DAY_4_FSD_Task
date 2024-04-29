// Print odd numbers in an array 
// anonymous 
var arr1 = [3,6,2,18,27,43];
var oddNums = function(arr) {
    console.log("Odd num using Anonymous");
    arr.forEach(element => {
        if(element%2 != 0){
            console.log(element);
        }
    });
};
oddNums(arr1);

// iife

(function(arr_iife){
    console.log("Odd num using iife");
    arr_iife.forEach(element => {
        if(element%2 != 0){
            console.log(element);
        }
    });
})(arr1);

// arrow function

var oddNumsArrow = (arr) => {
    console.log("Odd num using Arrow");
    arr.forEach(element => {
        if(element%2 != 0){
            console.log(element);
        }
    });
};
oddNumsArrow(arr1);