const myNums = [1,2,3,4,5,6,7,8,9,10];
// // using map() returns new array 
// const newNums = myNums.map((num)=>{ return num+10});

// // we can solve the above prblm using foreach() also
// const newNums = [];
// myNums.forEach((num)=>{
//     const n= num +10;
//     newNums.push(n);
// })
const newNums= myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=> num>=40)
console.log(newNums);
