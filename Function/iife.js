// Immediately Invoked Function Expressions(IIFE)
// it immediately implement the code to run and return the result

function chai(){
    console.log(`DB Connected`);
    
}
chai();

(function chai(){
    console.log(`DB Connected two`);
    
})();

( (name)=>{
    console.log(`Db Connected three ,${name}`);
    
})(`Abhishek`)
