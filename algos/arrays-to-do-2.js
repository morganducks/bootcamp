// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

// let arr = [1,2,3,4,5,6];

//  for(let i = 0; i<Math.floor((arr.length)/2); i++){
//     //  find middle point and itterate to that place in the array
//      var storage = arr[i];
//      //store index of i
//      arr[i] = arr[ (arr.length-1) - i];
//      //put last number in [i] position, which is 0 on first pass
//      arr[(arr.length-1) - i] = storage;
//      console.log(storage)
//  }

//  console.log(arr);




//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.

//Second: allow negative shiftBy (shift L, not R).
//Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
//Fourth: minimize the touches of each element.

// let arr = [0, 1, 2, 3, 4, 5]; 
// function rotate(arr, shiftBy) {
//     let t = Math.abs(shiftBy);
//     while(t > 0) {
//         if(shiftBy > 0) {
//             let temp = arr[arr.length-1]

//             for(let i = arr.length - 1; i > 0; i--){
//                 arr[i] = arr[i-1];
//             }
//                 arr[0] = temp;
//         } 
//         else {
//             let temp = arr[0];
//             for(let i = 0; i < arr.length - 1; i++) {
//                 arr[i] = arr[i + 1];
//             }
//             arr[arr.length-1] = temp;
//         }
//         t--;
//     }
//     return arr;
// }

// console.log(rotate(arr,-1));

// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.


// let arr = [1, 2, 3, 4];
// let max = arr[0];
// let min = arr[0];
// tempArr = [];
// function newarr() {

//     // while max is greater than other array numbers && min is less than other array numbers, create and return new array with reminaing values?

//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             // console.log(arr[i])
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
// }
// console.log(min) 
// console.log(max)
// }
// for(let i = 0; i < arr.length; ++i){
//         if(arr[i] < max && arr[i] > min){
//             tempArr = [...tempArr, arr[i]]
//         }
//     }
//     arr=tempArr;
//     console.log(arr)
// }

// newarr();


// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].


arr1 = ['a','b']
arr2 = [1,2]
arr3 = []
function concat() {
    
    for(let i = 0; i<arr1.length; i++){
        arr3 = [...arr3,arr1[i]];

    }
    for(let i = 0; i<arr2.length; i++){
        arr3 = [...arr3,arr2[i]];
    }
    return arr3
}


concat(arr1,arr2);
console.log(arr3)