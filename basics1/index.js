// console.log("HELLO WORLD");
// var number = 1;
// var number1 = 1;
// /** This is a multiline comment  */
// console.log(number1+number);
// // undefined is a variable which has no value with it
// var und = undefined;
// console.log(und)

// this is same as declaring a variable
// and letting it be

var bun;
console.log(bun);

/**
 * At a very ligh level there are two types of data types :
 * 1.Primitive data type : undefined , null, number , string , boolean , symbol
 * 2. Reference data types : arrays , objects
 *
 */

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// operators in js

// Asignment operators += -= *= /=
// comparator operatiors == < > <= >=
// logical operators && || !
// bitwise operators
//      operator+-*/ and operands variables in the operation

// function
// DRY FUNCTION = Do not repeat yourself
function avg(a, b) {
  return (a + b) / 2;
}
// blue is string and black is used for string in the console
// conditionsls in js
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(element){
//     console.log(element);
// })

// while loop
let j = 0;
// constant
// const as =1;
// a value cannot be changed
// const ass = undefined;
// console.log(as,ass)
// ass = 10
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}
// array methods
// pop push unshift shift
// string methods
// indexOf returns the firsr index
// lastIndexOf will give the last index of the search word
// slice(initial position, final position -1)
// replace 
// replaceAll
// dates 