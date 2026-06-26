/*5. Reverse Array Without reverse()
JavaScript
const arr = [1, 2, 3, 4, 5];
Output
JavaScript
[5, 4, 3, 2, 1]*/
const arr = [1, 2, 3, 4, 5]

let arr2=[]

/*let k =arr.reverse()
console.log(k)*/

for (i=arr.length-1;i>=0;i--){
     arr2.push(arr[i])
}
console.log(arr2)



const reversed = arr.reduce((acc, num) => {
   acc.unshift(num)
    return acc
}, []);

console.log(reversed);


