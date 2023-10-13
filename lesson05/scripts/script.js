let myInput = document.querySelector('#favchap')
let btn = document.querySelector('button')
let list = document.querySelector('#list')
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
            let editInput = document.querySelector('.edit-input')
            editInput.focus()
            let sendEditionBtn = document.createElement('button')
            sendEditionBtn.innerText = 'Send Edition'
            let editionSection = document.querySelector('.edit-section')
            editionSection.append(sendEditionBtn)
            editInput.placeholder = e.target.parentElement.childNodes[0].data

            sendEditionBtn.addEventListener('click', () => {
                let editedContent = editInput.value
                li.textContent = editedContent
                li.append(editBtn)
                li.append(btnDel)
                editInput.value = ""
                editInput.placeholder = ""
                sendEditionBtn.remove()
                myInput.focus()
            })
        })
        liId++
        return myInput.focus()
    }
})

