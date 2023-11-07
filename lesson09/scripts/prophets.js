const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'
const cards = document.querySelector('#cards');

const getProphetData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.prophets)
    displayProphets(data.prophets)
}

const displayProphets = prophets => {
    prophets.forEach(prophet => {
        const card = document.createElement('section')
        const fullName = document.createElement('h2')
        const portrait = document.createElement('img')
        const birdthDate = document.createElement('p')
        const birdthPlace = document.createElement('p')
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`
        portrait.setAttribute('src', prophet.imageurl)
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', '300')
        portrait.setAttribute('height', '350')
        birdthDate.innerHTML = `<span>Date of Birdth:</span> ${prophet.birthdate}` 
        birdthPlace.innerHTML = `<span>Place of Birdth:</span> ${prophet.birthplace}`  
        card.appendChild(fullName)
        card.appendChild(birdthDate)
        card.appendChild(birdthPlace)
        card.appendChild(portrait)
        cards.append(card)

    });
}

getProphetData()