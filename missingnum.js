/*9. Find Missing Number
JavaScript
const arr = [1, 2, 3, 5];
Output
JavaScript
4*/

const arr = [1, 2, 3, 5];

const newarr=[]


console.log(arr)



for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i+1){
        console.log(i+1)
      }
    }
    console.log(newarr)

     

   

