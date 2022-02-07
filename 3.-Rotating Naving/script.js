const main = document.querySelector('.page')
const open_menu = document.getElementById('open')
const close_menu = document.getElementById('close')

open_menu.addEventListener('click', ()=>{
    main.classList.add('active')
})

close_menu.addEventListener('click', ()=>{
    main.classList.remove('active')
})