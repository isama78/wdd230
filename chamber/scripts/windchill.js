const temp = document.querySelector('.temp')
const wind = document.querySelector('.wind')
const image = document.querySelector('#weather-img')
const windchillTag = document.querySelector('.windchill')
const captionDesc = document.querySelector('figcaption')
const forecast = document.querySelector('.forecast')
const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-31.3990547&lon=-64.3590261&units=imperial&appid=cd2e98536f0eda82aa2f8d45270fc084'
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-31.3990547&lon=-64.3590261&units=imperial&appid=cd2e98536f0eda82aa2f8d45270fc084'

const apiFetch = async (url, displayData) => {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            displayData(data)
        } else {
            throw new Error(response.statusText)
        }
    } catch (error) {
        console.log(error)
    }
}

const displayResults = (data) => {
    temp.innerHTML = `${data.main.temp.toFixed(0)}&deg;`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const description = capitalizeStrings(data.weather[0].description)
    image.setAttribute('src', iconsrc)
    image.setAttribute('alt', 'weather icon')
    wind.innerHTML = data.wind.speed
    captionDesc.innerHTML = description
    let windchill = 35.74 + 0.6215 * data.main.temp - 35.75 * data.wind.speed ** 0.16 + 0.4275 * data.main.temp * data.wind.speed ** 0.16
    windchillTag.textContent += `${windchill.toFixed(2)} F°`
}

const displayForecastResults = (data) => {
    for (element in data.list) {
        if(element % 8 !== 0) continue
        if(element > 16) continue
        let section = document.createElement('section')
        let image = document.createElement('img')
        let date = document.createElement('p')
        date.innerText = data.list[element].dt_txt.substring(0,10)
        const iconsrc = `https://openweathermap.org/img/wn/${data.list[element].weather[0].icon}@2x.png`
        image.setAttribute('src', iconsrc)
        image.setAttribute('alt', 'weather')
        section.append(image, date)
        forecast.append(section)
    }
}

const capitalizeStrings = string => {
    let arrString = string.split(" ")
    for (var i = 0; i < arrString.length; i++) {
        arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
    }
    string = arrString.join(" ")
    return string
}

apiFetch(currentWeatherUrl, displayResults)
apiFetch(forecastUrl, displayForecastResults)