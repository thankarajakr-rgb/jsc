let electricity = function(units){
    let amount=0
    if(units <= 100){
        amount = 1 * units

    }
    else if(units>100 && units<200){
        amount = 100 +  5 * (units-100)
    }
    else if (units>200 && units<300){
        amount = 100 + 500 +10* (units-200)
    }
    else{
        amount =100+500+1000+ 15 * (units-300)
    }
    return amount
    
}

console.log(electricity(114))
