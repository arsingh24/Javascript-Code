// ===================this. or this==================


// this. method is used in only object 

//  const user ={
//     userName: "Abhishek",
//     price: 999,

// function can be declared as this:-
//     welcomeMessage: function(){
//         console.log(`${this.userName},welcomes you`)

        // it will return the whole entries of the object
//         console.log(this);
//     }
//  }

// const user ={
//     userName: "Abhishek",
//     price: 999,


// function can be declared as this:-
//    welcomeMessage(){
//         console.log(`${this.userName},welcomes you`)
//         // console.log(this);
//     }
//  }
//  user.welcomeMessage();
//  user.userName = "Babuaan";
//  user.welcomeMessage();


// it will return only{}
// console.log(this)


// // this method will return only uselss outcome
// function chai(){
//     let userName ="abhishek"
//     console.log(this);
    
// }

// this method will return only uselss outcome
// const chai=function (){
//     let userName ="abhishek"
//     console.log(this);
    
// }

// const chai=()=>{
//     let userName ="abhishek"
//     console.log(this);
    
// }
// chai();

// ===========================Arrow function or ()=>{
//                              }===============================


// different ways to write arrow function:-

// Way no 1 (here we have to write the { } after the => to write the working of the function with return keyword)
//  const addTwo = (num1, num2) => {
//         return num1 + num2
//      }

// Way no 2   No need to write { } and just write the working of the function after => without return
// const addTwo = (num1, num2) => num1 + num2
// Way no 3    No need to write { } and just write the working of the function after => without return keyword in the ( )
// const addTwo = (num1, num2) => (num1 + num2 )

// console.log(addTwo (3, 4))

// we have to write function this way for accessing the object or returning the object
const addTwo = (num1, num2) => ({username: "hitesh"})