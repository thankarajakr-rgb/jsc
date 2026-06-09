let prices = [120, 115, 110, 95, 90, 85];
let threshold = 100;
// since we use find it returns only first true condition 95
let final =prices.find((v)=>{
    return v<threshold
})

console.log(final)