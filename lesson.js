/*
    length
    indexOf: startIndexOf and lastIndexOf

    slice
    substring
    substr

    replace: replace and replaceAll

    toUpperCase
    toLowerCase
    
    charCodeAt

    includes
    startsWith
    endsWith
    search

    charAt
    at


    split

    trim: trimEnd and trimStart
*/

// let a = "   This is the Best day of my Life"

// let b = a.length
// let c = a.slice(12,16)
// let d = a.substring(12,-1)
// let e = a.replaceAll("Best", "Happiest")
// let f = a.toUpperCase()
// let g = a.toLowerCase()
// let h = a.indexOf("i")

// let mm = a.toLowerCase()
// let i = mm.includes("this")

// let j = a.charCodeAt("t")

// let l = a.indexOf("T")
// let m = a.indexOf("t")
// let k = a.charCodeAt(l)

// let kk = a.search("This")
// let kk1 = a.startsWith("This")
// let hh = a.charAt(a.indexOf("B"))

// let split = a.split("the")

// console.log("This is the Result: ", split)

// console.log("This is the Result: ".slice())

// let aa = "This is home"
// let bb = "Where i'm ought to be"

// console.log(aa.concat (bb))
// console.log(aa + bb)

// console.log(`${aa} ${bb}`)
// console.log(`This is the result of: ${3 + 5}`)

// console.log(bb)

// Number
//toString()

// console.log(num)
// console.log(num.toString())
// console.log(num.toFixed(2))
//Math
// let num = 33.51
// console.log(3*3)
// console.log(Math.sqrt(25))
// console.log(isNaN("Peter" * 5))

// object {key: value}

// let obj = {
//     name: "Peter",
//     height: 23
// }

// console.log(obj.name)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// Start

// let a = [
//     1,
//     3,
//     45,
//     "This is it, we are here",
//     [22, 18, [243, 88]],
//     { name: "Peter" },
//     [2, 8],
//   ];
  
//   let c = [1, 2, 3, 4, 5, "This is me"];
  
  /*
      length          map
      slice           forEach
      splice          filter
      toString        reduce
      concat
      push            some
      pop             every
      fill            find
      join            findIndex  
      shift           includes
      unshift         
      indexOf
      lastIndexOf
      reverse
   
      = == ===
  
   "5" !== 5
  
      flat
      sort
  */
  // let bb = "This is it, we are here";
  // let cc = [];
  
  // console.log(a.slice(0, 3));
  // console.log(c.splice(3, 1, 7));
  // console.log(c.concat(a, bb));
  
  // console.log(c);
  // console.log(c.push(6));
  // console.log("");
  // console.log(c.pop());
  // console.log(c.fill("Love", 0, 2));
  // console.log(c.join(" "));
  // console.log(c.shift());
  // console.log(c.unshift("Hello"));
  // console.log(c.reverse());
  // console.log(a[3].charAt(3));
  // let name = "Peter";
  // // retep
  
  // let convert = name.toLowerCase();
  // let arr = convert.split("");
  // let reverse = arr.reverse();
  // let join = reverse.join("");
  
  // console.log("");
  // console.log(a.flat(2));
  // console.log(a);
  
  // let aa = [1, 3, 15, [2, 5, 8, [4, 0]]];
  
  // console.log(aa.flat(2));
  // let ab = aa.flat(2);
  
  // console.log(
  //   ab.sort((a, b) => {
  //     return a - b;
  //   }),
  // );
  
  // let dc = ["this is me", "i am", 3, 6, { name: "Peter" }];
  
  // console.log(
  //   dc.map((props) => {
  //     return props;
  //   }),
  // );
  
  // for forIn forOf forEach
  // console.log(
  //   ab.reduce((a, b) => {
  //     return a + b;
  //   }),
  // );
  
  // console.log(ab.some((el === 5) => {
  //   return el
  // }))
  
  // console.log(
  //   ab.forEach((el) => {
  //     return console.log(el);
  //   }),
  // );
  
  let cart = [];
  let itemA = { name: "Bag", cost: 500 };
  let itemB = { name: "Shoe", cost: 7500 };
  let itemC = { name: "Neck Chain", cost: 700 };
  let itemD = { name: "cap", cost: 500 };
  // console.log("old Cart", cart);
  cart.push(itemA);
  cart.push(itemB);
  cart.push(itemC);
  cart.push(itemD);
  
  let d = cart.map((el) => {
    return el.cost;
  });
  
  let ff = d.reduce((a, b) => {
    return a + b;
  });
  
  // #     9200  9,200

  let gg=3200000;
  let newVal = (gg).toString();
  let convertArr = newVal.split("");
  let spliceArr = convertArr.splice(4, 0, ",");
  let spliceArr2 =convertArr.splice(1,0,",")
  let symbol = convertArr.unshift("₦");
  let joined = convertArr.join("");
  console.log(joined);
  
  // console.log(`Your total purchase is ${joined} `);
  
  /*
    Arithematic Operators
    +
    -
    *
    /
    %
    --
    ++
    =+
    =-
  
    Comparism Operators
    <
    >
    <=
    >=
    !
    ?
    =
    ==
    ===
    !==
    &&
    ||
    ...
  
    Falsy value
    0
    undefined
    null
    ""
  
    Truty Value
    []
    != 0
    !== ""
  */
  
  // console.log(
  //   myArr.some((el) => {
  //     return el > 0;
  //   }),
  // );
  
  // let myArr = [1, 6, 3, 9, 0];
  // let myArr1 = [1];
  // let r = 3;
  // let k = 8;
  // let m = 2;
  
  // console.log();
  
  // x >= r
  
  // console.log(
  //   myArr.every((el) => {
  //     return el > 0;
  //   }),
  // );
  
  // console.log(
  //   myArr1.some((el) => {
  //     return el != "1";
  //   }),
  // );
  
  // console.log(
  //   cart.filter((el) => {
  //     return el.name !== "Shoe";
  //   }),
  // );
  
  // if (true) {
  //   console.log("statement");
  // } else {
  //   console.log("statement");
  // }
  
  // true ? console.log("statement") : console.log("statement");
  
  // let count = 0;
  
  // increasing by 1
  // count = count + 1;
  
  // increasing by 1
  // count = +1;
  
  // increasing by 1
  // count++;
  
  // increasing by any number
  // count = +3;
  
  // console.log(count);
  
  let count = 0;
  
  // myArr.forEach((el) => {
  //   console.log(el);
  //   count++;
  //   console.log(`I just ran ${count} times`);
  // });
  
  // console.log("This is my total RUN: ", count);
  
  // let myArr = [-1, 1, 200, 6, 3, 9, 0, 30, 20, 15, 4];
  
  // let samp = myArr.sort((a, b) => {
  //   return a - b;
  // });
  // let val = samp.length - 1;
  // // console.log(samp);
  // console.log(val);
  // console.log("Our final result is: ", samp[val]);
  
  // let xx = [...myArr];
  
  // console.log(Math.max(2, 5, 1, 9));
  // console.log(Math.min(...myArr));
  
  // console.log(
  //   myArr.reduce((a, b) => {
  //     return Math.max(a, b);
  //   }, -Infinity),
  // );
  
  // console.log(
  //   myArr.reduce((a, b) => {
  //     return Math.min(a, b);
  //   }, Infinity),
  // );
  
  // console.log(
  //   myArr.reduce((a, b) => {
  //     return a > b ? a : b;
  //   }),
  // );
  
  // ? :
  
