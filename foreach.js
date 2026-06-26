/*let p = "This is a paragraph which consist of vowles aei"
let lc =p.toLocaleLowerCase()
console.log(lc)

let s =lc.split("")
console.log(s)
let count = 0

let k = s.forEach((v,i)=>{
    
    if("aeiou".includes(v)){
        count = count +1
    }
    
})

console.log("TOtal vowels" +"  "+count)*/


let p = "This is a paragraph which consist of vowles aei";
let k = p.split(" ")
console.log(k)


k.forEach((v) => {
    let count = 0;
   
    let j=v.toLowerCase().split("")
    console.log(j)
   
   
    j.forEach(v => {
        if ("aeiou".includes(v)) {
            count++;
        }
    });
    console.log(v,"->",count)
   
});


