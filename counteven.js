/*6. Sum of Even Numbers
JavaScript
const arr = [1, 2, 3, 4, 5, 6];
Output
JavaScript
12*/
const arr=[1,2,3,4,5,6]

let k=arr.filter((v)=>{
    if(v%2==0){
         return v
    }
})

console.log(k)

let final=k.reduce((v,i)=>{
        return v+i

})
console.log(final)