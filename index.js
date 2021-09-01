let opts = document.getElementById('options');
let p = document.querySelector('p');
function updateTime() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                text = element.text;
                offset = element.offset;
                let arr = [ text ]
                // let arr = new Array(text)
                // p.innerHTML = text;
                // console.log(opts);
                // console.log(arr);
                // console.log(offset);
            });
        })
}

updateTime();