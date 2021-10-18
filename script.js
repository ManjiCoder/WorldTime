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

// Default Local Time To Show User
let myLocalTime = setInterval(defaultTime, 1000);
function defaultTime() {
    // let date = new Date((new Date().getTime() + 10 * 60000))
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let hrs = hr;
    let mins = min;
    let Lhrs = hrs;
    let Lmins = mins;
    // console.log(Lhrs);
    // console.log(Lmins);
    let secs = date.getSeconds()
    // console.log(Lampm);
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
    hrMin.innerText = displayTime;
    sec.innerText = secs;
    local.innerText = date.toDateString()
    // local.innerText = date.toDateString()
    // local.innerText = date
    // console.log(hrMin);
    // console.log(sec);
    // console.log(local);
    // console.log(hrs);
    // console.log(hr);
}

// Event listener is below
let userInput = document.getElementById('userInput');
btn.addEventListener('click', function startClock() {

    let userTime = userInput.value;
    countryName.innerText = userTime; // to display country name
    // console.log(countryName);
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
        // console.log(sign);
        // console.log(uphrs);
        // console.log(upmins);

        // UTC Time To Show User
        function utctime() {
            let showTimeD = document.getElementById('showTimeD')
            // India Time Zone
            let d = new Date()
            let Lhr = d.getHours()
            let Lmin = d.getMinutes()
            // console.log(Lhr, Lmin);
            // User Entered Time Zone
            let utcdate = new Date()
            let hr = utcdate.getUTCHours()
            let min = utcdate.getUTCMinutes()
            let secs = utcdate.getUTCSeconds()
            let hrs = hr;
            let mins = min;

            let Uhrs = hr;
            let Umins = min;
            // console.log(Uhrs);
            // console.log(Umins);

            // IF Statement for + or -
            if (sign === '+') {
                utcdate.setHours(utcdate.getHours() + uphrs);
                utcdate.setMinutes(utcdate.getMinutes() + upmins);
            }
            else if (sign === '-') {
                utcdate.setHours(utcdate.getHours() + uphrs);
                utcdate.setMinutes(utcdate.getMinutes() + upmins);
            }
            // IF statement for hrs in AM or PM
            if (hrs <= 11) {
                hrs = 12 - (-hrs);
                Uampm = Uampm.innerText = "AM";
            }
            if (hrs == 12) {
                hrs = 12 - (-hrs);
                Uampm = Uampm.innerText = "PM";
            }
            if (hrs == 24) {
                hrs = hrs;
                Uampm = Uampm.innerText = "AM";
            }
            if (hrs >= 13 | hrs <= 23) {
                hrs = hrs - 12;
                Uampm = Uampm.innerText = "PM";
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
            UhrMin.innerText = displayTime;
            Usec.innerText = secs;
            let getstr = utc.innerHTML = utcdate.toUTCString();
            // console.log(getstr);
            // showDiff.innerText = date - utcdates;
            // console.log(showDiff);
            // console.log(UhrMin.innerText);
            // console.log(Usec.innerText);
            // console.log(utc);
            let showTimeH = Uhrs - Lhr + " hr";
            let showTimeM = Umins - Lmin + " mins"
            // console.log(showTimeH);
            // console.log(showTimeM);
            showTimeD.innerText = showTimeH + '' + showTimeM;
            // console.log(showTimeD);
            // console.log(hrs);
            // console.log(hr);
        }
        let userEnterTime = setInterval(utctime, 1000)

    }
    // console.log('submit btn is click');
})

