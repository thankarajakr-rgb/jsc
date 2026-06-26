/*10. Flatten One Level
JavaScript
const arr = [1, [2, 3], [4, 5], 6];
Output
JavaScript
[1, 2, 3, 4, 5, 6]*/

/*const arr = [1, [2, 3], [4, 5], 6];

let k = []

/*console.log(arr.flat())*/

/*console.log(arr[1][0])*/


/*arr.forEach((v,i)=>{
    if(Array.isArray(v)){
        v.forEach((item)=>{
            k.push(item)
        })
    }else{
        k.push(v)
    }

})

console.log(k)*/

const arr2 = [1, [2, 3], [4, 5], 6];


let z=[]

for(i=0;i<arr2.length;i++){
    console.log(arr2[i])
    for(j=0;j<arr2.length;j++){
        console.log(arr2[j])
    }
  
}


