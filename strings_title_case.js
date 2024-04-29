// Convert all the strings to title caps in a string array
// anonymous 
var str1 = "STRINGS IN JAVA Script";

var titleCaps = function(str) {
    console.log("String Title Caps using Anonymous");
    var str_arr = str.toLowerCase().split(" ");
    for (var i=0; i< str_arr.length;i++){
        str_arr[i] = str_arr[i].charAt(0).toUpperCase()+str_arr[i].slice(1);
    }
    return str_arr.join(" ");
}

console.log(titleCaps(str1));



// iife

(function(str) {
    var str_iife = str.toLowerCase().split(" ");
    console.log("String Title Caps using iife");
    for (var i=0; i< str_iife.length;i++){
        str_iife[i] = str_iife[i].charAt(0).toUpperCase()+str_iife[i].slice(1);
    }
    console.log(str_iife.join(" "));
})(str1);


// arrow function
var titleCapsArrow = (str) => {
    console.log("String Title Caps using Arrow");
    var str_arrow = str.toLowerCase().split(" ");
    for (var i=0; i< str_arrow.length;i++){
        str_arrow[i] = str_arrow[i].charAt(0).toUpperCase()+str_arrow[i].slice(1);
    }
    return str_arrow.join(" ");
}

console.log(titleCapsArrow(str1));

