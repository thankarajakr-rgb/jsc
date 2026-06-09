let employees = [
    { name: "Ravi", joinYear: 2019, salary: 45000 },
    { name: "Priya", joinYear: 2021, salary: 60000 },
    { name: "Arun", joinYear: 2022, salary: 55000 },
    { name: "Meena", joinYear: 2020, salary: 70000 },
    { name: "Karthik", joinYear: 2023, salary: 48000 }
]


employees.filter((v)=>{
    if(v.salary>50000 && v.joinYear>2020){
        console.log(v) 
    }

})