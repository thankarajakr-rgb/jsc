//let a="iamthankaraja"
 

//console.log(a.toLocaleUpperCase())
//console.log(a.toLowerCase())
//console.log(a.length)
//console.log(a.trim()) 
//console.log(a.trimStart().length)
//console.log(a.trimEnd().length)
//console.clear()

//console.log(a.slice(0,7))
//console.log(a.substring(0,6))

/*console.log(a.includes("i"))

console.log(a.startsWith("a".toLowerCase()))
console.log(a.endsWith("A".toLowerCase()))


console.log(a.indexOf("a",a.indexOf("a",a.indexOf("a")+1)+1))  //3rd a op 8
console.log(a.indexOf("a",a.indexOf("a",a.indexOf("a",a.indexOf("a")+1)+1)+1))  //4th a op 10
console.log(a.indexOf("a",a.indexOf("a",a.indexOf("a",a.indexOf("a",a.indexOf("a")+1)+1)+1)+1)) //5th a op 12
console.log(a.lastIndexOf("a"))



console.log(a.replace("raja","gold"))

console.log(a.split(""))
console.log("Love U ".repeat(100000))

console.log(a.charAt(3))

console.log(a.charCodeAt(0))


console.log(Math.floor(5.9))

console.log(Math.round(6.8))

console.log(Math.ceil(9.8))

console.log(Math.sqrt(25))

console.log(Math.pow(2,4))

console.log(Math.max(3,4,5,6,39))

console.log(Math.min(1,3,434,443,33))



//let num="123456"
//let n="1ertgdhu278398"

//console.log(typeof(num))
//console.log(typeof(Number(num)))
//console.log(Number(num))
//console.log(typeof(num))
//console.log(typeof(n))
//console.log(typeof(String(n)))
//console.log(String(n))

let num="123"
let number=""
 console.log(typeof(Number(num)))
 console.log(Number(num))
 console.log(typeof(String(number)))
 console.log(String(number))
 console.log(Number(number))
 console.log(typeof(String(number)))
 console.log(typeof(Boolean(number)))
 console.log(Boolean(number))


let k="haida2233"
let d="3648.30kdkkd"


console.log(parseInt(k))
console.log(parseFloat(d))

let name="hi"
let letter="15sadfsf"
let flo="15.80kjsdfjsd"




console.log(parseInt(letter))
console.log(parseFloat(flo))


console.log("20"%"12")



console.log(true+false)
console.log("0"+true)
console.log("10" === 10)

console.clear()


//let age = prompt("Enter your age")

//if(age>=18){
//    console.log("Eligible FRo Vote")
//}
//else
//{
//    console.log("Not Eligible")
//}

console.clear()

//let username=prompt("Enter user Name")
//let password=prompt("Enter Pwd")


//if(username==="raja" && password === "raja@123"){
//    console.log("WElocme")
//}
//else if(username==="raja" || password=== !"raja@123"){
//    console.log("invalid pwd")
//}
//else{
//    console.log("Both invaild")
//}

//let signal="yelle"

//if (signal == "red"){
//    console.log("STOP")
//}
//else if(signal == "yelloe"){
//    console.log("start")
//}
//else if (signal == "green")
//{
//    console.log("GO")
//}
//else{
//    console.log("iv color")
//}

//let t=10
//let r=200
//let j=50

//if (t>=r && t>=j){
//    console.log("t is greater")
//}
//else if(r>=t && r>=j){
//    console.log("r is greater")
//}
//else {
//    console.log("j is greater")
//}

function Leapyear(year){
    if((year%4 === 0 && year%100 !== 0) || (year%400 === 0))
        {
        console.log(+year, "is a Leap year")
    }
    else{
        console.log(+year ,"is not a leap year")
    }
}
Leapyear(2008)


function leapornot(year){
    if((year%400 == 0) || (year%4 == 0 && year%100 != 0) ){
        console.log(+year ,"IS a Leap Year")
    }
    else{
        console.log(+year,"Not a Leap Year")
    }
}
leapornot(2012)

let y =prompt("enter a year")

if((y%400 == 0) || (y%4 == 0 && y%100 !=0)){
    console.log(+y ,"Is a Leap year")
}
else{
    console.log(+y, "Not a Leap Year")
}



let age=19
let result= age>=18 ? "Eligible":"Not Eligible"
console.log(result)

let a= null ?? "Not has a value"
console.log(a)


let role="Admin"

switch (role){
    case "user" :
        {console.log("User Logged in")}
        break;
    case "Admin":
        {
            console.log("Admin Looged in")
        } 
        break;  
    default:
        {
            console.log("Invalid User")
        }     
}




for (let i=0 ; i<=5 ; i++)
{
    console.log(i)
}
    


let s="iamThankarajaK World EntertaineraeIoUaeA"
let vowel=0

for (let j=0;j<=s.length;j++){

    if (s.charAt(j).toLowerCase()=='a' || s.charAt(j).toLowerCase()=='e' || s.charAt(j).toLowerCase()=='i' || s.charAt(j).toLowerCase()=='o' || s.charAt(j).toUpperCase()=='u' )
    {
        vowel+=1
    }
    
}
console.log(vowel)
console.log(s.length)



for (i=0 ; i<=10 ; i++){
    if (i%2==0)
    console.log(i)
}


//for 2nd table
for (i=1 ; i<=20 ; i++){
    console.log(i+"*2"+"="+i*2)
}
    


// for tables till 20

for (i=1; i<=10;i++){
    console.log(i+"table")
    for (k=1 ; k<=20 ; k++){
        console.log(k+ "*" +i +"=" + k*i )
    }
   
}



for (i=0;i<=5;i++){
    console.log("*")
    for(j=1;j<=1;j++)
        {
        console.log(i+"*")
    }

}
 

let friendsname = ['monisha','indrani','indhumathi','swathi','kaviya','manorammal']

for (i=0;i<friendsname.length;i++){
    console.log(friendsname[i].split("").reverse().join(""))
}
      

function detail(name,age, city="chennai"){
    console.log(`My Name is ${name} My age is ${age} My city is ${city}`)
}

detail("raja",30)
detail("thanka",31,"nilgiri")
 

function add(a,b){
        return a+b
}

function sub(a,b){
        return a-b
}

function mul(a,b){
        return a*b
}

function div(a,b){
        return a/b
}

function all (n1,n2){
 
   let a=  add(n1,n2)
  let b=  sub(n1,n2)
    mul(n1,n2)
    div(n1,n2)

return `the sum is ${a} the sub is ${b}`
   
}

let a =all (5,10)
console.log(a)



function fact(n){
    if(n==0 || n==1){
        return 1
    }
    else{
        return n*fact(n-1) // function called by itself 
    }

}
console.log(fact(5)).  // 5*4*3*2*1



function add(a,b){
    console.log (a+b)
}
add(1,2)

let sub = (a,b)=>(a-b)

console.log(sub(5,10))

*/
function add(a,b){
    let c=0
    if (b>10){
        c = ( a + (100 % a) )
    }
    console.log(c)
}

add(1000,12)






