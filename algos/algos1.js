// myNumber = 42;
// myName = "Paul";
// console.log(myNumber);
// console.log(myName);

// myNumber = "Paul";
// myName = 42;
// console.log(myNumber);
// console.log(myName);

//

// for(var i = -56; i <= 1006; i++) {
//     console.log(i)
// }

//

// function beCheerful() {
// console.log("Be Happy")
// }

// for(var i=0; i<=98;i++) {
// beCheerful();
// }

//

// var i=2000;
// while(i<5281) {
//     console.log(i);
//     i++;
// }

//

// var birthday = 20;
// var birthMonth = "April";

// if(birthday == 19 && birthMonth == "April") {
//     console.log("How did you know?")
// } else {
//     console.log("Just another day")
// }

//


// function leapYear(i){
    // //if i 
// return (i % 100 === 0) ? (i % 400 === 0) : (i % 4 === 0);
// }

// console.log(leapYear(2000))
// console.log(leapYear(1865))

//

// var counting = 0;

// for(var i = 512; i <= 4096; i = i + 5) {
//     console.log(i);
//     console.log(counting = counting + 1)
// }

//
// var i = 0;

// while(i <= 60000) {
//     console.log(i);
//     i = i + 6;
// }

//

// for (var i = 1; i <= 100; i++) {
//     if (i % 10 == 0) {
//         console.log("Coding Dojo");
//     } else if (i % 5 == 0) {
//         console.log("Coding");
//     } else {
//         console.log(i)
//     }
// }

//

// var sum = 0;
// for (var i = -300000; i <= 1300000; i++) {
//   if (i % 2 == 1)
// //   console.log(i)
//     sum += i;
// }
// console.log(sum);

//

// var sum = 2016;
// while(sum >= 8) {
//     sum = sum - 4;
//     console.log(sum)
// }

//



// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

//create function that brings in variables
//loop through highNum until we hit the low myNumber (i variable as standin)
// if i is evenly divided by mult then print i



//print multiples of mult


// highNum is evenly divisible by lowNum

// var lowNum = 2;
// var highNum = 9;
// var mult = 3; 

// function countdownOne(highNum,lowNum,mult) {
//     for(var i = highNum; i >= lowNum; i--) {
//         if(i % mult === 0) {
//             console.log(i)
//         }
//     }  
// }

// countdownOne(56,22,4)

// Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

// 


function countdownTwo(param1,param2,param3,param4) {
    while(param2 <= param3) {
        if(param2 % param1 === 0 && param2 !== param4){
            console.log(param2);
        } 
        param2 = param2 + 1;
        }
    }

countdownTwo(3,5,17,9)

