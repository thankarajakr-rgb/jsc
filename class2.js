let a="i love java"

console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.length)
console.log(a.trim().length)
console.log(a.trimStart())
console.log(a.trimStart().length)
console.log(a.trimEnd().length)
console.log(a.slice(0,5))
console.log(a.substring(0,5))
console.log(a.includes('u'))
console.log(a.startsWith('m'.toUpperCase()))
console.log(a.endsWith('n'))
console.log(a.indexOf("u",a.indexOf('u',a.indexOf('u')+1)+1))
console.log(a.replace("java","python"))
console.log(a.split(""))
console.log("I love You".repeat(100))
console.clear()
console.log(a.charAt(2))
console.log(a.charCodeAt(0))

console.log(Math.floor(5.6)) //
console.log(Math.floor(25.4))
console.log(Math.round(5.4))
console.log(Math.round(5.6))
console.log(Math.ceil(5.6))
console.log(Math.ceil(5.1))
console.log(Math.sqrt(1))
console.log(Math.pow(2,3))
console.log(Math.max(2,5,6,5,8))
console.log(Math.min(2,5,6,5,8))

console.clear()

let num="123"
let number="123sdfnsjfm"
// console.log(typeof(Number(num)))
// console.log(Number(num))
// console.log(typeof(String(number)))
// console.log(String(number))
// console.log(typeof(String(number)))
// console.log(typeof(Boolean(number))

console.log(Boolean(number))


// console.log(Ph)


let name="hi"
let letter="15sadfsf"
let flo="15.80kjsdfjsd"

console.log(name.padStart(5,"0"))
console.log(name.padEnd(5,"0"))


console.log(parseInt(letter))
console.log(parseFloat(flo))


console.log("10"-"8")
console.log("10"*"8")
console.log("10"/"8")
console.log("10"+"8")

console.log(true+false)
console.log("0"+true)
console.log("10" === 10)


// let age=prompt("Enter the age :")

// if(age>=18){
//     console.log("Eligible to vote")
// }
// else{
//     console.log("not eligible")
// }


// let username=prompt("Enter Your Name :")
// let password=prompt("Enter Your password :")

// if(username == "murugan" && password == "murugan123"){

//     console.log("Login successful")
   
// }
// else{
//     console.log("Invalid credential")
// }


// let signal=""

// if(signal=="red"){
//     console.log("stop")
// }
// else if (signal == "yellow"){
//     console.log("be ready")
// }
// else if(signal == "green"){
//     console.log("Go")
// }

// else{
//     console.log("Invalid Color")
// }
// let username=prompt("Enter Your Name :")
// let password=prompt("Enter Your password :")

// if(username == "murugan" && password == "murugan123"){

//     console.log("Login successful")
   
// }
// else{
//     console.log("Invalid credential")
// }


// let signal=""

// if(signal=="red"){
//     console.log("stop")
// }
// else if (signal == "yellow"){
//     console.log("be ready")
// }
// else if(signal == "green"){
//     console.log("Go")
// }

// else{
//     console.log("Invalid Color")
// }

console.clear()
// console.log("Dashboard")

// let role="Admin"

// switch(role){
//     case "user":
//         console.log("User Dashboard")
//         break
//     case "Admin":
//         console.log("Admin Dashboard")
//         break
//     default:
//         console.log("Invalid users")
// }

let sentence="Welcome to Iat Technologies. You can learn more technologies.Full stack is very wonderful course this course taken by Murugan "
let up_count=0
let lo_count=0
let vowel=0

for(let i=0;i<=sentence.length;i++){

    if(sentence.charAt(i).toLowerCase() =='a'||sentence.charAt(i).toLowerCase() =='e'||sentence.charAt(i).toLowerCase() =='i'||sentence.charAt(i).toLowerCase() =='o'||sentence.charAt(i).toLowerCase() =='u'){
         vowel+=1
       
    }
   

   
}
// console.log(vowel)


// for(let i=1;i<=10;i++){
//     console.log(i+"*2="+i*2)
// }

// console.clear()

// for(let j=1;j<=20;j++){
//     console.log(j+" Table")
//     for(let k=1;k<=20;k++){
//         console.log(k+"*"+j+"="+k*j)
//     }
// }


let i=10

// while(i>=1){
//     console.log(i)
//     i--
// }

do{
 console.log(i)
 i++
}
while(i>20)



// *
// * *
// * * *
// * * * *
// * * * * *

// * * * * *
//   * * * *
//     * * *
//       * *
//         *


// *      *
//  *    *
//   *  *
//     *

//     *
//    * *
//   * * *
//  * * * *
// * * * * *


//function Welcome(){
//    console.log("welcome to my home")
//}

//Welcome()

//function callto(num){
//    console.log("Call to"   +num)
//}
//callto(8903522453)

//let add = function(){
//    console.log("I am a expression function")
//}

//add()
console.clear()

let details={
    milk:40,
    biscut:10,
    oil:60,
    tomato:40
}

console.log( details['oil'])

let purchase = function(amount,productname){
    let productvalue=details[productname]
    let balance=amount-productvalue
    return balance
}

let bamt=purchase(500,'milk')
console.log(bamt)



// let details=function(name,age,city="chennai"){
//     console.log(`My Name is ${name} and My age is ${age} and my city is ${city}`)
// }

// details("murugan",24,"theni")
// details("saraswathy",26,"palakkad")
// details("vigneshwaran",20)


// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b
// }

// function mul(a,b){
//     return a*b
// }

// function div(a,b){
//     return a/b
// }
// let aggregate=function(num1,num2){
//    let addition= add(num1,num2)
//    let subtraction= sub(num1,num2)
//    let multiplication= mul(num1,num2)
//    let divition= div(num1,num2)

//     return `Add Value ${addition}\n Sub value ${subtraction}`
// }

// let answer=aggregate(10,15)

// console.log(answer)


// function fac(n){
//     if(n==1 || n==0){
//         return 1
//     }
//     else{
//         return n*fac(n-1)  
//     }
// }

// console.log(fac(5)) // 5*4*3*2*1


// let add=(a,b)=> a+b

// console.log(add(15,20))


let friendsname=['monisha','indrani','indhumathi','swathi','kaviya','manorammal']



for(let i=0;i<friendsname.length;i++){
    // console.log(friendsname[i].split("").reverse().join(""))  //MuruganaguruM

    if(friendsname[i].length>6){
        console.log(friendsname[i])
    }

}
