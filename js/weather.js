const API_KEY = "b488895086ab6836899616cc20e9e972";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in `, lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const iconContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather p");
            const weatherContainer = document.querySelector("#weather span:last-child");
            // if(data.weather[0].main === "Clouds") {
                // const weatherIcon = document.createElement(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M23 11.19A8.35 8.35 0 0 0 16.48 8a8.58 8.58 0 0 0-7.81 5.33C5 13.07 2 16.25 2 20.16A6.59 6.59 0 0 0 8.3 27a5.93 5.93 0 0 0 3.7-1.34 8.05 8.05 0 0 0 7.71.64 6.77 6.77 0 0 0 3 .7c4 0 7.26-3.55 7.26-7.91s-3.09-7.76-6.97-7.9zM22.74 25a4.74 4.74 0 0 1-2.45-.68 1 1 0 0 0-1 0 6.1 6.1 0 0 1-6.73-.7 1 1 0 0 0-1.35.09A4 4 0 0 1 8.3 25 4.6 4.6 0 0 1 4 20.16c0-3 2.41-5.34 5.1-4.76a1 1 0 0 0 1.15-.65A6.73 6.73 0 0 1 16.48 10a6.44 6.44 0 0 1 5.21 2.79 1 1 0 0 0 .86.41h.19c2.9 0 5.26 2.65 5.26 5.9S25.64 25 22.74 25z"/></svg>);
                // console.log(weatherIcon);
            // }
            const weather = `${data.main.temp}º · ${data.weather[0].main}`;
            const name = data.name;

            // iconContainer.innerHTML = weatherIcon;
            weatherContainer.innerText = name;
            cityContainer.innerText = weather;
        });
}


function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);