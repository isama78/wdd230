const baseURL = 'https://isama78.github.io/wdd230/'
const linksURL = 'https://raw.githubusercontent.com/isama78/wdd230/main/data/links.json'

let ulLinks = document.querySelector('.weeks')

const getLinks = async url => {
    const resp = await fetch(url)
    const data = await resp.json()
    displayLinks(data.lessons)
}

const displayLinks = weeks => {
    weeks.forEach(week => {
        let li = document.createElement('li')
        li.textContent = `Week ${week.lesson}: ` 
        
        week.links.forEach((link, index) => {
            let a = document.createElement('a')
            a.setAttribute('href', `${baseURL}${link.url}`)
            a.setAttribute('target', `_blank`)
            week.links.length - 1 === index ? a.innerHTML += ` ${link.title}` : a.innerHTML += ` ${link.title} |`
            li.append(a)
        })
        ulLinks.append(li)
    });
}
getLinks(linksURL)