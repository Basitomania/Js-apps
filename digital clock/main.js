// setInterval(function(){
//     let currentTime = new Date();
//     let hours = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     let seconds = currentTime.getSeconds();
//     let period = "AM";

//     if(hours >= 12){
//         period = "PM";
//     }
//     if(hours > 12){
//         hours-=12;
//     }
//     if(seconds < 10){
//         seconds = "0" + seconds;
//     }
//     if(minutes < 10){
//         minutes = "0" + minutes;
//     }

//     const clockTime = `${hours}:${minutes}:${seconds} ${period}`
//     const clock = document.getElementById("clock");
//     clock.innerText = clockTime;
// })
// es6 with arrow function declaration
setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = "AM";

    if(hours >= 12){
        period = "PM";
    }
    if(hours > 12){
        hours-=12;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    const clockTime = `${hours}:${minutes}:${seconds} ${period}`
    const clock = document.getElementById("clock");
    clock.innerText = clockTime;
})