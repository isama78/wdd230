const getDate = () => {
    let year = new Date().getFullYear()
    return year
}

document.querySelector('#year').innerHTML += getDate()
document.querySelector('#lastModified').innerHTML = `Last modification: ${document.lastModified}` 