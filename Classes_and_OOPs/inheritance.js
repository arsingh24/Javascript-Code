// child class inherits the parent class properties and methods

class User{
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

// Here "Teacher class" extend the properties of "User class"
class Teacher extends User{
    constructor(username,email,  password){
        // "super keyword" extends the reference to class which is extended here
        super(username)
        this.email =email;
        this.password = password;
    }
    callMe(){
        console.log(`this is ${this.email} and ${this.password} of ${this.username} `)
    }
}

const chai = new Teacher("chai ", "chai@121", "789");
const tea = new User("chai ", "chai@121", "789");

chai.callMe()
tea.logMe()

console.log(chai instanceof User)