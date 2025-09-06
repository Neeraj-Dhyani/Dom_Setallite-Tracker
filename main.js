let log = document.querySelector("#logitude");
let lat = document.querySelector("#latitude");
let latitude = 0;
let longitude = 0;

const map = L.map('ISS_map').setView([latitude, longitude], 3);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
let ISSicon =  L.icon({
iconUrl: './icon/International_Space_Station.svg',
iconSize: [50, 95],
iconAnchor: [22, 94],
});
tiles.addTo(map); 
let marker = L.marker([0, 0], {icon: ISSicon}).addTo(map);



async function getISI(){
    let data = await fetch("https://api.wheretheiss.at/v1/satellites/25544");

    let actual_data = await data.json();
    console.log(actual_data);
    latitude = actual_data.latitude;
    longitude = actual_data.longitude;
    marker.setLatLng([latitude, longitude]).addTo(map)
    log.textContent = longitude;
    lat.textContent = latitude;
}
setInterval(getISI, 1000);