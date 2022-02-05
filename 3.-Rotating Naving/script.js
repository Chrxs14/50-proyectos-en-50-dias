const body = document.querySelector('.page')
const open_menu = document.getElementById('open')
const close_menu = document.getElementById('close')

open_menu.addEventListener('click', ()=>{
    body.classList.add('active')
})

close_menu.addEventListener('click', ()=>{
    body.classList.remove('active')
})