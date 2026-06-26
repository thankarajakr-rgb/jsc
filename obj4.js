/*5. Deep API Response

Extract:

status
token
first user's username
second user's city
first role of first user
const response = {
  status: "success",
  auth: {
    token: "xyz123"
  },
  users: [
    {
      username: "alex",
      roles: ["admin", "editor"],
      address: {
        city: "Delhi"
      }
    },
    {
      username: "emma",
      roles: ["user", "moderator"],
      address: {
        city: "Mumbai"
      }
    }
  ]
};*/

const response = {
  status: "success",
  auth: {
    token: "xyz123"
  },
  users: [
    {
      username: "alex",
      roles: ["admin", "editor"],
      address: {
        city: "Delhi"
      }
    },
    {
      username: "emma",
      roles: ["user", "moderator"],
      address: {
        city: "Mumbai"
      }
    }
  ]
};

console.log(response.status)
console.log(response.auth.token)
console.log(response.users[0].username)
console.log(response.users[1].address.city)
console.log(response.users[0].roles[0])


const {status,
    auth:{token},
    users:[{username,roles :[admin]},{address:{city}}]
} =response

console.log(status)
console.log(token)
console.log(username)
console.log(city)
console.log(admin)