let countriesNames = [
    'Afghanistan UTC+04:30'
    , 'Albania UTC+02:00'
    , 'Algeria UTC+02:00'
    , 'American Samoa UTC-11:00'
    , 'Angola UTC+01:00'
    , 'Anguilla UTC-04:00'
    , 'Antartica UTC+00:00'
    , 'Antigua and Barbuda UTC-04:00'
    , 'Argentina UTC-03:00'
    , 'Armenia UTC+04:00'
    , 'Aruba UTC-04:00'
    , 'Ashmore and Cartier Island UTC+10:00'
    , 'Australia UTC+10:00'
    , 'Austria UTC+01:00'
    , 'Azerbaijan UTC+04:00'
    , 'Bahamas UTC-05:00'
    , 'Bahrain UTC+03:00'
    , 'Bangladesh UTC+06:00'
    , 'Barbados UTC-04:00'
    , 'Belarus UTC+03:00'
    , 'Belgium UTC+01:00'
    , 'Belize UTC-06:00'
    , 'Benin UTC+01:00'
    , 'Bermuda UTC-04:00'
    , 'Bhutan UTC+06:00'
    , 'Bolivia UTC+04:00'
    , 'Bosnia and Herzegovina UTC+01:00'
    , 'Botswana UTC+02:00'
    , 'Brazil UTC-05:00'
    , 'British Virgin Islands UTC-04:00'
    , 'Brunei UTC+08:00'
    , 'Bulgaria UTC+02:00'
    , 'Burkina Faso UTC+00:00'
    , 'Burma UTC+06:30'
    , 'Burundi UTC+02:00'
    , 'Cambodia UTC+07:00'
    , 'Cameroon UTC+01:00'
    , 'Canada UTC-06:00'
    , 'Cape Verde UTC-01:00'
    , 'Cayman Islands UTC-05:00'
    , 'Central African Republic UTC+01:00'
    , 'Chad UTC+01:00'
    , 'Chile UTC-03:00'
    , 'China UTC+08:00'
    , 'Christmas Island UTC+07:00'
    , 'Clipperton Island UTC-08:00'
    , 'Cocos (Keeling) Islands UTC+06:30'
    , 'Colombia UTC-05:00'
    , 'Comoros UTC+03:00'
    , 'Congo, Democratic Republic of the UTC+01:00'
    , 'Cook Islands UTC-10:00'
    , 'Costa Rica UTC-06:00'
    , "Cote d UTC+'Ivoire UTC+00:00"
    , 'Croatia UTC+01:00'
    , 'Cyprus UTC+02:00'
    , 'Czech Republic UTC+01:00'
    , 'Denmark UTC+01:00'
    , 'Djibouti UTC+03:00'
    , 'Dominica UTC-04:00'
    , 'Dominican Republic UTC-04:00'
    , 'Ecuador UTC-05:00'
    , 'Egypt UTC+02:00'
    , 'El Salvador UTC-06:00'
    , 'Equatorial Guinea UTC+01:00'
    , 'Eritrea UTC+03:00'
    , 'Estonia UTC+02:00'
    , 'Ethiopia UTC+03:00'
    , 'Europa Island UTC+03:00'
    , 'Falkland Islands (Islas Malvinas) UTC-03:00'
    , 'Faroe Islands UTC+00:00'
    , 'Fiji UTC+12:00'
    , 'Finland UTC+02:00'
    , 'France UTC+01:00'
    , 'French Guiana UTC-03:00'
    , 'French Polynesia UTC-10:00'
    , 'French Southern and Antarctic Lands UTC+03:00'
    , 'Gabon UTC+01:00'
    , 'Gambia, The UTC+00:00'
    , 'Gaza Strip UTC+03:00'
    , 'Georgia UTC+04:00'
    , 'Germany UTC+01:00'
    , 'Ghana UTC+00:00'
    , 'Gibraltar UTC+01:00'
    , 'Glorioso Islands UTC+04:00'
    , 'Greece UTC+02:00'
    , 'Greenland UTC-03:00'
    , 'Grenada UTC-04:00'
    , 'Guadeloupe UTC-04:00'
    , 'Guam UTC+10:00'
    , 'Guatemala UTC-06:00'
    , 'Guernsey UTC+00:00'
    , 'Guinea UTC+00:00'
    , 'Guinea-Bissau UTC+00:00'
    , 'Guyana UTC-04:00'
    , 'Haiti UTC-05:00'
    , 'Heard Island and McDonald Islands UTC+05:00'
    , 'Holy See (Vatican City) UTC+01:00'
    , 'Honduras UTC-06:00'
    , 'Hong Kong UTC+08:00'
    , 'Howland Island UTC-12:00'
    , 'Hungary UTC+01:00'
    , 'Iceland UTC+00:00'
    , 'India UTC+05:30'
    , 'Indonesia UTC+07:00'
    , 'Iran UTC+03:30'
    , 'Iraq UTC+03:00'
    , 'Ireland UTC+00:00'
    , 'Ireland, Northern UTC+00:00'
    , 'Israel UTC+02:00'
    , 'Italy UTC+01:00'
    , 'Jamaica UTC+-05:00'
    , 'Jan Mayen UTC+01:00'
    , 'Japan UTC+09:00'
    , 'Jarvis Island UTC-11:00'
    , 'Jersey UTC+00:00'
    , 'Johnston Atoll UTC-10:00'
    , 'Jordan UTC+02:00'
    , 'Juan de Nova Island UTC+03:00'
    , 'Kazakhstan UTC+05:00'
    , 'Kenya UTC+03:00'
    , 'Kiribati UTC+12:00'
    , 'Korea, North UTC+08:30'
    , 'Korea, South UTC+09:00'
    , 'Kuwait UTC+03:00'
    , 'Kyrgyzstan UTC+06:00'
    , 'Laos UTC+07:00'
    , 'Latvia UTC+02:00'
    , 'Lebanon UTC+02:00'
    , 'Lesotho UTC+02:00'
    , 'Liberia UTC+00:00'
    , 'Libya UTC+01:00'
    , 'Liechtenstein UTC+01:00'
    , 'Lithuania UTC+02:00'
    , 'Luxembourg UTC+01:00'
    , 'Macau UTC+08:00'
    , 'Macedonia, Former Yugoslav Republic of UTC+01:00'
    , 'Madagascar UTC+03:00'
    , 'Malawi UTC+02:00'
    , 'Malaysia UTC+08:00'
    , 'Maldives UTC+05:00'
    , 'Mali UTC+00:00'
    , 'Malta UTC+00:00'
    , 'Man, Isle of UTC+00:00'
    , 'Marshall Islands UTC+12:00'
    , 'Martinique UTC-04:00'
    , 'Mauritania UTC+00:00'
    , 'Mauritius UTC+04:00'
    , 'Mayotte UTC+03:00'
    , 'Mexico UTC-06:00'
    , 'Micronesia, Federated States of UTC+10:00'
    , 'Midway Islands UTC+11:00'
    , 'Moldova UTC+02:00'
    , 'Monaco UTC+01:00'
    , 'Mongolia UTC+08:00'
    , 'Montserrat UTC-04:00'
    , 'Morocco UTC+00:00'
    , 'Mozambique UTC+02:00'
    , 'Namibia UTC+01:00'
    , 'Nauru UTC+12:00'
    , 'Nepal UTC+05:45'
    , 'Netherlands UTC+01:00'
    , 'Netherlands Antilles UTC-04:00'
    , 'New Zealand UTC+12:00'
    , 'Nicaragua UTC-06:00'
    , 'Niger UTC+01:00'
    , 'Nigeria UTC+01:00'
    , 'Niue UTC-11:00'
    , 'Norfolk Island UTC+11:30'
    , 'Northern Mariana Islands UTC+10:00'
    , 'Norway UTC+01:00'
    , 'Oman UTC+04:00'
    , 'Pakistan UTC+05:00'
    , 'Palau UTC+09:00'
    , 'Panama UTC+'
    , 'Papua New Guinea UTC-05:00'
    , 'Paraguay UTC-04:00'
    , 'Peru UTC-05:00'
    , 'Philippines UTC+08:00'
    , 'Pitcaim Islands UTC-08:00'
    , 'Poland UTC+01:00'
    , 'Portugal UTC+00:00'
    , 'Puerto Rico UTC-04:00'
    , 'Qatar UTC+03:00'
    , 'Reunion UTC+04:00'
    , 'Romainia UTC+02:00'
    , 'Russia UTC+01:00'
    , 'Rwanda UTC+02:00'
    , 'Saint Helena UTC+00:00'
    , 'Saint Kitts and Nevis UTC-04:00'
    , 'Saint Lucia UTC-04:00'
    , 'Saint Pierre and Miquelon UTC-03:00'
    , 'Saint Vincent and the Grenadines UTC-04:00'
    , 'Samoa UTC+13:00'
    , 'San Marino UTC+01:00'
    , 'Sao Tome and Principe UTC+00:00'
    , 'Saudi Arabia UTC+03:00'
    , 'Scotland UTC+00:00'
    , 'Senegal UTC+00:00'
    , 'Seychelles UTC+04:00'
    , 'Sierra Leone UTC+00:00'
    , 'Singapore UTC+08:00'
    , 'Slovakia UTC+01:00'
    , 'Slovenia UTC+01:00'
    , 'Solomon Islands UTC+11:00'
    , 'Somalia UTC+03:00'
    , 'South Africa UTC+02:00'
    , 'South Georgia and South Sandwich Islands UTC-02:00'
    , 'Spain UTC+01:00'
    , 'Sri Lanka UTC+05:30'
    , 'Sudan UTC+03:00'
    , 'Suriname UTC-03:00'
    , 'Svalbard UTC+01:00'
    , 'Swaziland UTC+02:00'
    , 'Sweden UTC+01:00'
    , 'Switzerland UTC+01:00'
    , 'Syria UTC+02:00'
    , 'Taiwan UTC+08:00'
    , 'Tajikistan UTC+05:00'
    , 'Tanzania UTC+03:00'
    , 'Thailand UTC+07:00'
    , 'Tobago UTC-04:00'
    , 'Togo UTC+00:00'
    , 'Tokelau UTC+13:00'
    , 'Tonga UTC+13:00'
    , 'Trinidad UTC+13:00'
    , 'Tunisia UTC+01:00'
    , 'Turkey UTC+02:00'
    , 'Turkmenistan UTC+05:00'
    , 'Tuvalu UTC+12:00'
    , 'Uganda UTC+03:00'
    , 'Ukraine UTC+02:00'
    , 'United Arab Emirates UTC+04:00'
    , 'United Kingdom UTC+00:00'
    , 'Uruguay UTC-03:00'
    , 'USA UTC+00:00'
    , 'Uzbekistan UTC-03:00'
    , 'Vanuatu UTC+11:00'
    , 'Venezuela UTC-04:30'
    , 'Vietnam UTC+07:00'
    , 'Virgin Islands UTC-04:00'
    , 'Wales UTC+10:00'
    , 'Wallis and Futuna UTC+12:00'
    , 'West Bank UTC+03:00'
    , 'Western Sahara UTC+01:00'
    , 'Yemen UTC+03:00'
    , 'Zambia UTC+01:00'
    , 'Zimbabwe UTC+02:00'

]
// console.log(countriesNames);

let app = document.querySelector('#dlist');
// console.log(app);

// let langs = ['TypeScript','HTML','CSS'];

let nodes = countriesNames.map(lang => {
    let option = document.createElement('option');
    // console.log(option);
    option.textContent = lang;
    // option.text = '';
    // option.value = lang;
    // option.appendChild(option)
    return option;
});

app.append(...nodes);