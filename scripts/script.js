let mainMenu = document.querySelector('#menu')
let navBar = document.querySelector('#navBar')
let weatherSection = document.querySelector('.local-weather')

mainMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show')
    navBar.classList.toggle('show')
})

//Handle input range
if (document.querySelector("#pi_input")) {
    const value = document.querySelector("#value");
    const input = document.querySelector("#pi_input");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });
}



if (document.querySelector('#password')) {
    const pass1 = document.querySelector('#password')
    const pass2 = document.querySelector('#password2')
    const message = document.querySelector('#message')
    const checkSame = () => {
        if (pass1.value !== pass2.value) {
            message.style.display = "block";
            message.textContent = "❗Key Phrases DO NOT MATCH!"
            pass2.value = ''
            pass2.focus()
        } else {
            message.style.display = "none";
        }
    }
    pass2.addEventListener('focusout', () => {
        checkSame()
    })
}

//Show weather
const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-31.3990547&lon=-64.3590261&units=imperial&appid=cd2e98536f0eda82aa2f8d45270fc084'

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
    let section = document.createElement('section')
    let image = document.createElement('img')
    let description = document.createElement('p')
    let temp = document.createElement('p')
    description.innerText = capitalizeStrings(data.weather[0].description)
    temp.innerText = `${data.main.temp.toFixed(1)}° F` 
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    image.setAttribute('src', iconsrc)
    image.setAttribute('alt', 'weather')
    section.append(image, temp, description)
    weatherSection.append(section)
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
