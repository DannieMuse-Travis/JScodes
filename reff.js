let raters = ["james","simon","peter","paul","daniel","williams","travis","solomon",
"joy","peace","blessing","faith","esther","anna","glory"]
let random_raters = raters[Math.floor(Math.random()*raters.length)]
// let ratings = Math.floor(Math.random()*5)+1
// console.log(random_raters,ratings)
let rating_arr = []
let rate_arr = []
// let num_of_ratings = Math.floor(Math.random()*15)+1
for(i=0;i<raters.length;i++){
    let obj = {name:raters[Math.floor(Math.random()*raters.length)],rate:Math.floor(Math.random()*5)+1}
    let pushed = rating_arr.push(obj)
    let pushed2 = rate_arr.push(obj.rate)


}
console.log(rating_arr,rate_arr)
    let total_raters = rating_arr.length
    console.log(total_raters)  
      let mapped = rating_arr.map((el)=>{
        return el.rate
    })
    console.log(mapped)
