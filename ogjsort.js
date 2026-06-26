/*11. Sort Objects by Age
JavaScript
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];
Output
JavaScript
[
  { name: "Alice", age: 25 },
  { name: "John", age: 30 },
  { name: "Bob", age: 35 }
]*/

const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

/*let newuser=[]

console.log(users[0].age)

for(i=0;i<users.length;i++){
    console.log(users[i].age)
}*/

users.sort((a,b)=>(a.age-b.age))

console.log(users)

