// Variables Declaration
let hrMin = document.getElementById('hr_min')
let sec = document.getElementById('sec')
let UhrMin = document.getElementById('Shr_min')
let Usec = document.getElementById('Ssec')
let local = document.getElementById('local')
let utc = document.getElementById('utc')
let btn = document.getElementById('btn')
let reset = document.getElementById('reset')
let display = document.getElementById('showUserTime')
let showDiff = document.getElementById('showDiff')
let Lampm = document.getElementsByClassName('AM_PM')[0];
let Uampm = document.getElementsByClassName('AM_PM')[1];
let countryName = document.getElementById('countryName');
let singleClock = document.getElementById('clock')
let LocalTime;
// Default Local Time To Show User
function defaultTime() {
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let hrs = hr;
    let mins = min;
    let secs = date.getSeconds()
    // IF statement for hrs in AM or PM
    if (hrs <= 11) {
        hrs = 12 - (-hrs);
        Lampm = Lampm.innerText = "AM";
    }
    if (hrs == 12) {
        hrs = 12 - (-hrs);
        Lampm = Lampm.innerText = "PM";
    }
    if (hrs == 24) {
        hrs = hrs;
        Lampm = Lampm.innerText = "AM";
    }
    if (hrs >= 13 | hrs <= 23) {
        hrs = hrs - 12;
        Lampm = Lampm.innerText = "PM";
    }
    // IF statement for adding 0 to single digit
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
    LocalTime = parseFloat(hrs + '.' + mins)
    hrMin.innerText = displayTime;
    sec.innerText = secs;
    local.innerText = date.toDateString()
}

let myLocalTime = setInterval(defaultTime, 1000);

// Event listener is below
let userInput = document.getElementById('userInput');
btn.addEventListener('click', function startClock() {

    let userTime = userInput.value;
    countryName.innerText = userTime; // to display country name
    // console.log(userTime); // India UTC+05:30
    if (userTime === "") {
        alert('Select a country to see time')
    }
    else if (userTime !== '') {
        display.style.display = "flex";// This is to display clock
        singleClock.style.justifyContent = 'space-around'; // To center the first clock
        let getTime = userTime.substr(userTime.length - 6)
        // console.log(getTime); // +05:30

        let timeDiff = getTime;
        let sign = timeDiff.charAt(0);
        let uphrs = Number(timeDiff.substr(1, 2));
        let upmins = Number(timeDiff.substr(4, 5));

        // UTC Time To Show User
        function utctime() {
            let showTimeD = document.getElementById('showTimeD')

            // User Entered Time Zone
            let utcdate = new Date()
            let secs = utcdate.getUTCSeconds()


            // IF Statement for + or -
            if (sign === '+') {
                utcdate.setHours(utcdate.getHours() + uphrs);
                utcdate.setMinutes(utcdate.getMinutes() + upmins);
            }
            else if (sign === '-') {
                utcdate.setHours(utcdate.getHours() + uphrs);
                utcdate.setMinutes(utcdate.getMinutes() + upmins);
            }
            // getstr return Tue, 19 Oct 2021 15:42:10 GMT
            let getstr = utc.innerHTML = utcdate.toUTCString();
            // console.log(getstr);
            // TO get hrs & mins using getstr
            let getstr1 = getstr.substr(getstr.length - 12);
            let getUTC = getstr1.slice(0, 8)
            let gethrs = parseInt(getUTC.slice(0, 2))
            let getmins = parseInt(getUTC.slice(3, 6))

            // IF statement for hrs in AM or PM
            if (gethrs <= 11) {
                gethrs = 12 - (-gethrs);
                Uampm = Uampm.innerText = "AM";
            }
            if (gethrs == 12) {
                gethrs = 12 - (-gethrs);
                Uampm = Uampm.innerText = "PM";
            }
            if (gethrs == 24) {
                gethrs = gethrs;
                Uampm = Uampm.innerText = "AM";
            }
            if (gethrs >= 13 | gethrs <= 23) {
                gethrs = gethrs - 12;
                Uampm = Uampm.innerText = "PM";
            }
            // IF statement for adding 0 to single digit
            if (gethrs < 10) {
                gethrs = "0" + gethrs;
            }
            if (getmins < 10) {
                getmins = "0" + getmins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }

            let displayTime = (`${gethrs}:${getmins}:`);
            let UserTime = parseFloat(gethrs + '.' + getmins);
            let timeDifference = LocalTime - UserTime;
            timeDifference = timeDifference.toFixed(2)

            // If timeDifference return +
            if (Math.sign(timeDifference) === 1) {
                showTimeD.innerText = '-' + timeDifference + 'hrs Behind';
            }
            // timeDifference return -
            else {
                timeDifference = -(timeDifference)
                showTimeD.innerText = '+' + timeDifference + 'hrs Ahead';
            }
            UhrMin.innerText = displayTime;
            Usec.innerText = secs;
        }
        utctime()
        setInterval(utctime, 1000)
    }
})