const getDate = () => {
    let year = new Date().getFullYear()
    return year
}

const visitsCounter = () => {
    let visits = parseInt(localStorage.getItem('visits'))
    if (isNaN(visits)) {
        visits = 1
    } else {
        visits += 1
    }

    localStorage.setItem('visits', visits)
    return visits
}

const calculatorBetweenVisits = () => {
    let rightNow = new Date()
    let lastVisit = window.localStorage.getItem('lastVisit')
    localStorage.setItem('lastVisit', rightNow)
    let diff = new Date(rightNow) - new Date(lastVisit)
    let diffInDays = diff / (1000 * 60 * 60 * 24)
    return lastVisit === null ? 'Welcome! Let us know if you have any questions.' : diffInDays < 1 ? 'Back so soon! Awesome!' : `You last visited ${diffInDays.toFixed(0)} days ago.`
}

if (document.querySelector('#welcome')) document.querySelector('#welcome').innerHTML = calculatorBetweenVisits()

document.querySelector('#year').innerHTML += getDate()
document.querySelector('#lastModified').innerHTML = `Last modification: ${document.lastModified}`
document.querySelector('#visits') ? document.querySelector('#visits').innerHTML = `Page Visits ${visitsCounter()}` : null
const darkMode = document.querySelector('.slider')
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})

const timeAndDate = new Date()
if (document.querySelector('#timestamp')) document.querySelector('#timestamp').value = timeAndDate

let menu = document.querySelector('#menu')
let navBar = document.querySelector('#nav-bar')

menu.addEventListener('click', () => {
    menu.classList.toggle('show')
    navBar.classList.toggle('show')
})

// Directory Page
let membersList = null
const url = 'https://api.github.com/repos/isama78/wdd230/contents/chamber/data/members.json'
fetch(url)
.then(resp => resp.json())
.then(data => {
    const contentBase64 = data.content;
    const contentDecoded = atob(contentBase64);
    const jsonData = JSON.parse(contentDecoded);
    console.log(jsonData.members);
})