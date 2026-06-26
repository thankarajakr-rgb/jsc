const arr = [1, 2, 2, 3, 4, 4, 5];


j=arr.indexOf(2)
console.log(j)

/*let k = [...new Set(arr)]
console.log(k)*/

let final =arr.filter((v,i)=>{
   
    return arr.indexOf(v)===i
})

console.log(final)