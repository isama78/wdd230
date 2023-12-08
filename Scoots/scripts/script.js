//Show weather

let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')
let humidity = document.querySelector('.humidity')
let forecast = document.querySelector('.forecast')
let image = document.querySelector('.image')
let gallery = document.querySelector('.gallery')

let menu = document.querySelector('#menu')
let navBar = document.querySelector('#nav-bar')

menu.addEventListener('click', () => {
    console.log('clic')
    menu.classList.toggle('show')
    navBar.classList.toggle('show')
})

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

const displayForecastResults = (data) => {
    for (element in data.list) {
        if (element % 8 !== 0) continue
        if (element > 1) continue
        let section = document.createElement('section')
        let image = document.createElement('img')
        //let date = document.createElement('p')
        let desc = document.createElement('p')
        //date.innerText = data.list[element].dt_txt.substring(0,10)
        const iconsrc = `https://openweathermap.org/img/wn/${data.list[element].weather[0].icon}@2x.png`
        image.setAttribute('src', iconsrc)
        image.setAttribute('alt', 'weather')
        desc.innerHTML = data.list[element].weather[0].description
        section.append(image, desc)
        forecast.append(section)
    }
}

const displayResults = (data) => {
    desc.innerText = capitalizeStrings(data.weather[0].description)
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    temp.innerText = `Temp: ${data.main.temp.toFixed(1)}°F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    image.setAttribute('src', iconsrc)
    image.setAttribute('alt', 'weather')

}

const capitalizeStrings = string => {
    let arrString = string.split(" ")
    for (var i = 0; i < arrString.length; i++) {
        arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
    }
    string = arrString.join(" ")
    return string
}

document.querySelector('.temp') ? apiFetch(currentWeatherUrl, displayResults) : null
document.querySelector('.temp') ? apiFetch(forecastUrl, displayForecastResults) : null

//Footer
const getDate = () => {
    let year = new Date().getFullYear()
    return year
}

document.querySelector('#year').innerHTML += getDate()
document.querySelector('#lastModified').innerHTML = `Last modification: ${document.lastModified}`

//Rentals table
let bodyTable = document.querySelector('#table-body')
const URL = 'https://raw.githubusercontent.com/isama78/wdd230/main/Scoots/data/prices.json'

const getData = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    displayPrices(data.prices)
    displayGallery(data.prices)
}

const displayPrices = (data) => {
    data.forEach(element => {
        const row = document.createElement('tr')
        const cell = document.createElement('td')
        const cell2 = document.createElement('td')
        const cell3 = document.createElement('td')
        const cell4 = document.createElement('td')
        const cell5 = document.createElement('td')
        const cell6 = document.createElement('td')
        cell.innerText = element["rental-type"]
        cell2.innerText = element["max-persons"]
        cell3.innerText = `$${element.resHalfDay}`
        cell4.innerText = `$${element.resFullDay}`
        cell5.innerText = `$${element["walk-inHalfDay"]}`
        cell6.innerText = `$${element["walk-inFullDay"]}`
        row.append(cell, cell2, cell3, cell4, cell5, cell6)
        bodyTable.append(row)

    });
}

document.querySelector('#table-body') ? getData() : null

//Rentals Gallery
const displayGallery = (data) => {
    data.forEach(element => {
        const section = document.createElement('section')
        const title = document.createElement('h3')
        const image = document.createElement('img')
        const btn = document.createElement('a')
        btn.href = 'reservations.html'
        btn.innerText= 'Reserve It'
        image.setAttribute('src', element.imageURL)
        image.setAttribute('alt', element.imageURL)
        title.innerText = element["rental-type"]
        section.append(title, image, btn)
        gallery.append(section)
    })
}
