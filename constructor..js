// /*
//     Attendance System.
//     Guess Game System.
// */
// const prompt = require("prompt-sync")();
// const attendance = () => {
//   let register = [];
//   let student = {};

//   while (true) {
//     let entry = prompt("Who are you or press 'q' to Exit: ");
//     let time = new Date();
//     let convTime = time.toString();
//     let timeDate = convTime.slice(0, 15);
//     let timer = convTime.slice(16, 24);
//     let newTime = timer.split(":")[0];

//     if (entry === "q") {
//       console.log(
//         `The Total Number of student in attendance is: ${register.length} students`,
//       );

//       console.log("which are: ");

//       register.map((el) => {
//         console.log(el.name);
//       });
//     } else {
//       if (newTime > 12) {
//         student = {
//           name: entry,
//           date: timeDate,
//           time: `${timer.split(":")[0] % 12}:${timer.split(":")[1]}:${
//             timer.split(":")[2]
//           }PM `,
//         };
//         register.push(student);
//       } else {
//         student = {
//           name: entry,
//           date: timeDate,
//           time: `${timer.split(":")[0]}:${timer.split(":")[1]}:${
//             timer.split(":")[2]
//           }AM `,
//         };
//         register.push(student);
//       }
//     }

//     console.log(register);
//   }
// };

// // attendance();

// for (let i = 1; i <= 4; i++) {
//   console.log(i - 1);
// }

// class Rect {
//     constructor(length, height) {
//       this._length = length;
//       this.height = height;
  
      // console.log(
      //   `the Height is: ${this.height}m and the length is: ${this.length}m`,
      // );
    // }
  
    // perimeter 2(l+b)
    // area (lb)
    // diagonal h = rt(l*2 + b*2)
  
  //   perimeter() {
  //     return 2 * (this.height + this._length);
  //   }
  
  //   area() {
  //     return this.height * this._length;
  //   }
  
  //   get readValue() {
  //     return `${this._length} and ${this.height}`;
  //   }
  
  //   set readValue(length) {
  //     return (this._length = length);
  //   }
  // }
  
  // let rect = new Rect(8, 5);
  // let rect2 = new Rect(1, 7);
  
  // rect2.length = 3;
  
  // console.log((rect2.readValue = 8));
  // console.log(rect2);
  
  // function myRect() {}
  
  // let a = { name: "peter" };
  // console.log((a.name = "James"));
  // console.log(a);


  
  const prompt = require("prompt-sync")();

  const guessgame=()=>{

    let Guess= Math.floor(Math.random()*10)


for (let index = 1; index <=4 ; index++) {
  // console.log("");

  let userentry= prompt("Guess a number: ")

  if(isNaN(userentry)){
    console.log("Enter a number not a letter idiot!");
  }else{
    let convert= parseInt(userentry);
    if(Guess===convert){
      console.log("Bravo you won!");
    }else{
      if(Guess>convert){
        console.log ("oh!, You Lost! but The number you entered is greater than the computer guess");
      }else{
        console.log ("Oh! you Lost! but the number you entered is less than the computer guess number")
      }
    }


  }
  
}


  }
  // console.log(guessgame());






let myName="Segun"

  for (let i = 0; i < myName.length; i++) {
  console.log(myName[i], i);
}
let i = 0;
while (i <= myName.length-1) {
  console.log(myName[i], i);
  i++;

}

const attendance = () => {
    let register = [];
    let student = {};
  
    while (true) {
      let entry = prompt("Who are you or press 'q' to Exit: ");
      let time = new Date();
      let convTime = time.toString();
      let timeDate = convTime.slice(0, 15);
      let timer = convTime.slice(16, 24);
      let newTime = timer.split(":")[0];
  
      if (entry === "q") {
        console.log(
          `The Total Number of student in attendance is: ${register.length} students`,
        );
  
        console.log("which are: ");
  
        register.map((el) => {
          console.log(el.name);
        });
        break;
      } else {
        if (newTime > 12) {
          student = {
            name: entry,
            date: timeDate,
            time: `${timer.split(":")[0] % 12}:${timer.split(":")[1]}:${
              timer.split(":")[2]
            }PM `,
          };
          register.push(student);
        } else {
          student = {
            name: entry,
            date: timeDate,
            time: `${timer.split(":")[0]}:${timer.split(":")[1]}:${
              timer.split(":")[2]
            }AM `,
          };
          register.push(student);
        }
      }
  
      console.log(register);
    }
  };
  
  console.log(attendance()); 


