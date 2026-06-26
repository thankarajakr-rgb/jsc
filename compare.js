/*4. Find Common Elements
JavaScript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
Output
JavaScript
[3, 4, 5]*/



let arr1=[1,2,3,4,5]
let arr2=[3,4,5,6,7]

let arr3=[]

/*let k =arr1.forEach((v)=>{
    
   arr2.forEach((k)=>{
     if (v==k){
             arr3.push(k)
     }
   })
    
}

)
console.log(arr3)*/

for(i=0;i<arr1.length;i++){
   
    for(j=0;j<arr2.length;j++){
        
        if (arr1[i]==arr2[j]){
            arr3.push(arr1[j])
        }
    }
}

console.log(arr3)


