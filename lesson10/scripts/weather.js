// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.635&units=imperial&appid=cd2e98536f0eda82aa2f8d45270fc084'

const apiFetch = async () => {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            displayResults(data)
        } else {
            throw new Error(response.statusText)
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch()

const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const description = capitalizeStrings(data.weather[0].description)
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', 'weather icon')
    captionDesc.innerHTML = description
}

const capitalizeStrings = string => {
    let arrString = string.split(" ")
    for (var i = 0; i < arrString.length; i++) {
        arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
    }
    string = arrString.join(" ")
    return string
}