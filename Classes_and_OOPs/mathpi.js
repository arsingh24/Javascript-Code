const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);

const chai = {
    name: "bayLeaf chai",
    price : 23,
    isAvailable : "true",

    orderChai: function(){
        console.log("Chai pio");
        
    }
   
}

// console.log(chai.orderChai(),chai)

Object.defineProperty(chai ,"price",{
    writable:true,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai , "price"))