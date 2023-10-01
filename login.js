const login_box = document.querySelector('.login_box')

const error = document.querySelector('.error')



login_box.addEventListener('submit',(e) => { 
    e.preventDefault()
    console.log('bsdfsdf');
    error.classList.remove('none')
})