//JavaScript
//const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
//Output
//JavaScript
//{
//  apple: 3,
//  banana: 2,
//  orange: 1
//}
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let newarr={}

let final=arr.forEach((v,i)=>{
    console.log(v)
    if(newarr[v]){
        newarr[v]=newarr[v]+1
    }
    else{
        newarr[v]= 1
    }

})
console.log(newarr)

let last=arr.reduce((v,i)=>{
    if (v[i]){
        v[i]=v[i]+1
    }
    else{
        v[i]=1
    }
    return v
},{})
console.log(last)






