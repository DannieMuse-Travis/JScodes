// let date = new Date(5).getHours(24)

const { error } = require("console");

// const { join } = require("path")
// const { listenerCount } = require("process")

// let check = 20; //check time {comparism}
// let check_Morning_Afternoon_And_Evening= "pm";
//  //compare when it is Morning Afternoon or Evening {comparism}


// if(
//     check <= 12 &&
//     check_Morning_Afternoon_And_Evening==="am"
// ) {
//     console.log(
//         `Time is ${check}${check_Morning_Afternoon_And_Evening}, Good Morning`
//     ); //Good Morning
// } else if (
//     check <= 15 && 
//     check_Morning_Afternoon_And_Evening==="pm"
// ) {
//     console.log(
//         `Time is ${check}${check_Morning_Afternoon_And_Evening}, Good Afternoon`
//     ); //Good Afternoon
// } else if (
//     check >= 16 && 
//     check_Morning_Afternoon_And_Evening==="pm"
// ) {
//     console.log(
//         `Time is ${check}${check_Morning_Afternoon_And_Evening}, Good Evening`
//     ); //Good Evening
// } else {
//     console.log("input the correct value");
// }


// let y = [1, 300, 8, 6, 9, 0, 30, 45, 15, 4,200,500];
//  let b=y.sort((a,b)=>{
//     return a-b
//  })
//  console.log(b)
//  xx=y
//  console.log(Math.max(...y))
// console.log(
//     y.reduce((a,b)=>{
//         return Math.max(a,b)
//     })
// )
// console.log(Math.min(...y))
// console.log(
//     y.reduce((a,b)=>{
//         return Math.min(a,b)
//     })
// )

// let t=[1,2,3,5,4,10,"travis","austin"]
// // // pop remove the last element of an array and return it
// // let h=t.pop()
// // console.log(h)
// //
// // push is used to add mew element to the end of an array and it return the length of an array
// let h=t.push("codelab")
// console.log(h)
// console.log(t)



//  0-39 => F
//  40-44 => E
//  45-49 => D
//  50-59 => C
//  60-74 => B
//  75-100 => A

// let grade = 1002

// if(grade >=75 && grade <=100){
//    console.log("A") 
// } else if(grade >= 60 && grade <=75){
//     console.log("B")
// } else if(grade >= 50 && grade <=59){
//     console.log("C")
// } else if(grade >= 45 && grade <=49){
//     console.log("D")
// } else if(grade >= 40 && grade <=44){
//     console.log("E")
// } else if(grade >= 0 && grade <=39){
//     console.log("F")
// } else{
//     console.log("go back to grade")
// }

// 00:00 - 11:59
// 12:00 - 15:59
// 16:00 - 23:59



// let time = 19;
// let h=time%24

// if (time >= 00 && time <= 11) {
//     console.log("Good Morning");

// } else if (time >= 12 && time <= 17) {//     console.log("Good afternoon");

// } else if (time >= 18 && time <= 24) {
//     console.log("Good evening");
// };
    

let a = "am a student of codelab,javascript is my favourite"
// let w=a.length
// let w=a.slice(4,12)
// let w=a.toUpperCase()
// let w=a.replace("favourite","best")
// console.log(w)
// let guess = 3;
// console.log(val, guess);

// if (val > guess) {


//   console.log("You won, your val is greater than guess");
// } else {
//   console.log("You loss,your val is less than guess");
// }
// console.log()

// let gg=3200000;
//   let newVal = (gg).toString();
//   let convertArr = newVal.split("");
//   let spliceArr = convertArr.splice(4, 0, ",");
//   let spliceArr2 =convertArr.splice(1,0,",")
//   let symbol = convertArr.unshift("₦");
//   let joined = convertArr.join("");
//   console.log(joined);
// split is use to seperate astring and return them as an array
// slice remove element from an array and can also add new element to the array it 
// returns the removed element
// join is used to join all argument together

  // const prompt = require("prompt-sync")()
//   let time=new Date()
//   let convert=time.toString()
//   let splittime=convert.split(" ")

//   let splicetime=splittime.splice(0,4)
//   let splicetime2=splicetime.splice(0,1)

//   let jointime=splicetime.join("-")
//   let jointime2=splicetime2.join()
//   // console.log(jointime2)

//   let attendance=[]

//   let studentName=prompt("enter your name")

//   let student={
//     name:studentName,
//     date:jointime,
//     time:jointime2,
//   }

//   let pushstudent=attendance.push(student)
//   console.log(attendance)
//   console.log(jointime2)




// const prompt =require('prompt-sync')();
// const prompt = require("prompt-sync")();
// 
// "use strict";
// try {
//   const myName="travis"
//   myName="tobi"
//   console.log(myName);
// } catch (error) {
// console.log(error.message)
// }
try {
  const name="travis"
  name="tobi"
  console.log(name);
} catch (error) {
 console.log(error.stack) 
}


  {
  constructor(message)
  this.message=message  
  this.name="the error"
  this.stack ='${this.name}: ${this.message}';
}






















// function waterlevel() {
//   let water=0
// let waterlevel=parseInt(water)

// while (true) {
//   let waterprompt=prompt("enter your waterlevel: or type 'r' to quit") 
//   if (isNaN(waterprompt)) {
//     if (waterprompt==='r') {
//       console.log("you left too soon")
//       break
//     }else{
//       console.log("be serious with your life");
//     }
//   }else{
//     let entry=parseInt(waterprompt)
//     waterlevel=waterlevel=entry
//     console.log("total: ${water/100}");
//     if (waterlevel>100 && waterlevel==100) {
//       console.log("you can do better");
//     } else if (waterlevel>200 && waterlevel==200) {
//       console.log("getting better");
//     }else if (waterlevel>300 && waterlevel==300) {
//       console.log("almost there");
//     }else if (waterlevel>400 && waterlevel==400) {
//       console.log("little more push");
//     }else if (waterlevel>500 && waterlevel==500) {
//       console.log("you made it");
//     }else{
//       console.log("go home");
//     }
//   }
// }
// }


