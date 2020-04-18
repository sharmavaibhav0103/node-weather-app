
var l = document.querySelector("#location");
var m = document.querySelector('.location_data');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('');
    let url = '/weather?address='+ l.value;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let {name, region, country } = data.address.location;
            let {temperature, humidity } = data.address.current;
            m.children[0].textContent = name + ',' + region + ',' + country;
            m.children[1].textContent = `Temperature:   ${temperature}°C`;
            m.children[2].textContent = "Humidity:   " + humidity;
        })
})