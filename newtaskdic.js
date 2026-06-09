let store =["apple ","ball","cat","dog","elephant","flight","goat","hen","ink","jackfruit","kite"]


/*function check(input){
    
   
    let b = store.filter((v,i)=>{
    if(v.includes(input)){
        return v
       }
       
    
    
      
})
 console.log(b)

}




check("a")*/

function check(input){
    
    let b=store.filter((v,i)=>{
        let rev = v.split("").reverse().join("")


        if (v.includes(input) || rev.includes(input)){
            return v
        }
    })
    console.log(b)
}

check("eh")