

const getDate = () => {
    let year = new Date().getFullYear()
    return year
}

const visitsCounter = () => {
    let visits = parseInt(localStorage.getItem('visits'))
    if(isNaN(visits)) {
        visits = 1
    } else {
        visits += 1
    }
    
    localStorage.setItem('visits', visits)
    return visits
}

document.querySelector('#year').innerHTML += getDate()
document.querySelector('#lastModified').innerHTML = `Last modification: ${document.lastModified}` 
document.querySelector('#visits') ? document.querySelector('#visits').innerHTML = `Page Visits ${visitsCounter()}` : null
const darkMode = document.querySelector('.slider')
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})

let menu = document.querySelector('#menu')
let navBar = document.querySelector('#nav-bar')

menu.addEventListener('click', () => {
    menu.classList.toggle('show')
    navBar.classList.toggle('show')
})