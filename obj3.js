/*3. Rename + Default Values

Extract and rename:

const employee = {
  id: 101,
  info: {
    fullName: "Karan"
  }
};

Expected:

employeeId
employeeName
department = "IT"
salary = 50000*/

const employee = {
  id: 101,
  info: {
    fullName: "Karan"
  }
};

console.log(employee)
console.log(employee.id)
console.log(employee.info.fullName)

const {
    id:employeeId,
    info:{fullName:employeeName},
    department = "IT",
    salary=50000
}=employee

console.log(employeeId)
console.log(employeeName)
console.log(department)
console.log(salary)

