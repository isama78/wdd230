let myInput = document.querySelector('#favchap')
let btn = document.querySelector('button')
let list = document.querySelector('#list')
let editSection = document.querySelector('.edit-section')
editSection.classList.add('hide')
let liId = 0

btn.addEventListener('click', () => {
    let inputContent = myInput.value
    if (inputContent === "") {
        console.log('empty', inputContent)
        return myInput.focus()
    } else {
        let li = document.createElement('li')
        li.id = liId
        let btnDel = document.createElement('button')
        btnDel.ariaLabel = `remove ${inputContent}`
        btnDel.textContent = "❌"
        li.textContent = inputContent
        //Aditional feature
        let editBtn = document.createElement('button')
        editBtn.ariaLabel = `edit ${inputContent}`
        editBtn.textContent = "✎"
        editBtn.classList.add('edit-btn')
        li.append(editBtn)
        //End aditional feature
        li.append(btnDel)
        btnDel.addEventListener('click', () => {
            li.remove()
        })
        list.append(li)
        myInput.value = ""

        editBtn.addEventListener('click', (e) => {
            editSection.classList.remove('hide')
            let editInput = document.querySelector('.edit-input')
            editInput.focus()
            let sendEditionBtn = document.createElement('button')
            sendEditionBtn.innerText = 'Send Edition'
            let editionSection = document.querySelector('.edit-section')
            editionSection.append(sendEditionBtn)
            editInput.placeholder = e.target.parentElement.childNodes[0].data

            document.querySelector('.cancel-edition-btn').addEventListener('click', () => {
                editSection.classList.add('hide')
                sendEditionBtn.remove()
            })

            sendEditionBtn.addEventListener('click', () => {
                let editedContent = editInput.value
                li.textContent = editedContent
                li.append(editBtn)
                li.append(btnDel)
                editInput.value = ""
                editInput.placeholder = ""
                sendEditionBtn.remove()
                editSection.classList.add('hide')
                myInput.focus()
            })
        })
        liId++
        return myInput.focus()
    }
})

