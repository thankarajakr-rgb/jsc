let sentences = [
    "JavaScript is awesome",
    "I love programming",
    "Practice makes perfect"
];

let final = sentences.map((v)=>{
    let word=v.split(" ")
    console.log(word)
    let longestword=0

    word.forEach((v)=>{
        if(v.length>longestword){
            longestword=v.length
        }

    })
   return longestword

})

console.log(final)

 