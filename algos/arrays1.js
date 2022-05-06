// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

// var arr = [2];  
// arr = [1,...arr]
// console.log(arr)


//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// var main = [1,2,3,4,5,6,7]
// var num1 = main[0]
// function removeFirst(list) {
//     var  [, ...arr] = list;
//     return arr;
// }
// const arr = removeFirst(main);
// console.log(num1); 
// console.log(arr); 

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

var main = [1,2,3,4,5,6,7]
var index = 2;
var num1 = 50;
for(i = main.length; i > index; i--) {
    console.log(main.length)
    main[i] = main[i - 1];
    //shifts index to right
    console.log(main); 
}
// once index is reached, inserts num1
main[index] = num1;
console.log(main); 



