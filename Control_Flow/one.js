// All the Conditional Operator and its useage

// < (less than) , >(greater than) , <=(less than equal to)  , >=(greater than equal to)
// = (to assign value ) , ==(to check equal or not) , != (not equal to)
// === (checks the typeof of the both values )


// ============if /else condition=================
// const val1 = 2;
// const val2= "2";

// if (val1===val2){
//     console.log("u r my type");
// }
// else{
//     console.log("u r not my type")
// }

// // if can be defined as it also
// const bal=1000;
// if (bal>100) console.log("Paisa h bhau")


// // =======if else if condition=======================
// const balance =1000;
//     if (balance < 500) {
//     console.log("Qauter ya half bakadi aa jayega")
//     } 
//     else if (balance < 750) {
//     console.log("Half aa jayega")
//     }
//      else if (balance<900) {
//         console.log("ek full aa jayega");    
//     }
//     else {
//         console.log("ek Blender Pride aa jayega")
//     }


// ==========operator conditions statements=============
// &&  and operator
// const userLoggedIn = true
// const debitCard = true
// if (userLoggedIn && debitCard && 2==2 ) {
// console.log("Allow to buy course")
// }

//  || or opertaor
// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if (userLoggedIn && debitCard && 2==2 ) {
// console.log("Allow to buy course")
// }
// if (loggedInFromGoogle|| loggedInFromEmail){
//     console.log("User logged in")
// }


// ============================================================================
// Nullish Coalescing Operator(??): null undefined
// it is used to return the value instead of null or undefined

// let val1;
// // val1 = 5?? 10;
// // val1 = null?? 10;
// // val1 = undefined?? 10;
// val1 = undefined?? null;
// console.log(val1)

//  Terniary Operator

// condition ? true:false


const iceTeaPrice =100
 iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80")