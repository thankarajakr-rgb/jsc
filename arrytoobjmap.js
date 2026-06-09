let transaction =[100,50,1000,200,30]

let k = transaction.map((v)=>{
    let gst = v*0.18
    let finalamount= v+gst
    
    let newbill={amount:v,Addedgst:gst,final:finalamount}
    return newbill

})
console.log(k)