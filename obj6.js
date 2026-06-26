/*7. Nested Array + Rest Object

Extract:

first project
second project
all remaining projects
const developer = {
  projects: [
    "CRM",
    "E-Commerce",
    "Portfolio",
    "Chat App",
    "ERP"
  ]
};

Expected:

firstProject
secondProject
otherProjects*/

const developer = {
  projects: [
    "CRM",
    "E-Commerce",
    "Portfolio",
    "Chat App",
    "ERP"
  ]
};

console.log(developer)
console.log(developer.projects[0])
console.log(developer.projects[1])
console.log(developer.projects.slice(2))


const {
    projects:[first,second,...rest]
}=developer

console.log(first)
console.log(second)
console.log(rest)
