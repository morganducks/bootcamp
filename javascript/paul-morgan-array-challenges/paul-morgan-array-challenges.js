// function alwaysHungry(arr) {
//     //keep track of number of instances of food
//     let foodPresent = 0;
// //find instances of food by running through arrays
//     for(var i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         //set conditionals
//         if (arr[i] === "food") {
//             console.log("yummy");
//             //add to foodPresent
//             foodPresent++;
//         } 
//     }
//         if (foodPresent === 0) {
//             console.log("I'm hungry")

//     }
// }

// // will run through both arrays
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"


// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     // cutoff = 5, return anyh numbers higher than 5
//     //cycle through array
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] > cutoff) {
//             filteredArr.push(arr[i])
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]



// function betterThanAverage(arr) {
//     var sum = 0;

//     // calculate the average
//     for(var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//         console.log(sum);
//     }
//     // console.log(sum);
// // find average
//     var numberAvg = sum / arr.length;
//     console.log(numberAvg)

//     var count = 0
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] > numberAvg) {
//         count++; // adds 1 every time it encounters a numbers higher than average
//     }
// }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

function reverse(arr) {
    firstValue = 0;
    lastValue = arr.length - 1; // = 4
    while (firstValue < lastValue) { // false statement ends loop : once first = 3 second = 3
        var storeFirstValue = arr[firstValue];
        arr[firstValue] = arr[lastValue];
        arr[lastValue] = storeFirstValue;
        console.log(firstValue + "test");
        console.log(lastValue + "test");
        firstValue++;
        lastValue--;
        console.log(firstValue);
        console.log(lastValue);
        console.log(arr);
    }


    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



// start with just one example; and then add one example more; start with simple case.


// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     //n value assign in variable below, will run until < n is reached
//     while (fibArr.length < n) {
//         //grab the last number in array
//         var lastNum = fibArr[fibArr.length - 1]
//         var secondToLastNum = fibArr[fibArr.length - 2]
//         fibArr.push(lastNum + secondToLastNum);
//     }
//     return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]