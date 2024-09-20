// static is a property or keyword to keep the method un accessable

class User{
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }
    // "static" keyword  is used to keep the method unaccessabled to any class
    static createId(){
        console.log(`123${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,  password){
        super(username)
        this.email =email;
        this.password = password;
    }
    callMe(){
        console.log(`this is ${this.email} and ${this.password} of ${this.username} `)
    }
}

const chai = new Teacher("chai ", "chai@121", "789");

chai.createId()
// tea.logMe()

const hitesh = new User("hitesh")
hitesh.createId();