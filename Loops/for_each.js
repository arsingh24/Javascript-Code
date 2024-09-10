
// foreach () perform the task of function in the same array without creating new array
const coding =["js", "ruby","cpp","c"]

// coding.forEach( function (item)
//     {
//      console.log(item);    
// })

// coding.forEach( (item)=>
//     {
//      console.log(item);    
// })

// function printArr (item)
// {
//     console.log(item);    
// }
// coding.forEach(printArr)


//by this we can access the item index and the whole array 
// coding.forEach((item, index, arr)=>{
//     console.log(item , index, arr)
// })


const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js" 
    },

    {
        languageName: "C++",
        languageFileName: "cpp" 
    },

    {
        languageName: "java",
        languageFileName: "java" 
    }
]
    
myCoding.forEach((item)=>{
     console.log(item.languageFileName )
})
