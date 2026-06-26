/*1. Triple-Nested Object + Array

Extract:

companyName
ceoName
firstPhone
secondPhone
const data = {
  company: {
    name: "TechNova",
    ceo: {
      name: "Arun",
      contacts: {
        phones: ["1111111111", "2222222222"]
      }
    }
  }
};*/
const data = {
  company: {
    name: "TechNova",
    ceo: {
      name: "Arun",
      contacts: {
        phones: ["1111111111", "2222222222"]
      }
    }
  }
}

console.log(data)
console.log(data.company.name)
console.log(data.company.ceo.name)
console.log(data.company.ceo.contacts.phones[0])
console.log(data.company.ceo.contacts.phones[1])

let {company:{name}}=data

console.log(name)
console.log(contacts)