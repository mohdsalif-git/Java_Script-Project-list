const apikey = "a7b364e5d21db231ad9f78034451fee4"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=Matric&q="

const searchbox = document.querySelector("#search-box");
const searchbtn = document.querySelector("#search-btn");
const weathericon = document.querySelector("#weatherimg")

async function weathercheck(city){

    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status  == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-box").style.display = "none";
    }
    else{
        var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".digree").innerHTML= data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + " KM/h";

    if(data.weather[0].main == "Mist"){
        weathericon.src = "/js projects/weather_app/weather-app-img/images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "/js projects/weather_app/weather-app-img/images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
         weathericon.src = "/js projects/weather_app/weather-app-img/images/snow.png"
    }
     else if(data.weather[0].main == "Clouds"){
         weathericon.src = "/js projects/weather_app/weather-app-img/images/clouds.png"
    }
     else if(data.weather[0].main == "Drizzle"){
         weathericon.src = "/js projects/weather_app/weather-app-img/images/drizzle.png"
    }

    document.querySelector(".weather-box").style.display = "block"

    }
    
}



searchbtn.addEventListener('click',()=>{
    
    weathercheck(searchbox.value);
    
});
