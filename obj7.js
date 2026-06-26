/*8. One-Line Destructuring Challenge

Extract in one statement:

const system = {
  server: {
    host: "localhost",
    ports: [3000, 4000, 5000]
  },
  database: {
    dbName: "mydb",
    credentials: {
      username: "admin"
    }
  }
};

Expected:

host
secondPort
dbName
username*/
const system = {
  server: {
    host: "localhost",
    ports: [3000, 4000, 5000]
  },
  database: {
    dbName: "mydb",
    credentials: {
      username: "admin"
    }
  }
};


const {
    server:{
    host,
    ports:[,second]},
    database:{
        dbName,
        credentials:{username}
    }}
 = system

 console.log(host)
 console.log(second)
 console.log(dbName)
 console.log(username)


