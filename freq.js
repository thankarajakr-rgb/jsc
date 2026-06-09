let cart =[{name:"iphone",category:"ELectronics"},
    { name: "Samsung TV", category: "Electronics" },
    { name: "T-Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Apple", category: "Food" },
    { name: "Milk", category: "Food" },
    { name: "Laptop", category: "Electronics" },
    {name:"tomato",category:"Vegetables"}
]

    console.log(cart[0].category)

    let frequency ={}

    cart.forEach((v)=>{
        console.log(v)
        let cat =v.category
        console.log(cat)
        
        if (frequency[cat]){
            frequency[cat]=frequency[cat]+1
        }
        else{
            frequency[cat]=1
        }

    })
    console.log(frequency)

