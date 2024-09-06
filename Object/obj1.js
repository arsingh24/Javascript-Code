
// const mySum = Symbol()
// const JsUser = {
//     name : "abhishek",
//     age : 24,
//     // symbol should be written in this format only in obj
//     [mySum]: "keyyy1",
//     location: "Patna",
//     email: "arsingh4994@gmail.com",
//     isLoggedIn: false,
//     Today : Date(),
// }

// JsUser.location="Dehradun"
// two ways to access Object entity
// // 1st way
// console.log(JsUser.name)
// // 2nd Way
// console.log(JsUser["location"])

// to keep the data unchanged use Object.freeze ()
// Object.freeze (JsUser)
// console.log(JsUser.age ="30",JsUser )

// JsUser.greeting = function(){
//     console.log(("hello hii choro jai shri Ram bolo").toUpperCase())
// }
// console.log(JsUser.greeting)
// console.log(JsUser.greeting())


// +++++++++++++++----------------Part-2------++++++++++++++++++++++++++++++++++++++++++++++++++

// const tinderUser = new Object()

// tinderUser.name = "Kyu btye"
// tinderUser.age = 24
// console.log(tinderUser);


// const obj1 = {

// nested object is possible 
//     userName:{
//         fullName:{
//             firstName: "Abhishek",
//             lastName: "Singh"
//         }
//     },
//    isComingToday: true ,
//    today : Date(), 

// }
// by using . can access the nested object
// console.log(obj1.userName.fullName);


// const t1={a:1 , b:2}
// const t2={c:3, d:4}

// const t3= {t1,t2}
// console.log(t3)
// const t4= Object.assign(t1,t2);
// console.log(t4);
// const mera=Object.assign({},t1,t2,t4);
// console.log(mera);

// const t5= {...t1,...t2}
// console.log(t5)
// // to knows the keys of the object
// console.log(Object.keys());
// // to know the values of object
// console.log(Object.values());
// // to know all the entries
// console.log(Object.entries());
// // to know that this property i available or not
// console.log(tinderUser.hasOwnProperty('name'))


//  const users= [
//    {
//         id: 1,
//         email: "ar@gmail.com",
//     },
//     {
//         id: 1,
//         email: "ar@gmail.com",
//     },
//     {
//         id: 1,
//         email: "ar@gmail.com",
//     }

//  ]
//  console.log(users)

// Destruction
//  const course={
//     courseName : "javascript",
//     source : "Youtube",
//     courseInstructor : "Hitesh",

// }
// // console.log(course.courseInstructor)
// by this method we can destructed the object
// const {courseInstructor: cI} = course ;
// console.log(cI);
