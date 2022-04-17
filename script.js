const icon = document.getElementById("icon")
const fullPageMenu = document.querySelector('.fullPageMenu')
const links = fullPageMenu.querySelectorAll('ul li a')

icon.onclick = () => {
    icon.innerHTML = icon.innerHTML === 'menu' ? 'close' : 'menu'
    fullPageMenu.classList.toggle('open')
}

links.forEach(l => l.onclick = () => {
   fullPageMenu.classList.remove('open')
})