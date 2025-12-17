let burger = document.querySelector("#burger-menu")
let button = document.querySelector("#button-bar");

burger.addEventListener('click', () => {
    button.classList.toggle('active')
})