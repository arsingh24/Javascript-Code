function optGenerator(){
    const otp = Math.floor(1000+Math.random()*8000)
    console.log(otp)
}

console.log(optGenerator())