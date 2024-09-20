// prototype is used to create own methods to used it

let name = "Abhishek";

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

name.trueLenght()

"chai aur code        ".trueLenght()


String.prototype.trueLenght = function(){
    return `${this.trim().length} true`
}
console.log(name.trueLenght())