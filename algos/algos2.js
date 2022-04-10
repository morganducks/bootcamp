// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?


// var arr = [];

// function countdownThree(num) {
//     for(var i = num; i >= 0; i--){
//         arr.push(i);
//         console.log(arr.length)
//     }
//     console.log(arr)
// }

// countdownThree(10);


//Your function will receive an array with two numbers. Print the first value, and return the second.

// var arr = [112,500]

// function array() {
//     console.log(arr[0])
//     var secondNum = arr[1]
//     return secondNum //??
//     }

// array();

//////

// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

// var arr =   [8,3,5,7,9,13]

// function arraySum() {
//     console.log(arr[0] + arr.length)
// }

// arraySum();

// var arr =   ["dog",3,5,7,9,13]

// function arraySum() {
//     console.log(arr[0] + arr.length)
// }

// arraySum();


// var arr =   [true,3,5,7,9,13]

// function arraySum() {
//     console.log(arr[0] + arr.length)
// }

// arraySum();

///


// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.


// var arr = [1,3,5,7,9,13];
// var getNums = arr.filter(number => number > arr[1]);
// console.log(getNums)
// console.log(getNums.length)

/////

//Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

// var arr = [1,3,5,7,9,13];
// var getNums = arr.filter(number => number > arr[1]);
// var arrTwo = [];

// function newArr() {
//     console.log(getNums)
//     arrTwo = getNums
//     console.log(arrTwo)
//     console.log(arrTwo.length)
// }

// newArr()


///////////////

//Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.


// function jinx(num1,num2) {
//     var arr = [];
//     for(var i = 0; i < num1; i++) {
//         arr[i] = num2;
//     }
//     if(num1 === num2) {
//         console.log("jinx")
// }
// return arr
// }

// console.log(jinx(12,12))

///////

//Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

// var arr = [6,3,5,7,9,13]
// var i = arr[0]

// function justRight() {
//     if(i > arr.length) {
//         console.log("Too Big!")
//     } else if(i < arr.length) {
//         console.log("Too small")
// } else if(i === arr.length) {
//     console.log("just right")
// }
// }


// justRight();

// //////////////////

// Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.


// function convert(cel) {
//  var cel = (9/5 * cel) + 32;
//  console.log(cel +  " degrees")
// }

// convert(0);

function convert(faren) {
    var faren = (5/9 * faren -32);
    console.log(faren + " celcius")
}

convert(20);