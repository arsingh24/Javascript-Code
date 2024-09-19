// // Promise is a object that return the states i.e pending , fullfilled , failed in asynchronous operations.
// //  And is written in different ways

// // 1st way
// const promiseOne = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Promise 1 Executed");
//         resolve();
//     },1000)
// })
// //    to call the resolve()
// promiseOne.then(function(){
//     console.log("Promise 1 Fullfilled");
    
// })

// // 2nd way directly calling the resolve and creating the promise 
// new Promise (function(resolve ,reject){
//     setTimeout(function(){
//         console.log("Direct Promise executed");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Direct resolve printed")
// })

// // inserting data in resolve and accessing it
// const promiseThree= new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({userName:"Abhisek", eml: "agr@hdir"})
//     },1000)
// }).then(function(user){
//     console.log(user);
    
// })

// // reject and resolve together accessing
// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error){
//             resolve({userName:"Abhi", Add:"PAtna"})
//         }
//         else {
//             reject("Error is found")
//         }
//     },1000)
// }).then(function(user){
//     console.log(user);
//     return user.userName;
// }).then((userN)=>{
//     console.log(userN)
// })
// .catch(function(err){
//     console.log(err)
// })
// .finally(()=>{
//     console.log("The promise id either resolved or rejected")
// })

// // array in promise
// const promiseArr = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve([1,2,3,45,55])
//     },1000)
// }).then((arr)=>{
//     console.log(arr)
// })

//  async await can be used in place of then catch 
// const promiseFive = new Promise(function(resolve , reject){
//         setTimeout(function(){
//             let error = true;
//             if (!error){
//                 resolve({userName:"javaScript", srtCut:"js"})
//             }
//             else {
//                 reject("ERROR!: 403")
//             }
//         },1000)
// })

// using async await
// async function consumePromiseFive() {
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(err){
//         console.log(err);
        
//     }
// }
// consumePromiseFive();

// calling api data uisng async await
async function getAllUsers (){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const res = await(response.json());
        console.log(res);
    }
    catch(err){
        console.log(err );  
    }
}
getAllUsers();

console.log("=========================================")

// using of fetch
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return response = res.json();
}).then((response)=>{
    console.log(response)
}).catch((err)=> console.log(`errorss`)
)