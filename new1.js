console.log("hai")

let a=["raja","thanka","gold","thankaraja"]


a[1]=("bestest of World")
console.log(typeof(a))

a[3]=("RA")

console.log(a)

let b=10
let c=10.5
let d="rakja"
let e=12222994884n
let f=null
let g=true
let h =Symbol("id")


console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))
console.log(typeof(h))


let raja={
    name:"raja",
    age:31
}

console.log(typeof(raja))


let today = new Date().getMonth()
console.log(today)


let x=9
let y=10

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)


z=3

console.log(z++)
console.log(z++)
console.log(++z)
console.log()
console.log()

console.clear()


let i=2 ,j=4

i-=-5

console.log(i)


console.log(true && false)
console.log(false || true)

console.log(!false)


let name="raja"
let age=31
let study="B.E"

console.log(name+`` +`   ` + age+ ` ` +`` +study)

console.log(`my name is ${name} i age is ${age} i studied ${study}`)


let city=null??"Nilgiri"
let home=null??`${name}`

console.log(city)
console.log(home)