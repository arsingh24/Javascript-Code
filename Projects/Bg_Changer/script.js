const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0 ;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]; 
    }
    return color;
};

let intervalId;
const start = function(){
    if (!intervalId){
    intervalId=setInterval(() => {
    document.body.style.backgroundColor = randomColor();
}, 1000);
}
}

const stop = function(){
    clearInterval(intervalId)
    intervalId=null;
}
document.querySelector('#start').addEventListener('click',start) 
document.querySelector('#stop').addEventListener('click',stop)