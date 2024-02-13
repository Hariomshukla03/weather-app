const apiKey = "3fcc7e6f2f3a49d8893134334240102";
let URl =
  "http://api.weatherapi.com/v1/current.json?key=3354a24d79854a4ca3c134744240102&q=countryNme&aqi=no";
let search = document.querySelector("#search");
let countryName = document.querySelector("#box h3");
let img = document.querySelector("#icn");
let temp = document.querySelector("#box h2");
let otherInfo = document.querySelector("#otherinfo");
search.addEventListener("input", () => {
  let input = search.value;
  URl = `http://api.weatherapi.com/v1/current.json?key=3354a24d79854a4ca3c134744240102&q=${input}&aqi=no`;
  getData(URl);
});
async function getData(URl) {
  let response = await fetch(URl);
  let data = await response.json();
  // console.log(data);
  country(data.location);
  dataValue(data.current);
}
function country(dl) {
  let locName = dl.name;
  let locRegion = dl.region;
  let locCty = dl.country;
  // console.log(locName,locRegion,locRegion)
  countryName.innerText = `${locName},${locRegion},${locCty}`;
}
function dataValue(dv) {
  otherInfo.innerHTML = "";
  // console.log(dv);
  let dvCon = dv.condition;
  let weatherImg = `https:${dvCon.icon}`;
  let weatherText = dvCon.text;
  img.src = weatherImg;
  let temp_c = dv.temp_c;
  temp.innerText = `${temp_c}°C`;
  let date = dv.last_updated;
  let humid = dv.humidity;
  let cloud = dv.cloud;
  let wind = dv.wind_kph;
  let newli = document.createElement("ul");
  newli.innerHTML = `<li>Date-${date}</li>
    <li>Humidity-${humid}</li>
    <li>Cloud-${cloud}</li>
    <li>Wind K/H-${wind}</li>
    <li>Condition-${weatherText}</li>`;
  otherInfo.appendChild(newli);
}
if(search.value==""){
  URl = `http://api.weatherapi.com/v1/current.json?key=3354a24d79854a4ca3c134744240102&q=mumbai&aqi=no`;
  getData(URl);
}
