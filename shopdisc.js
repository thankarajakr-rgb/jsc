function calculatediscunt(amount,membership){
    let discount=0;

    if (amount>5000){
        discount = amount*0.20;
    }
    else if(amount>2000){
        discount=amount*0.10;
    }
    else{
        discount=amount*0.05;
    }
    
    if(membership=== "premium"){
        discount = discount+ amount*0.05
    }
    return discount
}

function generatebill(amount,membership){
    let discount = calculatediscunt(amount,membership)
    let finalbill = amount-discount

    console.log("Total amount",amount)
    console.log("Additional Discount",discount)
    console.log("FinalBill",finalbill)

}

generatebill(10000,"premium")

