// Return all the prime numbers in an array
// Anonymous

var arr1 = [3,6,2,18,27,43];
var isPrime = function(ele) {
    if (ele <=1) return false;
    if(ele === 2 || ele === 3) return true;
    for (var i=2;i<ele;i++){
        if (ele%i===0) {
            return false;
        }
    }
    return true;
    }

var primeNums = function(arr) {
    console.log("prime number in array using Anonymous");
    arr.forEach(element => {
        if(isPrime(element)) {
            console.log(element);
        }});
};
primeNums(arr1);



// iife
(function(arr_iife) {
    console.log("prime number in array using iife");
    arr_iife.forEach(element => {
        if(isPrime(element)) {
            console.log(element);
        }});
})(arr1);

// Arrow function

var primeNumsArrow = (arr_arrow) => {
    console.log("prime number in array using Arrow function");
    arr_arrow.forEach(element => {
        if(isPrime(element)) {
            console.log(element);
        }});
};
primeNumsArrow(arr1);