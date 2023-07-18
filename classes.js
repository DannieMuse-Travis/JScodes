let slice="This is a tutor on javascript"
console.log(slice.slice(0,4))


/*length
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

let a = [
1,
3,
45,
"This is it, we are here",
[22, 18, [243, 88]],
{ name: "Peter" },
[2, 8],
];

let c = [1, 2, 3, 4, 5, "This is me"];

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
let bb = "This is it, we are here";
let cc = [];

// console.log(a.slice(0, 3));
// console.log(c.splice(3, 1, 7));
// console.log(c.concat(a, bb));

// console.log(c);
// // console.log(c.push(6));
// console.log("");
// console.log(c.pop());
// console.log(c.fill("Love", 0, 2));
// console.log(c.join(" "));
// console.log(c.shift());
// console.log(c.unshift("Hello"));
// console.log(c.reverse());
// console.log(a[3].charAt(3));
//  let name = ("Peter");
// retep

// let convert = name.toLowerCase();
// let arr = convert.split("");
// let reverse = arr.reverse();
// let join = reverse.join("");

// console.log("");
// console.log(a.flat(2));
// console.log(a);

let aa = [1, 3, 15, [2, 5, 8, [4, 0]]];

// console.log(aa.flat(2));
let ab = aa.flat(2);

// console.log(
//   ab.sort((a, b) => {
//     return a - b;
//   }),
// );

let dc = ["this is me", "i am", 3, 6, { name: "Peter" }];

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

let newVal = (ff * 0.2).toString();
let convertArr = newVal.split("");
let spliceArr = convertArr.splice(1, 0, ",");
let symbol = convertArr.unshift("₦");
let joined = convertArr.join("");
// console.log(joined);

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
let myArr1 = [1];
let r = 3;
let k = 8;
let m = 2;

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

let myArr = [-1, 1, 200, 6, 3, 9, 0, 30, 20, 15, 4];

let samp = myArr.sort((a, b) => {
return a - b;
});
let val = samp.length - 1;
// console.log(samp);
// console.log(val);
// console.log("Our final result is: ", samp[val]);

let xx = [...myArr];

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
// myArr.reduce((a, b) => {
// return a > b ? a : b;
// }),
// );

// // ? :

// let array="w3resource"
// let at=array.
// console.log()
// conditio

/*
if(condition){
    execute if TRUE
}else{
    execute if False
}
*/

// let x=0;

// if (true) {
//     console.log("I am TRUE");
// } else {
//     console.log("I am FALSE");
// }

// let y =11;
// let z =y%5;

// console.log(z);

// if (y ===1){
//     console.log("You are Good");
// }else {
//     console.log(" Wetin you write no make sense");
// }

// let arr= [1,2,8]

// let zz =arr.some(el =>{
//     return el ===8    
//      ? console.log("You are Good")
//     : console.log(" Wetin you write no make sense");
// })

// console.log(zz)
// y ===1
//     ? console.log("You are Good")
//     : console.log(" Wetin you write no make sense");

let x = 0;
let y = 1;
let z = 2;

if (x || y ) {
    console.log("I am True")
}else {
    console.log("I am False")
}
// study hand and all gate table