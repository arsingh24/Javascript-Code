// object literals ===
// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function () {
//     //console.log("Got user details from database");
//     // console.log(`Username: ${this.username}`);
//     // console.log(this);
//     }
//     }
    // console.log(user.username)
    //console.log(user.getUserDetails());
    //console.log(this);


    // new keyword is the constructor 
    // const promiseOne = new Promise()
    // const date = new Date()


    function User (username , loginCount, signedIn){
        this.username = username;
        this.signedIn = signedIn;
        this.loginCount =  loginCount;

        // return this
    }

    //++ when "new" keyword is used a empty object is created and a instance is also ready
    // a obejct is created --> pass on of data  
    const user1 = new User("abhishek",23,"true");
    console.log(user1);
    
