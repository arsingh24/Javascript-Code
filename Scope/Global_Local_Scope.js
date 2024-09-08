//  var c =4;
//  let b =3;
//  const a=1;

// local and block scope example
//  let a=300;
//  if(true){
//     let a = 10;
//     const b = 20
//     console.log("Inner",a);
//  }
//  console.log(a);


// child can access the parent properties 
// function one () {
//     const username = "Abhishek"
//     function two () {
//     const website = "youtube"
//     console.log(username);
//     }
//     two()
//     // but parent can access the child property
//     console.log(website);
// }
// one();



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
    const website = " youtube"
    console.log(username + website);
    }
    }


