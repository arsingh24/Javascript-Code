// using class for giving different methods
class User{
    constructor (username , email , password){
        this.username =username;
        this.email =email;
        this.password =password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gamil", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// performing the same task of class in function
const Users = function(username, email, password){
    this.username =username;
    this.email =email;
    this.password =password;
}

Users.prototype.encryptPassword = function(){
return `${this.password}abc`
}

Users.prototype.changeUsername = function(){
return `${this.username.toUpperCase()}`
}

const tea = new Users("tea","tea@gamil", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

