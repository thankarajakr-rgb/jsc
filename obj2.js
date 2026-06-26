/*2. Array of Objects Inside Array

Extract:

first student's name
second student's first mark
third student's second mark
const classroom = {
  students: [
    { name: "John", marks: [80, 90] },
    { name: "Sarah", marks: [75, 88] },
    { name: "Mike", marks: [92, 95] }
  ]
};*/
const classroom = {
  students: [
    { name: "John", marks: [80, 90] },
    { name: "Sarah", marks: [75, 88] },
    { name: "Mike", marks: [92, 95] }
  ]
};

console.log(classroom)
console.log(classroom.students[0].name)
console.log(classroom.students[1].marks[0])
console.log(classroom.students[2].marks[0])
