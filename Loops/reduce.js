const myNums=[1,2,3]

// const total=myNums.reduce(function(acc,curVal){
//     console.log(`acc:${acc} and curr ${curVal}`);
    
//     return acc+curVal

// },0)

const total=myNums.reduce((acc,curVal)=>acc+curVal,0)
// console.log(total);

const shopping =[
    {
        course: "js",
        price: 2999
    },
    {
        course: "py",
        price: 1099
    },
    {
        course: "css",
        price: 3999
    },
    {
        course: "cpp",
        price: 5999
    },
]
const price=shopping.reduce((acc,item)=>acc+item.price,0)
console.log(price);
