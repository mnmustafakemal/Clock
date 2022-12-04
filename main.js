function setDate(){  //todo: I create a function
    let clock = new Date();
    let hours = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();
    let dateDOM = document.querySelector(".date");  //* dateDOM use date in index.html
    
    hours = (hours<10) ? "0" + hours : hours;  //todo:there are rules about hours, minute and second 
    minute = (minute<10) ? "0" + minute : minute;
    second = (second<10) ? "0" + second : second;
    dateDOM.innerHTML = `${hours}:${minute}:${second}`
}

setInterval(setDate, 1000);
setDate()