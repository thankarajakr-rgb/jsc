function employee(salary ,experience) {
     let newsalary ;
     
     
    if (experience > 10){
        newsalary = salary * 0.2 ;
    }
    if (experience>=5)
    {
        newsalary =salary*0.10;
    }
    else{
        newsalary=salary*0.05;
    }
    return salary+newsalary
    
    
}

/*function displayfinalsalary(finalsalary){


    console.log("Final Salary",finalsalary )

    if (finalsalary>100000){
        console.log("High Salary Employee")
    }
}


let finalsalary = employee(500,12)
displayfinalsalary(finalsalary) */

function displayfinalsalary(salary ,experience)
{
    let finalsalary = employee(salary ,experience)

    console.log("Final Salary",finalsalary)
    if (finalsalary>100000){
        console.log("High Salary Employee")
    }

}

displayfinalsalary(1000,5)







