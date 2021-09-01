// let time = document.getElementById('showTime')
let hrMin = document.getElementById('hr_min')
let sec = document.getElementById('sec')
let h4 = document.querySelector('h4')

// Default Time To Show User
let myTime = setInterval(defaultTime, 1000);
function defaultTime() {
    let date = new Date()
    let hrs = date.getHours();
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    // if (hrs > 12) {
    //     hrs = hrs - 12;
    // }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    let displayTime = (`${hrs}:${mins}:`);
    hrMin.innerText = displayTime;
    sec.innerText = secs;
    h4.innerHTML = date;
}

function time() {
    let setTime = setInterval(UTCTime, 1000);
    let s = clearInterval(myTime);

    function UTCTime() {
        date = new Date()
        let d = date.toUTCString()
        hrs = date.getUTCHours();
        // hrs = hrs + 11;
        mins = date.getUTCMinutes()
        secs = date.getUTCSeconds()
        if (hrs < 10) {
            hrs = "0" + hrs;
        }
        if (mins < 10) {
            mins = "0" + mins;
        }
        if (secs < 10) {
            secs = "0" + secs;
        }
        let displayTime = (`${hrs}:${mins}:`);
        hrMin.innerText = displayTime;
        sec.innerText = secs;
        h4.innerHTML = d + " (UTC Time)";
    }
}