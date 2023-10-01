const listItems = document.querySelector('.list-items')


const toggleMenu = document.querySelector('.toggle-menu')

toggleMenu.addEventListener('click',() => { 
    listItems.classList.toggle('list-items--show')

 })