
const apiKey="11f03417c3dad3a9e02dde068dd16925";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weathericon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    var data = await response.json();
    
    if(response.status== 404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
    }
    else{
     document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "Km/hr";

    if(data.weather[0].main=='Clouds'){
        weathericon.src= "images/clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
        weathericon.src= "images/clear.png";
    }
    else if(data.weather[0].main=='Rain'){
        weathericon.src= "images/rain.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        weathericon.src= "images/drizzle.png";
    }
    else if(data.weather[0].main=='Mist'){
        weathericon.src= "images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
