const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')

hamburger.addEventListener('click', showNav)

function showNav() {
    navbar.classList.toggle('active')
    hamburger.classList.toggle('active')
}