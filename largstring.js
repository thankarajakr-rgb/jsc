/*7. Find Largest String
JavaScript
const words = ["cat", "elephant", "dog", "tiger"];
Output
JavaScript
"elephant"*/

const words = ["cat", "elephant", "dog", "tiger"];
 

let largest=""

words.forEach((v,i)=>{
   if(v.length>largest.length){
        largest=v
   }
})

console.log(largest)