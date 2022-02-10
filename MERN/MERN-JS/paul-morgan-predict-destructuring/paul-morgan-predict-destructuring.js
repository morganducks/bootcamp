
// 1
// const cars = ['Tesla', 'Mercedes', 'Honda'] // creates array stored in "cars"
// const [ randomCar ] = cars // makes a variable containing the first valuie of the array
// const [ ,otherRandomCar ] = cars  //"," skips the first item in the index, and loads second item into variable randomCar
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// Tesla
// Mercedes


// // 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name); // causes error that stop the program from running because (name) isn't defined?
// console.log(otherName);


// // undefined 
// // why is name crossed out in VS Code?


// // 3 
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345'; //stand alone veriable
// const { password: hashedPassword } = person;  //undefined because hashedPassword is not a value in the key valuie objects
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// // 12345
// // undefined


// //4 
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; // calls second item in array
// console.log(first)

// const [,,,second] = numbers; // calls fourth item in araay
// console.log(second)

// const [,,,,,,,,third] = numbers; // calls last number in array
// console.log(third)

// //Predict the output
// console.log(first == second); //2 !== 5
// console.log(first == third); //2 === 2

// // false
// // true

// 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // stores "value" in key
const { secondKey } = lastTest; // [1, 5, 1, 8, 3]
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // = value
console.log(secondKey); //[1, 5, 1. 8. 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5

// I got it!

