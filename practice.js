// let a= [1,2,45,"this is it,we are here,"
// ,{name:"peter"},[2,8]];

// console.log(a.splice(1,3))

// array is an object that let us store multiple values in a single,
// variable.
// length of a javascript array and the types of its elements,
// and not fixed,array only use integars as element indexes
// unshift add value to the begining of the array
// let a= [1,2,45,"this is it,we are here,"
// ,{name:"peter"},[2,8]];
// console.log(a.unshift("travis"))
// Variables in JavaScript are containers for storing data.
// In JavaScript, array is a single variable that is used to
// store different elements. It is often used when we want to
//  store list of elements and access them by a single variable.
//  Arrays use numbers as index to access its “elements”.

/*
1.push
This method adds a new element at the very end of an array.
2.pop
This method removes the last element of an array.
3.concat
This method joins various arrays into a single array.
4.shift
This method removes the first element of an array
5.unshift
This method adds new elements at the beginning of the array
6.reserse
This method reverses the order of the elements in an array.
7.slice
This method pulls a copy of a part of an array into a new array.
8.splice
This method adds elements in a particular way and position.
9.toString
This method converts the array elements into strings.
10.valueof
This method returns the primitive value of the given object.
11.indexof
This method returns the first index at which a given element is found in an array
12.lastindexof
This method returns the final index at which a given element appears in an array.
13.join
This method combines elements of an array into one single string and then returning it
14.sort
This method sorts the array elements based on some condition.
**/
// let a= [1,2,45,"this is it,we are here,"
// ,{name:"peter"},[2,8]];
// console.log(a.lastIndexOf())
// console.log(a.unshift("travis"))
//  console.log(a.pop())
// console.log(a.indexof(2,8));
// console.log(a.push(23,"austin"))

// let a =["amidat","francis",[22,45]]
// let b = ["money","help"]
// console.log(a.push(b))
// console.log(a)
// let c =['you', 'me', 'them']
// console.log(a.pop(c))
// console.log(a.concat(c))
// console.log(a.shift(c))
// console.log(a.unshift(c))
// console.log(a)
// console.log(c.reverse())
// console.log(a)
// console.log(a.splice())
// console.log(a)

// console.log(a.splice())
// console.log(a.values("francis"))
// console.log(a)

/* math Operation
multiply
divide
exponents
modulo/remainder % 5%2 =1
add +
subtract -
*/

/*
math method
the math.floor()method rounds a number down to the nearest 
integar and return the result
the math.ceil() method round a number up to the nearest
integer, and return the result.
math.random() returns a random number between 0(inclusive)
and 1(exclusive)
*/

// let randomNumber = Math.random()
// console.log('random:',randomNumber);

// let ten = randomNumber * 10
// console.log('times ten:',ten);

// let flooredNumber =Math.floor(ten)
// console.log('floored:',flooredNumber);

// let rounding = 90.47
// console.log(
// Math.round(rounding)
// );
// let a =["amidat","francis",[22,45]]
// let b = ['angel',"money","help",'go','money']
// let c = [98,87,65,34,78,20,100]
// // console.log(b.slice(0,2));
// // console.log(b.splice(0,1,'apple'));
// console.log(b.sort());
// console.log(c.sort((a,b)=>{
//   return  a-b
// }));
// console.log(c.sort((a,b)=>{
//     return  b-a
//   }));

// now if flat turn the array into one dimentional form
// let t=[23,"travis",{name:"peter"},13,[34,18]]
// let e=t.flat(3)
// console.log(e)
// let splice=[1,2,3,4,5,6]
// let arr= splice.splice(1,0,22,56,'Travis') 
// console.log(arr)
// console.log(splice)

// let arr1=[23,45,7.8,'segun','travis','austin']
// // console.log(arr1.push(4,5))
// // console.log(arr1)

// let arr2=['segun', 23, 45,78]
// console.log(arr2.pop())
// console.log(arr2)


// console.log(arr2.shift())
// console.log(arr2)

// console.log(arr2.unshift(3,4))
// console.log(arr2)

 

// function man(a,b) {
//     // > 0= ..... a firt
//     //<0 = ..... b first
//     // = 0 nothing change
//     return a -b; 
// }

//  
//     name:'laptop',
//     cost: '5,000'
// },
// {
//     name:'phone',
//     cost: '19,000'
// },
// {
//     name:'desktop',
//     cost: '15,000'
// }

// ];
//  products.sort((a , b)=>{
//     return a.cost - b.cost;
// });

// // console.log(products)

// let numbers=[1,6,7,8,9];
// numbers.forEach(compareitem);

// function compareitem(man)  {
//     // console.log(man)
// }

// let ar=[4,5,16,128,14]
// let ac=ar.push("2")
// console.log(ar)

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

class Rect{
    constructor(){
        this.width=width
        this.breath=breath
      console.log(Reck)
    }

    
}


// length
// slice
// substrings

// replace:  replace,and,replaceAll

// toUppercase
// toLowercase

// include
// startswitch
// endswitch
// search

// chartat
// at

// spilt
// trim: trimend,trimstart
// /** */

// 

// strings method
let sm="i must be good in coding  "
let b="i am the best"
// console.log(sm.length);
// console.log(sm.slice(5,11,"travis"))
// console.log(sm);
// console.log(sm.substring(0,14))
// console.log(sm.charCodeAt(23))
// console.log(sm.toLowerCase());
// console.log(sm.toUpperCase());
// console.log(sm.includes("y"));
// console.log(sm.startsWith("c")); 
/** is used to check if the element converted form object to strings are same */
// console.log(sm.endsWith());
// console.log(sm.search("m"));
// console.log(sm.charAt(7));
// console.log(sm.valueOf());
// console.log(sm,b.concat());
// console.log(sm.split("c"));
// console.log(sm.trimStart());
// console.log(sm.trimEnd()
// 
  let t=Math.floor(Math.random()*20)
  let arr=[]
  let rating=[]
  if (t==20) {
    console.log("you know")
  }else{
    for (let i = 1; i < t; i++) {
        let y={name:"travis",rate:Math.floor(Math.random()*5)}
        arr.push(y)
        rating.push(y.rate)
    }
  }
  console.log(rating)

  let total=rating.reduce((a,b)=>{
    return a+b;
  })
  console.log(total)