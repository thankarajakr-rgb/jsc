

/*let filtervalue= numbers.filter((v,i)=> {
    {
        if(v!==96)
        {
            return v
        }
    }
})
console.log(filtervalue)


let filtervalue= numbers.map((v,i)=> {
    {
        if(v!==96)
        {
            return v
        }
    }
})
console.log(filtervalue)


let oevalue= numbers.map((v,i)=> {
    {
        if(v%2==0)
        {
            return v
        }
    }
})
console.log(oevalue)

let fivalue= numbers.find((v,i)=> {
    {
        if(v%2==0)
        {
            return v
        }
    }
})
console.log(fivalue)





let forvalue= numbers.forEach((v,i)=> {
    {
        if(v%2==0)
        {
            console.log(v)
        }
    }
}) 


let eachvalue = numbers.forEach((v,i)=>{

    console.log("value is " +v+ "The index is" +i)
})
let filtervalue= numbers.filter((v,i)=> {
    {
        if(v!==96)
        {
            return v
        }
    }
})
console.log(filtervalue)



let maxnum= numbers.reduce((max,currentvalue)=>{

    if (max < currentvalue){

         max= currentvalue

    }
     return max
      
},0)


console.log(maxnum)
let numbers =[20,15,45,96,32,15]
let maxnum= numbers.reduce((min,currentvalue)=>{

    if (min currentvalue){

         min= currentvalue

    }
     return min
      
},0)

console.log(maxnum)



numbers.push(3690)
numbers.pop()
numbers.shift()
numbers.unshift(5555)
numbers.pop()
numbers.push(11)
console.log(numbers)  
let numbers =[20,15,45,96,32,15]

let foreachfun = numbers.forEach((v,i)=>{
   if (v%2==0){
    console.log(v) 
   }

})





let mapfun = numbers.map((v,i)=>{
    if (v%2==0){
     return v
    }
})

console.log(mapfun) 
let numbers =[20,15,45,96,32,15]

let findfun = numbers.find((v,i)=>{
    if (v%2==0){
        return v
    }
})
console.log(findfun)

let numbers =[20,15,45,96,32,15]

let filfunc = numbers.filter((v,i)=>{
    if(v!==96){
        return v
    }
})

console.log(filfunc)

// FOr greater number

let numbers =[20,15,45,96,32,15]

let redfun = numbers.reduce((v,i)=>{

    if (v>i){
        return v
    }
    else{
        return i
    }

})
console.log(redfun)

let numbers =[20,15,45,96,32,15]

let redfun = numbers.reduce((v,i)=>{

    if (v>i){
        return v
    }
    else{
        return i
    }

})
console.log(redfun)




let maxnum= numbers.reduce((max,currentvalue)=>{

    if (max < currentvalue){

         max= currentvalue

    }
     return max
      
},0)

console.log(maxnum)

let numbers =[20,15,45,96,32,1]

let minred = numbers.reduce((v,i)=>{
    if (v<i){
        return v
    }
    else{
        return i
    }
})
console.log(minred)

let numbers =[20,15,45,96,32,1]

let check = numbers.reduce((v,i,j)=>{
    console.log(v,i,j)
})
*/

let numbers =[20,15,45,96,32,1,5]

let each = numbers.reduce((v,i)=>{
      if (v<i){
        return v
      }
      else{
        return i
      }
})
console.log(each)