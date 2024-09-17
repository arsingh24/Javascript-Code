function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power =2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// "this" keyword is used for yeh wala (it denotes that used this one )
function createUser(userName , score){
    this.userName = userName;
    this. score = score;
}

createUser.prototype.increment =  function(){
    this.score++
}

createUser.prototype.printMe =  function(){
    console.log(`price of ${this.userName} = ${this.score}`);
    
}

const chai = new createUser("chai",10);
const tea = createUser("chai",30);

chai.increment()
chai.printMe()