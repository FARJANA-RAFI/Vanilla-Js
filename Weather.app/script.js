//we are gonna request for the data from the api by submitting the form which has location.
const apikey = "00cba75df3867d443d34ab84f69f5381";

//declaring element.
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");


const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event)=>{
    event.preventDefault(); //to get rid of re-fresh for each submission.
    const cityValue = cityInputEl.value; // triggering the value of input
    getWeatherData(cityValue);
});

//generating a function to get the data from api based on cityValue.we are gonna use "try and catch" method for fetching data from the api. so, we are gonna ask for the data. if the request is correct, we will get the data, if it's not then there must be error in the method of request.
//await for waiting for the response.
//as we are using await we cannot use normal function. we need to use async function.
//async function has some delay in some lines using await.
//metric gonna give us centigrade instead of fahrenheit.
//200 means response is ok. 404 means an error exists.
async function getWeatherData(cityValue){
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)

        if(!response.ok){
            throw new Error("Network response was not okay")
        }

        //for useable data we pass response from api as jason. we need to wait until this response converted into jason.
        const data = await response.json();

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed:${data.wind.speed} m/s`
        ];

        //we are gonna target the id or class to replace the data from api with it's default information.` ` is used for dynamic changes.
        //text-content targeting the text of specific class of element
        //inner-html targeting the specific element's content for changes or to get or to set.
        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataEl.querySelector(".description").textContent = `${description}`;
        weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
    //try clear search used in todo list
    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = " ";
        weatherDataEl.querySelector(".temperature").textContent = " ";
        weatherDataEl.querySelector(".description").textContent = " An Error has happened. Please try later.";
        weatherDataEl.querySelector(".details").innerHTML = " ";
    }
    cityInputEl.value = ' '; //after submitting once, location bar will be empty again.
}

//save data
//show data
