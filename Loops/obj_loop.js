// ============for in loop =======================
const myObj={
    js:"javascript",
    cpp:"c++",
    java:"java",
    html:"html"

}
// console.log(myObj);


for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}


// let arr=[1,2,3,45,6];

// for (const key in arr) {
//     console.log(key)
        
//   }
// it will return the index of the array