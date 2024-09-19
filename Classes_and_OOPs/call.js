// call is used to get the access of the entry from the another function 

function  SetUsername (username){
    this.username = username
}

function createUser(username,email, password){
    // ".call" is useed to get the call from the another function into the new func and "this " is used here to tell that this "this" is used to give the reference here
    SetUsername.call(this, username)
    this.email =email
    this.password = password

}

const chai = new createUser("abhi","ad@gmail","124")
console.log(chai)


