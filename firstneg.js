/*12. Find First Negative Number
JavaScript
const arr = [5, 10, -3, 8, -1];
Output
JavaScript
-3*/

const arr = [5, 10, -3, 8, -1];



let final =arr.find((v,i)=>{
     return v<0
})
console.log(final)
