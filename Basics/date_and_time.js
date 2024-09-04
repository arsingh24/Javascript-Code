// Dates

// let myDate = new Date()
// // to get the Date in T06 format (2024-09-04T06:44:46.184Z)
// console.log(myDate);
// // to get the Date only
// console.log(myDate.toDateString());
// // to get the Date in T06 format (2024-09-04T06:44:46.184Z)
// console.log(myDate.toISOString());
// //  to get the (Wed Sep 04 2024 12:14:46 GMT+0530 (India Standard Time))
// console.log(myDate.toString());
// //  to get the 4/9/2024
// console.log(myDate.toLocaleDateString('en-IN'));
// //  to get the 12
// console.log(myDate.getHours());
// // to get the Date and time both
// console.log(myDate.toLocaleString()); 


// Timestamp
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
console.log(newDate);
let sww=`${newDate.toDateString()} and the time ${newDate.getHours()}:${newDate.getMinutes()}`
console.log(sww);
