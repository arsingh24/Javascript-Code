// Getter Setter is a property in which it is used to set and get the property as we set


class User{
    constructor (email, password){
      this.email = email
      this.password = password
    
    }
    // use different name of entry to avoid cuios in get and set
         get email (){
            return this._email.toUpperCase()
    }
        set email(value){
        this._email =value
    }
         get password (){
            return this._password.toUpperCase()
    }
        set password(value){
        this._password =value
    }
}
const hitesh = new User("hitesh@21","422dw")
console.log(hitesh.email);
