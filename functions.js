console.log();
// new Start
// # FUNCTION

// newMan()
// function newMan () {}
// const newMan () {}
// let dices = [1, 2, 3, 4, 5, 6];
// let newVal = Math.floor(Math.random() * dices.length);
// console.log(dices[newVal]);
// function newGame() {
//     let guess = 3
//     console.log(newVal, guess);

//     if (newVal === guess) {
//         console.log("You won");
//     } else {
//         console.log("You lose");
//     }
// }
// newGame();

// function maxVal() {
//     let arr = [3, 6, 1, 8];
//     console.log(arr)
//     let result = Math.max(...arr)
//     console.log(result)
//     return result;
  
// }
// maxVal();

// function newMath() {
//     return 5 - 3
// }
// console.log(newMath());

let a = 13;

// function newMath2(tunde = "I am ", numb = 10) {
//     // return tunde + " That I am";
//     // return tunde;
//     return tunde.repeat(numb);
// }
// console.log(newMath2());

// function newMAth3(kk, bb) {
//     return kk > bb;
// }
// console.log(newMAth3(8, 4))

// [].sort((a, b) => {
//     return a - b
// })
// console.log();

// console.log(newMath());
// console.log(maxVal());

// let maxValue = (arr) => {
//     return Math.max(...arr);
// };
// let newArr = [1, 8, 4, 0];
// console.log(maxValue(newArr));

// let myMax = (somethingElse) => {
//     let arranged = somethingElse.sort((a, b) => {
//         return a - b;
//     });
//     return arranged[somethingElse.length - 1];
// }
// console.log(myMax([2, 0, 9, 4, 22, 99]));

// let ourArr = [7, 9, 10, 5, 2];
// console.log(myMax(ourArr));

// let myCount = (a, b) => {
//     return a - Math.pow(b, 2);
// };
// console.log(myCount(40, 2));

/**
 * ₦7
 * ₦70
 * ₦700
 * ₦7,000
 * ₦70,000
 * ₦700,000
 * ₦7,000,000
 * console.log(90000)
 * 
 */
// let value = 7000000000000;
// let newValue = ()=>{
//     value = "₦" + value.toLocaleString(0|2|3)
//     return value
// }
// console.log(newValue());

// let num = 700000;
// let newNum = () => {
//     num = "₦" + num.toLocaleString()
//     return num
// }
// console.log(newNum());

// let Num = (x, y) => {
//     return "₦" + x * y
// }
// console.log(Num(70, 100))

// let num = 70000000;
// let tolocal = num.toLocaleString(0|2|3);
// // let convertNum = num.toString();
//     let convertArr = tolocal.split("");
//     // let spliceNum = convertArr.splice(3, 0, ",");
//     let unshift = convertArr.unshift("₦");
//     let combine = convertArr.join("");
//     console.log(combine);

// function Naira() {
//     let num = 7000000000;
//     let tolocal = num.toLocaleString(0|2|3);
// //  let convertNum = num.toString();
//     let convertArr = tolocal.split("");
//     // let spliceNum = convertArr.splice(3, 0, ",");
//     let unshift = convertArr.unshift("₦");
//     let combine = convertArr.join("");
//     console.log(combine);
// }
// Naira();


// const myMoney = (value) => {
//     let data = value.toString();
//     if (data.length <= 3) {
//         let res = data.split("");
//         res.unshift("₦");
//         res.push(".00");
//         // res.join("")
//         return  res.join("");
//     } else if(data.length === 4) {
//         let res = data.split("");
//         let newres = res.splice(1, 0, ",");
//         let newresult = res.unshift("₦");
//         let newSubmit = res.push(".00");
//         let combining = res.join("");

//         return combining
//     } else {
//         console.log("This is wrong")
//     }
// };
// console.log(myMoney(1000));

// const myValue = (a, b) => {
//     console.log("This is it: ", arguments.length);
//     return a * b ;

// };
// console.log(myValue(5, 9, 5, 6, 5, 7));

// const prompt = require("prompt-sync")()

// let aa = prompt("Enter a value: ");
// console.log(`your entered value is ${aa}`)
// myValue();

const prompt = require("prompt-sync")()
// let comp = 12;
// // let guess = parseInt(prompt("Guess my Mind: "))
// let myGuess = prompt("Guess my Mind: ")
// let guess = parseInt(myGuess)

// if (comp === guess) {
//     console.log(
//         "Guess: ", guess, "comp: ", 
//     comp);
//     console.log("you WON!")
// } else {
//     console.log(
//         "Guess: ", guess, "comp: ", 
//     comp);
//     console.log("you LOST!");
// }

// let guess = parseInt(myGuess);
// let xx = prompt("Guess my First Number: ")
// let yy = prompt("Guess my Second Number: ")

// let x1 = parseInt(xx);
// let y1 = parseInt(yy);


// console.log(x1 + y1);
// console.log(xx + yy);
// console.log(isNaN("guessTunde"));

// let guess = parseInt(prompt("Guess my Mind: "));

// if (isNaN(guess)) {
//     console.log("This can't be")
// } else {
//     let newGuess = parseInt(guess)
//     console.log(newGuess)
// }


// // console.log(isNaN(guess))

// let x1 = prompt("Enter x1: ")
// let x2 = prompt("Enter x2: ")

// console.log(x1 + x2);
// if (isNaN(x1) && isNaN(x2)) {
//     console.log("Please put a valid Number")
// } else {
//     let xx1 = parseInt(x1)
//     let xx2 = parseInt(x2)

//     console.log(xx1 + xx2)
// }

// let randomNumber = Math.floor(Math.random() * 5);
// console.log (randomNumber)
// let userEntry = prompt("Take a Guess: ")

// if (isNaN(userEntry)){
//     console.log("e no fit work...!");
// }
// else {
//     let entry = parseInt(userEntry)
//     if(randomNumber === entry) {
//         console.log("you win!");
//     } else {
//         console.log("you lost!")
//     }
// };
// let randomNumber = Math.floor(Math.random() * 5);

// while (true) {
// //     let randomNumber = Math.floor(Math.random() * 5);
// console.log (randomNumber)
// let userEntry = prompt("Take a Guess or press 'r' to Exit: ");

// if (isNaN(userEntry)){
//     if (userEntry === "r") {
//         "I noh say you go come back"
//     break;
//     } else {
//     console.log("e no fit work...!");
// }
// }
// else {
//     let entry = parseInt(userEntry)
//     if(randomNumber === entry) {
//         console.log("you win!");   
//         break;
//     } else {
//         console.log("you lost!")
     

//     }
   
// };
// }

// let count = 0;
// while (count <= 10) {
//     // console.log(count);
//     count++;
//     if(count === 4) {
//         // console.log("This is it: ", count);
//         break;
//         // continue;
//     } else {
//         console.log(count);
//     }
// }

/**Build a console system that measures your water drinking system. how many volumes of water you want to drink.
 * if you take 50cl; awesome - You have to go.
 * if you take 25cl; you are trying - remaining 4 
 * Build an attendance that records the student name, time of arrival and date
 */