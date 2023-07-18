// task
// -generate a rating system with random names and ratings in an Object
// -find the total amount of people that rated
// -find the total and average ratings
// -find the total number off people that rated for 1-5

let raters = ["williams","daniel","travis","david","peter","samuel","paul",
"joy","peace","happiness","faith","crown","chibueze","desmond","patrick"];
let random_raters = raters[Math.floor(Math.random()*raters.length)]
// console.log(random_raters)
let rating_arr = []
let rate_arr = []
for(i=0;i<     raters.length;i++){
    let obj = {name:raters[Math.floor(Math.random()*raters.length)],rate:Math.floor(Math.random()*6)}
    let pushed = rating_arr.push(obj)
    let pushed2 = rate_arr.push(obj.rate)
}
console.log(rating_arr,rate_arr)
// so we have in our terminal the randomly generated object with randomly generated names and rating!
// we move on
let total_raters = rating_arr.length
// or
let total_raters2 = rate_arr.length
console.log(total_raters,total_raters2)
// total and average ratings!
let total_ratings = rate_arr.reduce((a,b)=>{
    return a+b
})
console.log(total_ratings)
// average ratings
let average_ratings = total_ratings/total_raters2
console.log(Math.floor(average_ratings))
// the total number of people that rated for 1-5!
let raters1 = rate_arr.filter((el)=>{
    return el===1
})
let length1 = raters1.length
console.log(raters1)
console.log("the total number of people that rated for 1 is ",length1)
let raters2 = rate_arr.filter((el)=>{
    return el===2
})
let length2 = raters2.length 
console.log(raters2)
console.log("the total number of people that rated for 2 is ",length2)
let raters3 = rate_arr.filter((el)=>{
    return el===3
})
let length3 = raters3.length
console.log(raters3)
console.log("the total number of people that rated for 3 is ",length3)
let raters4 = rate_arr.filter((el)=>{
    return el===4
})
let length4 = raters4.length
console.log(raters4)
console.log("the total number of people that rated for 4 is ",length4)
let raters5 = rate_arr.filter((el)=>{
    return el===5
})
let length5 = raters5.length
console.log(raters5)
console.log("the total number of people that rated for 5 is ",length5)


// THANK YOU!


