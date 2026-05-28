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