//Array Method
// it stores the values inside the index position(a box) before a comma 

// some methods will not change the original variable while some will do vice-versa
// splice removes values from the array from the starting point of your choice to the end point of your choice and changes the original array. it also replaces a value with another value ( Third party)
// push adds a value to the last part of the array and return the length of the new array
// pop removes the last part of the array and also returns the part (value).
// shift returns the beginning(the first value).
// (pop)unshift returns the last value in the array. it adds new value to the array at the beginning. it returns the length
// join converts array values to string. it also removes the seperator. and it takes in("")
// reverse flips the values in the array.
// fill replaces itself. it takes in a starting point and an ending point. it changes the original value with the passed in value.i.e you put in the value to be passed first then you can add the SP and EP
// length (property), Methods (slice, splice, toString, push, pop, fill, concat, join, shift, unshift, indexOf, flat, sort)
// flat converts whatever the dimension of the array into a one dimension array
/*
// sort arranges value in an array in the right order.It compares the first value and neglects the second value         

// Higher order are arrays that has a function and parameter or a callback. 
it takes a call back as parameter. (map, forEach,find, findIndex includes,every, filter, )

.map method it helps to iterate(hovering/scanning) through the array and prints out the values in the array. it returns an array  
//  forEach is the loop(continuos) for array it is also used to print out the itrated values back.
// filter helps us to extract or remove a part from the array permanently(to delete post) its taking a content from an array out.
//  reduce caculates the total numbers in an array and returns the result and it can take two arugment.
// some checks through the array to see if the value matches and returns boolean
// find work without comparison and returns boolean
// some,find,every,inclusive as the same meaning and they all return boolean 

// Comparision are operators
there are two kinds of operators in Javascript




*/

let a = [1, 3, 45,"This is it , we are here" ,[22, 84] ,{ name: "peter" } ,[2, 8, [12, 18]]];
let bb= ["This is it , we are here"]
let c= (1, 2, 3, 4, 5)

//console.log(a[0].name); to change to length


// index starts from 0 while length starts from 1
let cc = [];

console.log(a.splice(4,1));
console.log("");
// console.log(a);
// console.log(a.toString())
// console.log(c,concat(a,bb))
// console.log(c.pop())
// console.log(c.push())
//console.log(c.fill("love",0,2));
// console.log(c.join(""));
// console.log(c.shift());
// console.log(c.unshift("Hello"));
// console.log(c.reverse());
// console.log(a[3].charAt(3));
 
let name = "Peter"
// retep
let convert = name.toLowerCase()
let arr = convert.split("");
let reverse = arr.reverse();
// let join = reverse.join("");
// console.log(join);

// console.log("");
// console.log(a.flat(2));
// console.log(bb.reverse())

let aa=[1,3,5,2,6,74,21];
// console.log(aa.flat(3));
console.log(aa)
let ab = aa.flat(3);
// console.log(
//     ab.sort((a,b) => {
//         return a-b;
//     }));

//console.log(aa);

// function dc() {}- acient format
// = == ===
// () => {} - this a callback.i.e how we can write a function (this does not have a  name)

console.log(ab.map((el) => {
    return el;
}))
 ab.reduce((a,b) => {
    return a+b;

 })

 let cart = []
 let itemA = {name: "Bag",cost:500};
 let itemB = {name: "Shoe", cost: 7500};
 let itemC = {name:  "Neck chain", cost: 700 };
 let itemD = {name: "cap", cost:500 };
//  console.log("old cart", cart);
 cart.push(itemA);
 cart.push(itemB);
 cart.push(itemC);
 cart.push(itemD); 
/*




 */

 let d =cart.map((el) => {
    return el.cost;
 });

 let ff= d.reduce((a,b) => {
   return a+b;
 });
//  console.log(`Your total purchase is ${ff}`);
// #  9200 9,200

let newVal = (ff * 0.2).toString();
let convertArr = newVal.split("");
let spliceArr = convertArr.splice(1,0,",");
let symbol = convertArr.unshift("₦");
let joined = convertArr.join("");

// console.log(`Your Total purchase is ${joined}`);

/*
Arithmetic Operators
+
-
/
%
--
++
=+
=-

Comparison Operators: there result is always a Boolean result
<
>
<=
>=
!-not
?
=
== - equals to
=== - strictly equals to
!== - strictly not equals to
&& - it compares two or more logics
||

Falsy Value
0
undefined
null
""

Truthy Value
[]
!=0
!== ""
*/

//  let  myArr = [1, 6, 3, 9, 0];
 let  myArr1 = [1];
 let r = 3;
 let k = 8;
 let m = 2;


 console.log(
   cart.filter((el) => {
      return el.name !=="Shoe" ;
   }),
);

//   console.log(
//     myArr1.every((el) => {
//        return el === "1";
//     }),
//  );

// if (true) {
//    console.log("statement");
// } else {
//    console.log("statement");
// }
// {
//    true ? console.log("statement") : console.log("statement")
// }

// let count = 0;
// increasing by 1
// count = count +1;

// increasing by 1
// count =+1;

// increasing by 1
// count++;

// increasing by any number
// count = +3;

// console.log(count);
// global variable are variables that outside the scope of a function

// let count = 0;

// myArr.forEach((el) => {
//    console.log(el);
//    count++;
//    console.log(`I just ran ${count}
//    times`);
// });

// console.log(`This is my total RUN:`,count);

let myArr = [-1,1,6,3,9,0,20,15,30,200];

let samp = myArr.sort((a,b) => {
   return a-b;
})
let val = samp.length - 1;
// console.log(samp);
// console.log(val);
// console.log("Our final result is:",samp[val]);

let xx= [...myArr];

// console.log(Math.max(2,5,1,9));
// console.log(Math.min(...myArr));

// console.log(
// myArr.reduce((a,b) => {
//    return Math.max(a,b);
// },-Infinity);

// console.log(
// myArr.reduce((a,b) => {
//    return Math.min(a,b);
// }));

console.log(
   myArr.reduce((a,b) => {
      return a < b ? a:b;
   })
);

// for the smallest value you use the negative infinity. for the biggest value you use the positive infinity







 
 