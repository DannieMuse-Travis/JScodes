//  function allow us  to  put all  our code into a block 
// so when we want the code again and it helps to reduce our line of code 
// return store the value but to see it you ve to console the result// new Start...
// # FUNCTION

// newMan()
// function newMan () {}
// const newMan() => {}

function newGame() {
    let guess = 5;
    let val=x=guess

    console.log(val, guess);

  
    if (val === guess) {
      console.log("You won");
    } else {
      console.log("You loss");
    }
  }
  
  console.log(newGame())
//   function maxVal() {
//     let arr = [3, 6, 1, 8];
  
//     let result = Math.max(...arr);
//     // console.log(result)
//     return result;
//   }
  
//   function newMath() {
//     return 5 - 3;
//   }
  
//   console.log(newMath(""))
//  
  
//   function newMath3(kk, bb) {
//     return kk > bb;
//   }newMath3
  
  // [].sort((a, b) => {
  //   return a - b
  // })
  
  // console.log();
  // console.log(newMath3(1, 4));
  
  // console.log(newMath());
  // console.log(maxVal());
  
  // console.log("7" * 4)
  
//   let maxValue = (arr) => {
//     return Math.max(...arr);
//   };
//   let newArr = [1, 8, 4, 0];
  // console.log(maxValue(newArr));
  
//   let myMax = (somethingElse) => {
//     let arranged = somethingElse.sort((a, b) => {
//       return a - b;
//     });
//     return arranged[somethingElse.length - 1];
//   };
  
//   console.log(myMax([2, 0, 9, 4, 22, 99]));
  
//   let ourArr = [7, 9, 10, 5, 2];
  
//   // console.log(myMax(ourArr));
  
//   let myCount = (a, b) => {
//     return a - Math.pow(b, 2);
//   };
  
//   // console.log(myCount(12, 4));
//   // slice(1)
  
//   let square = () => {
//     return 9 * 9;
//   };
//   myCount
  // ₦7
// ₦70
// ₦700
// ₦7,000
// ₦70,000
// ₦700,000
// ₦7,000,000
// console.log(money(90000));

// let gg=7000000;
//   let newVal = (gg).toString();
//   let convertArr = newVal.split("");
//   let spliceArr = convertArr.splice(4,0, ",");
//   let spliceArr2 =convertArr.splice(1,0,",")
//   let symbol = convertArr.unshift("₦");
//   let joined = convertArr.join("");
//   console.log(joined);
  
// if (gg===700) {
//    console.log(newVal = (gg).toString())
//     console.log(convertArr = newVal.split(""))
//     console.log(symbol = convertArr.unshift("₦"))
// }


// let aa = prompt = ("enter a value: ")
// console.log(`your entered value is ${aa}`)


  
// const myMoney = (value) => {
//   let data = value.toString();

//   if (data.length <= 3) {
//     let res = data.split("");
//     res.unshift("₦");
//     res.push(".00");
//     return res.join("");
//   } else if (data.length === 4) {
//     let res = data.split("");
//     res.splice(1, 0, ",");
//     res.unshift("₦");
//     res.push(".00");
//     return res.join("");
//   } else {
//     return "This is wrong";
//   }
// };

// console.log(myMoney(58));

// const value = (a, b) => {
//   console.log(arguments);
// };

// // console.log(value(1, 6));

// value(2, 5, 6, 8, 90, 2);

// let myValue = (x, y) => {
//   console.log("This is it: ", arguments.length);

//   return x * y;
// };

// console.log(myValue(5, 9, 8, 0, 9, 6));
/
// let aa = prompt("Enter a value: ");
// console.log(`Your entered value is ${aa}`);

// let comp = 12;
// let guess = parseInt(prompt("Guess my Mind: "));
// // let guess = parseInt(myGuess);
// if (comp === guess) {
//   console.log("Guess: ", guess, "comp: ", comp);
//   console.log("You Won!");
// } else {
//   console.log("Guess: ", guess, "comp: ", comp);
//   console.log("You Lost");
// }

// let guess = parseInt(prompt("Guess my Mind: "));

// let xx = prompt("Guess my First Number: ");
// let yy = prompt("Guess my Second Number: ");

// let x1 = parseInt(xx);
// let y1 = parseInt(yy);

// console.log(x1 + y1);

// let guess = prompt("Guess my Mind: ");

// if (isNaN(guess)) {
//   console.log("This can't be");
// } else {
//   let newGuess = parseInt(guess);
//   console.log(newGuess);
// }

// let x1 = prompt("Enter X1: ");
// let x2 = prompt("Enter X2: ");

// if (isNaN(x1) && isNaN(x2)) {
//   console.log("Please put in a valid Number");
// } else {
//   let xx1 = parseInt(x1);
//   let xx2 = parseInt(x2);

//   console.log(xx1 + xx2);
// }

// let randomNumb = Math.floor(Math.random() * 5);
// console.log(randomNumb);
// let userEntry = prompt("Take a Guess: ");

// if (isNaN(userEntry)) {
//   console.log("e no fit work...!");
// } else {
//   let entry = parseInt(userEntry);
//   if (randomNumb !== entry) {
//     console.log("You lost!");
//   } else {
//     console.log("You win!");
//   }
// }
// let randomNumb = Math.floor(Math.random() * 5);
// while (true) {
//   console.log(randomNumb);
//   let userEntry = prompt("Take a Guess or Press 'r' to Exit: ");

//   if (isNaN(userEntry)) {
//     if (userEntry === "r") {
//       console.log("i know say u go come back...!");
//       break;
//     } else {
//       console.log("e no fit work...!");
//     }
//   } else {
//     let entry = parseInt(userEntry);
//     if (randomNumb !== entry) {
//       console.log("You lost!");
//     } else {
//       console.log("You win!");
//       break;
//     }
//   }
// }

// let count = 0;

// while (count <= 10) {
//   count++;
//   if (count === 4) {
//     console.log("This is it: ", count);
//     break;
//   } else {
//     console.log(count);
//   }
// }


// let record = [{}, {}, {}, {}]

// let student = {name: "", date: "", time: ""}

// record.push(student)

// myRecord("travis")