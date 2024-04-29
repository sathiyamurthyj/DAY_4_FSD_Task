// Return all the palindromes in an array
// Anonymous

function isPalindrome(ele) {
    var str = String(ele);
    var i = 0;
    var j = str.length - 1;
    while(i < j){
        if(str[i] === str[j]){
            i++;
            j--;
        } else {
            return false
        }
    }
    return true;
};

var arr1 = ["bobo", 12321, "madam", 1224];
var printPalindrome = function(arr) {
    console.log("Palindromes in array using Anonymous");
    arr.forEach((el) => {
        if(isPalindrome(el)){
            console.log(el);
        }
    });
}

printPalindrome(arr1);



// iife
(function(arr_iife) {
    console.log("Palindromes in array using iife");
    arr_iife.forEach((el) => {
        if(isPalindrome(el)){
            console.log(el);
        }
    });
})(arr1);


// Arrow
var printPalindromeArrow = (arr_arrow) => {
    console.log("Palindromes in array using Arrow function");
    arr_arrow.forEach((el) => {
        if(isPalindrome(el)){
            console.log(el);
        }
    });
}

printPalindromeArrow(arr1);