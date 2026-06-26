/*8. Group Numbers Into Even and Odd
JavaScript
const arr = [1, 2, 3, 4, 5, 6];
Output
JavaScript
{
  even: [2, 4, 6],
  odd: [1, 3, 5]
}*/
const arr = [1, 2, 3, 4, 5, 6];

let even=arr.filter((v,i)=>{
    if (v%2==0){
        return v
    }
})

let odd=arr.filter((v,i)=>{
    if (v%2==1){
        return v
    }
})
let k= {even:even,odd:odd}
console.log(k)

