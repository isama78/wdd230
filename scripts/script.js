let mainMenu = document.querySelector('#menu')
let navBar = document.querySelector('#navBar')

mainMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show')
    navBar.classList.toggle('show')
})

//Handle input range
if (document.querySelector("#pi_input")) {
    const value = document.querySelector("#value");
    const input = document.querySelector("#pi_input");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });
}



if (document.querySelector('#password')) {
    const pass1 = document.querySelector('#password')
    const pass2 = document.querySelector('#password2')
    const message = document.querySelector('#message')
    const checkSame = () => {
        if (pass1.value !== pass2.value) {
            message.style.display = "block";
            message.textContent = "❗Key Phrases DO NOT MATCH!"
            pass2.value = ''
            pass2.focus()
        } else {
            message.style.display = "none";
        }
    }
    pass2.addEventListener('focusout', () => {
        checkSame()
    })
}
