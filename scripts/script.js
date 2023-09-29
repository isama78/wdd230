let mainMenu = document.querySelector('#menu')
let navBar = document.querySelector('#navBar')

mainMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show')
    navBar.classList.toggle('show')
})