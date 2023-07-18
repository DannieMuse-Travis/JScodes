// const PromptSync = require("prompt-sync");

const prompt = require("prompt-sync")()
// let water = 0;
// let waterLevel = parseInt(water)
// while (true) {
//     let varPrompt = prompt("Input your Water intake (in cl): ")
    
//     if (isNaN(varPrompt)){
//         console.log("Invalid Input")
//     }
//     else{
//         let entry = parseInt(varPrompt)
//         waterLevel = waterLevel + entry
//         console.log(`Total ammount of water: ${waterLevel/100}L`)
//         if(waterLevel < 500 && waterLevel !== 500){
//             console.log('Congratulations');
//             break
//         }  else if (waterLevel === 500){
//             console.log('Wow!')
//             break
//         }
        
//         // console.log('Wow!')
//     }

    
// }

// while (true) {let randomNumber = Math.floor(Math.random() * 5)

//     console.log(randomNumber)

//     let userEntry = prompt("Take a Guess or press 'r' to exit: ")

// if (isNaN(userEntry)) {
//     if (userEntry === 'r') {
//             console.log("I no sey you go come back")
//     break;} 
//     console.log("e no fit work oo...!")
// } else {
//     let entry = parseInt(userEntry)
//     if (randomNumber === entry) {
//         console.log("you Won")
//     break;} else {
//         console.log("you lose")
//     }
// } 
// }





let water = 0;
let waterLevel = parseInt(water);
while (true) {
    let varPrompt = prompt("Input your Water intake (in cl) or Quit the Game now 'exit': ")
    if (isNaN(varPrompt)) {
        if (varPrompt === "exit") {
            console.log("see you later")
            break;
        }
        console.log("Invalid Input...Try Again Please")
    } else {
        let entry = parseInt(varPrompt)
        waterLevel = waterLevel + entry
        console.log(`Total ammount of water: ${waterLevel/100}L`)
        if(waterLevel <= 100 && waterLevel === 100) {
            console.log('Nice try... but you still have to continue');
            // break
        } else if (waterLevel <= 200 && waterLevel === 200) {
            console.log('Encouraging...')
            // break;
        } else if (waterLevel <= 300 && waterLevel === 300){
            console.log("I'm very happy for you...")
        } else if (waterLevel <= 400 && waterLevel === 400){
            console.log("Keep going... You are almost there")
        } else if (waterLevel <= 500 && waterLevel === 500) {
            console.log("Awesome!!! You are Healthy...")
        } else {
            console.log("Over Hydration is bad for your health")
        } 
    
    }
}
