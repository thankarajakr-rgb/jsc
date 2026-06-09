let books = [
    {
        title: "Harry Potter",
        categories: ["Fantasy", "Adventure"]
    },
    {
        title: "Atomic Habits",
        categories: ["Self Help"]
    },
    {
        title: "The Hobbit",
        categories: ["Fantasy", "Adventure"]
    },
    {
        title: "Clean Code",
        categories: ["Programming"]
    },
    {
        title: "Dune",
        categories: ["Science Fiction", "Adventure", "Drama"]
    }
];
let final = books.filter((v)=>{
    return v.categories.length>1

})
console.log(final)