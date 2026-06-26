/*const arr=[10,5,20,8,15]



let final = arr.reduce((v,i)=>{
    if(v>i){
        return v
    }
    else {
        return i
    }
})
console.log(final)

let num = arr.sort((a,b)=>(b-a))
console.log(num)

let k =[...new Set(num)]

console.log(k[1])*/
const arr=[10,5,20,8,15]
 let evenarr=[]
for (i=0;i<arr.length;i++){
    if(arr[i]%2==0){
    evenarr.push(arr[i])
    }
    
    
}
console.log(evenarr)