/*function classattendance(totalclass,attended){
    let attendpercent = (attended/totalclass)*100

  return attendpercent

    }



function checkeligible(attendpercent){
    if(attendpercent>90){
        console.log("Excellent Attendance")
    }
     if(attendpercent>75){
        console.log("Eligible for exam")
    }
    else{
        console.log("not Eligible")
    }
}

let attend = classattendance(200,100)
console.log("Attendance percent is" +" "+ attend)

checkeligible(attend)*/

function classattendance(totalclass,attended){
    let attendpercent=(attended/totalclass)*100
    return attendpercent
}

function checkeligible(attendpercent){
    if(attendpercent>90){
        console.log("EXcellent ATTENDANCE")
    }
    if(attendpercent>75){
        console.log("ELigible For Exam")
    }
    else{
        console.log("Not Eligible")
    }
}

let attend = classattendance(100,91)
console.log("Attendence Percentage is"+ " "+ attend )

checkeligible(attend)