/*7. Find Longest Word
JavaScript
const words = ["apple", "banana", "kiwi", "strawberry"];
Output
JavaScript
"strawberry"*/

const words = ["apple", "banana", "kiwi", "strawberry"];

console.log(words)

let Longest=""

for(i=0;i<words.length;i++){
    if(words[i].length>Longest.length){
        Longest= words[i]
    }
}
console.log(Longest)