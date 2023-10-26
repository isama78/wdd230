let myInput = document.querySelector('#favchap')
let btn = document.querySelector('button')
let list = document.querySelector('#list')

const getChapterList = () => {
    let arrayList = window.localStorage.getItem('array')
    if (arrayList !== null) {
        return JSON.parse(arrayList)
    } else {
    }
}

const displayList = item => {
    let li = document.createElement('li')
    let btnDel = document.createElement('button')
    btnDel.ariaLabel = `remove ${item}`
    btnDel.textContent = "❌"
    li.textContent = item
    li.append(btnDel)
    btnDel.addEventListener('click', () => deleteChapter(li.textContent))
    list.append(li)
    myInput.value = ""
}

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter)
});

const setChapterList = list => {
    window.localStorage.setItem('array', JSON.stringify(list))
}

const deleteChapter = chapter => {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList(chaptersArray)

    list.innerHTML = "";

    chaptersArray.forEach(chapter => {
        displayList(chapter)
    });
}

btn.addEventListener('click', () => {
    let inputContent = myInput.value
    if (inputContent === "") {
        return myInput.focus()
    } else {
        displayList(inputContent)
        chaptersArray.push(inputContent)
        setChapterList(chaptersArray)
        myInput.value = ''
        myInput.focus()
    }
})

