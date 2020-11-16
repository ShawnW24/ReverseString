// function reverseString(str) {
// var array = str.split("");
// array.reverse();
// var result = array.join("")
// return result;
// }

// console.log(reverseString("Hello World"));

function reverseString(str) {
    return str.split("").reverse().join("");

}
console.log(reverseString("Hello World"));