function updateTime() {
    fetch("/country.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.countries);
            rsp.countries.forEach(element => {
                let name = element.name;
                let offset = element.timezone_offset;
                // console.log(name , offset);
                // console.log(typeof(name));
            });
        })


}
updateTime();