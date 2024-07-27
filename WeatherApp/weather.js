let cityName = document.getElementById("CityName");
let city1 = document.getElementById("city");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");

async function fetchCityName(){
      let city = cityName.value;
      if(city == ""){
            alert("Enter A City Name");
      }
      else{
            let api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=802b50c77c7999d9a9746b0a840782f8`;
            let data = await fetch(api);
            let dt = await(data.json());
            // console.log(dt)
            city1.innerText = dt.name;
            temp.innerText ="Temp : "+((dt.name.temp)-273.15).toFixed(4)+"°C";
            humidity.innerText ="Humidity : "+ dt.name.humidity+"%";
            wind.innerText ="Wind speed : "+ dt.wind.speed+"km/hr";
      }
      cityName.value = "";
}