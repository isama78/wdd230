const temp = document.querySelector('.temp').innerHTML
const wind = document.querySelector('.wind').innerHTML
const windchillTag = document.querySelector('.windchill')

let windchill = 35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16
console.log(windchill, temp, wind)
windchillTag.textContent += `${windchill.toFixed(2)} F°` 