// 50 and above => PASS

// let score = 55;

// if (score >= 50) {
//   console.log("You PASS");
// } else {
//   console.log("You FAIL");
// }

// switch (condition) {
// cases: execute command
// default:
// execute
// }

// switch (score) {
//   case 6:
//     console.log("Roll Faster");
//     break;
//   case 4:
//     console.log("Roll Fast");
//     break;
//   case 3:
//     console.log("Roll Normal");
//     break;
//   case 2:
//     console.log("Roll Slow");
//     break;
//   case 1:
//     console.log("Roll Slower");
//     break;
//   default:
//     console.log("STOP");
// }

// let cutlery = "spoon and knife";
// switch (cutlery) {
//   case "spoon":
//   case "fork":
//   case "knife":
//   case "plate":
//   case "pot":
//     console.log("I am a cutlery");
//     break;
//   case "ball":
//   case "toy":
//   case "tv":
//     console.log("I am not a cutlery");
//     break;
//   default:
//     console.log("You have to put a cutlery");
// }
// let score = 3;

// if (score === 55) {
//   console.log("I passed");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else {
//   console.log("I can't say!");
// }

// 00:00 - 11:59
// 12:00 - 15:59
// 16:00 - 23:59
// let xx = 13;
// console.log(12 > xx > 0);

// let time = 35;

// if (time >= 0 && time <= 12) {
//   console.log("Good Morning");
// } else if (time >= 13 && time <= 16) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good Evening");
// }
/**
 * while
 * doWhile
 * for
 * forIn
 * forOf
 * forEach
 */

// while (condition) {
//   execute
// }

// let count = 0;
// while (count < 10) {
//   count++;
//   console.log("Print out Count: ", count);
// }

// do {
//   count++;
//   console.log("Print out Count: ", count);
// } while (count < 10);

// let myName = "Peter Petx";
// let newLetter = myName[0];

// console.log(newLetter);

// for (let i = 0; i < myName.length; i++) {
//   console.log(myName[i], i);
// }
// let i = 0;
// while (i <= myName.length-1) {
//   console.log(myName[i], i);
//   i++;

// }

// let dices =[1,2,3,4,5,6]
//  let newVal=Math.floor(Math.random()*
//   dices.length)

//   let val=dices[newVal]

//   console.log(val)

  // switch(val){
  //   case 1:{
  //     console.log("poor roll")
  //     break
  //   }
  //   case 2:{
  //     console.log("not bad")
  //     break
  //   }
  //   case 3:{
  //     console.log("hmmm ,you try")
  //     break
  //   }
  //   case 4:{
  //     console.log("wow, you don dey try")
  //     break
  //   }
  //   case 5:{
  //     console.log("awesone.....")
  //     break
  //   }
  //   default :{
  //     console.log("excellent,roll")
  //     break
  //   }
  // }

  // if (val==1){
  //   console.log("poor roll")
      
  // } else if(val==2){
  //   console.log("not bad")
    
  // } else if(val==3){
  //   console.log("hmmm")
  
  // } else if(val==4){
  //   console.log("wow ")
  
  // } else if(val==5){
  //   console.log("awesome")
  
  // }else{
  //   console.log("excellent")
  
  // }

  


  