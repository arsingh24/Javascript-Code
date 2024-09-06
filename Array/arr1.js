// let arr = [1,88,56,87,35]
// let heros =["THOR","IronMan","CaptainAmerica","Hulk","Dr.Strange"]
// let mix = [1, "thor"]

            // push pop shift unshift
// // it inserts the item at the end of the array
// arr.push(11110)  
// // it inserts the item at the starting of the array
// arr.unshift(-1)
// // it delete the item from the end of the array
// arr.pop()
// // it delete the item from the starting of the array
// arr.shift()
// console.log(arr)

// // it returns that the item is in the array or not
// console.log(arr.includes(35))

// console.log(arr.indexOf(22))

// // it converts the array numberical into string format
// const arr1= arr.join()
// console.log(arr1)
// console.log(typeof arr1)
// console.log(typeof arr)

            // join 
// // to print the result without [] eg-1,88,56,87,35
// console.log(heros.join())
// // to print the result without , eg-188568735
// console.log(arr.join(''))
// // to print the result with space btw   1 88 56 87 35
// console.log(arr.join(' '))
// // to print the result with - btw 1-88-56-87-35
// console.log(arr.join('-'))


            // Slice , splice

// console.log("A",heros.join())
// // slice is used to trim the items from given (start,end)
// const my1 = heros.slice(1,3)
// console.log(my1.join())
// // slice doesnot trims the array in real (the original array the same)
// console.log("B",heros.join())
// // splice is used to trim the items from given (start,end)
// const my2 = heros.splice(1,3)
// console.log(my2.join())
// // splice trims the parts from the main array as it takes array as a reference
// console.log("C",heros.join())


// +++++++++++++++++++++++++++++++++++Part-2+++++++++++++++++++++++++++++++++++++

// let marvel_heros =["THOR","IronMan","CaptainAmerica"]
// let dc_heros = ["Superman","Flash","Batman"]

// console.log(marvel_heros.concat(dc_heros.join(' ')))

// const endGame=[...marvel_heros,...dc_heros]
// console.log(endGame)


// const irm=[1,4,5,[3,7],5,6,[45,65,[3,5,6]],6]
// console.log(irm.flat(4));

// console.log(Array.from("ABhishek"))
// console.log(Array.from({name: "Abhishek"}))

const arr=[1,2,3,4];
const b =[...arr];
b.push(5);
// result wil be [1,2,3,4] becoz spread fn copy the data only
console.log(arr);
// here it will be [1,2,3,4,5]
console.log(b);