// FOr table
//for (let i=1 ; i<=10 ; i++){
//    console.log(i + "tables")
//    for (let j= 1 ; j<=10 ; j++)
//        console.log(j + "*"+ i+"=" + i*j)
//}


 // *
// * *
// * * *
// * * * *
// * * * * *


//for ( let i=1;i<=5;i++){
//    console.log("* ".repeat(i))
//}

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// Change the space for pyramid

//for ( let i=5;i>=1;i--){
//    console.log("  ".repeat(5-i)+" *".repeat(i))
//}


// *      *
//  *    *
//   *  *
//     *
//let k=4
//for (let i=0 ; i<k-1 ; i++){
//    console.log(" ".repeat(i)+"*" + " ".repeat(( k - i -1 )*2) + "*")
//}
//console.log(" ".repeat(k-1)+"*")


// for X
//let k=4
//for (let i=0 ; i<k-1 ; i++){
//   console.log(" ".repeat(i)+"*" + " ".repeat(( k - i -1 )*2) + "*")
//}
//console.log(" ".repeat(k-1)+"*")

//let n = 0;
//let z=5;
//for (let i = 3; i > n ; i--) {
//    console.log(" ".repeat(i) + "*" + " ".repeat((z - i - 1) * 2) +"*" );
//}

/*let n=4
for (i=0 ; i<n-1 ; i++){
    console.log(" ".repeat(i)+ " *" + " ".repeat((n-i-1)*2)+"*")
}
console.log(" ".repeat(n-1)+ " * ")

let z=5
for (i=3 ; i>0 ;i--){
    console.log(" ".repeat(i)+"*"+ " ".repeat((z-i-1)*2)+"*")
}

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
} 

let n = 5;

for (let i = 1; i <= n; i++) {
    console.log(
        " ".repeat(n - i) +
        "*".repeat(2 * i - 1)
    );
}
 */

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
} 

