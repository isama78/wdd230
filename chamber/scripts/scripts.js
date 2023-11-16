const getDate = () => {
    let year = new Date().getFullYear()
    return year
}

const getDay = () => {
    let day = new Date().getDay()
    return day
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
const getData = async url => {
    const res = await fetch(url)
    const data = await res.json()
    const contentBase64 = data.content;
    const contentDecoded = atob(contentBase64);
    const jsonData = JSON.parse(contentDecoded);
    membersList = jsonData.members;
    displayMembers(jsonData.members)
}
getData(url)

const membersContainer = document.querySelector('.members')
const displayMembers = members => {
    members.forEach(member => {
        const card = document.createElement('section')
        const image = document.createElement('img')
        const imgContent = document.createElement('div')
        const name = document.createElement('p')
        const address = document.createElement('p')
        const phone = document.createElement('p')
        const level = document.createElement('p')
        const link = document.createElement('a')
        image.setAttribute('src', member.logo)
        image.setAttribute('alt', member.name)
        link.setAttribute('href', member.url)
        link.setAttribute('target', '_blank')
        imgContent.append(image)
        link.innerHTML = member.url
        level.innerHTML = `Level: ${member.level}` 
        address.innerHTML = member.address
        phone.innerHTML = member.phone
        name.innerHTML = member.name
        card.append(imgContent,name,phone,address,level,link)
        membersContainer?.append(card)
    });
}

const mainDirectory = document.querySelector('.members')
let gridBtn= null
let listBtn= null
document.querySelector('.grid-btn') ? gridBtn = document.querySelector('.grid-btn') : null
document.querySelector('.list-btn') ? listBtn = document.querySelector('.list-btn') : null
gridBtn?.addEventListener('click', () => mainDirectory.classList.remove('list'))
listBtn?.addEventListener('click', () => mainDirectory.classList.add('list'))

// Show banner on Mondays, Tuesdays, and Wednesdays
let currentDay = getDay()
let banner = null
document.querySelector('.banner') ? banner = document.querySelector('.banner') : null
currentDay !== 1 && currentDay !== 2 && currentDay !== 3 ? banner?.classList.add('hide') : banner?.classList.remove('hide')

let xBanner = null
document.querySelector('.x-banner') ? xBanner = document.querySelector('.x-banner') : null 
xBanner?.addEventListener('click', () => banner.classList.toggle('hide'))



