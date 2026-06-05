

   

// * *
// * * *
// * * * *
// * * * * *
// First 

/*let k = ""
for(i=1;i<=5;i++){
    for(j=1;j<=1;j++){
        k = k+"*"
    }
    console.log(k)
}

for (let i=1; i<=5;i++){
    let x=" "
    for (let j=1;j<=1;j++){
        x = x+"*"
    }
    console.log(x)
}

    

//Second
// * * * * *
//   * * * *
//     * * *
//       * *
//         *



for (let i=5 ; i>=1 ;i--){
    
let l=""
    for( let j=5 ; j>i ; j-- ){
        
        l = l + "  ";
     
    } 

    for (let k=1 ; k<=i ;k++)
    {
        l = l + "* "
    }
    console.log(l)
    }



for (let i = 5; i >= 1; i--) {
    let row = "";

    // spaces
    for (let j = 5; j > i; j--) {
        row += "  ";
    }

    // stars
    for (let k = 1; k <= i; k++) {
        row += "* ";
    }

    console.log(row);
}

let m =""
for ( let k=5 ; k>=1 ; k--){
    
    for (let l=5 ; l>k ;l--){
        m = m + " ";
    }
    for (let n=1 ; n<=k ;n++){
        m = m + "* "
    }
    console.log(m)
    }

   

 
// THIRD
// *      *
//  *    *
//   *  *
//    *
 




let n = 4;

for (let i = 0; i < n; i++) {
    let row = "";

    // Left spaces
    row += " ".repeat(i);

    // First star
    row += "*";

    // Inner spaces
    let innerSpaces = 2 * (n - i - 1);

    if (innerSpaces > 0) {
        row += " ".repeat(innerSpaces);
        row += "*";
    }

    console.log(row);
}
     */

//*
//* *
// * * *
// * * * *
// * * * * *


//for(let i=1 ; i<=5 ;i++){
//    console.log("* ".repeat(i))

//}

//Second
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

//for (let j=5;j>=1;j--){
//    console.log("  ".repeat(5-j)+ " *".repeat(j))
//}


//for (let j=4;j>=1;j--){
//    console.log("  ".repeat(4-j)+"*" + "  ".repeat(9-j)+"*")
//}





for (let j=4;j>=1;j--){
    let row=" "

   row = ("  ".repeat(4-j)+"*")
    if (j === 4){
            row=("  ".repeat(9-j)+"*")
    }

    else if (j===3){
     row =   ("  ".repeat(6-j)+"*")
    }
    else if (j===2){
      row =  ("  ".repeat(3-j)+"*")
    }
    else {
      row =  ("".repeat(0))
    }
    console.log(row)

}


// for V

//let n = 4;

//for (let i = 0; i < n ; i++) {
//    console.log( " ".repeat(i) + "*" + " ".repeat((n - i - 1) * 2) +  "*" );
//}



//let k = 4;

//for (let i = 0; i < k-1; i++) {
//    console.log( " ".repeat(i) + "*" + " ".repeat((k - i - 1) * 2) +  "*");
//}
//console.log(" ".repeat(k-1)+"*");


// for X

let k = 4;

for (let i = 0; i < k-1; i++) {
    console.log( " ".repeat(i) + "*" + " ".repeat((k - i - 1) * 2) +  "*");
}
console.log(" ".repeat(k-1)+"*");


let z=5;
for (let i = 3; i > 0 ; i--) {
    console.log(" ".repeat(i) + "*" + " ".repeat((z - i - 1) * 2) +"*" );
}
 



