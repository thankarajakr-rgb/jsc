let students = [
    {
        name: "Ravi",
        marks: [78, 85, 92]
    },
    {
        name: "Priya",
        marks: [88, 100, 95]
    },
    {
        name: "Arun",
        marks: [100, 90, 85]
    }
];
// since its find it gives only one op if its filter we will get all two
let final =students.find((v)=>{
    return v.marks.includes(100)
})

console.log(final)