let sentences = [
    "JavaScript is awesome",
    "I love programming",
    "Practice makes perfect"
];
 
let final =sentences.map((v)=>{
    console.log(v.split(" "))
    let k=v.split(" ")
let longestwor=0
    k.forEach((v)=>{
        console.log(v.length)
        if(v.length>longestwor){
            longestwor=v.length
        }
        

    })
    return longestwor
})
console.log(final)