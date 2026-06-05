
/*let a =["raja","vijay","murugan","malayalam","suriya"]
console.log(a)

    
for (i=0;i<a.length;i++){
    let k = (a[i].split("").reverse().join(""))
    
    console.log(k)

    if (a[i]===k){
        console.log(a[i]+" " + "IS A PALINDROME")
    }
    else {
        console.log(a[i]+ " " +"IT is not a palindrome")
    }
  
}*/


let a="Keerthana"
let k = a.split("").reverse().join("")
let j =a.split("").reverse().slice(1,a.length).join("")

if (a==k){
    console.log(a+"IS A PALINDROME")
}
else{
    

    console.log(a+j+" "+"Now It is a palindrome")
}




